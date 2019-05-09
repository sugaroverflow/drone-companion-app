function categoriesController(Category) {
  function post(req, res) {
    const category = new Category(req.body);
    if (!req.body.title) {
      res.status(400);
      return res.send('Title is required');
    }
    category.save();
    res.status(201);
    return res.json(category);
  }
  function get(req, res) {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Category.find(query, (err, categories) => {
      if (err) {
        return res.send(err);
      }
      const returnCategorys = categories.map((category) => {
        const newCategory = category.toJSON();
        newCategory.links = {};
        newCategory.links.self = `http://${req.headers.host}/api/categories/${category.category_id}`;
        return newCategory;
      });
      return res.json(returnCategorys);
    });
  }
  return { post, get };
}

module.exports = categoriesController;
