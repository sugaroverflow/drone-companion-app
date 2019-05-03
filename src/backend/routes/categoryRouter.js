/* eslint-disable no-param-reassign */
const express = require('express');
const categoriesController = require('../Controllers/categoriesController');

function routes(Category) {
  const categoryRouter = express.Router();
  const controller = categoriesController(Category);
  categoryRouter.route('/')
    .post(controller.post)
    .get(controller.get);
  categoryRouter.use('/:categoryId', (req, res, next) => {
    Category.findById(req.params.categoryId, (err, category) => {
      if (err) {
        return res.send(err);
      }
      if (category) {
        req.category = category;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  categoryRouter.route('/:categoryId')
    .get((req, res) => {
      const returnCategory = req.category.toJSON();

      returnCategory.links = {};
      const genre = req.category.genre.replace(' ', '%20');
      returnCategory.links.FilterByThisGenre = `http://${req.headers.host}/api/?genre=${genre}`;
      res.json(returnCategory);
    })
    .put((req, res) => {
      const { category } = req;
      category.title = req.body.title;
      category.author = req.body.author;
      category.genre = req.body.genre;
      category.read = req.body.read;
      req.category.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json(category);
      });
    })
    .patch((req, res) => {
      const { category } = req;
      // eslint-disable-next-line no-underscore-dangle
      if (req.body.category_id) {
        // eslint-disable-next-line no-underscore-dangle
        delete req.body.category_id;
      }
      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        category[key] = value;
      });
      req.category.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json(category);
      });
    })
    .delete((req, res) => {
      req.category.remove((err) => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });
  return categoryRouter;
}

module.exports = routes;
