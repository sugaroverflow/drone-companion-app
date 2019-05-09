function categoryController(Category) {
  function post(req, res) {
    const category = new Category(req.body);

    if (!req.body.title) {
      res.status(400);
      res.send('Title is required');
    } else {
      category.save();
      res.status(201);
      res.send(category);
    }
  }

  function get(req, res) {
    const query = {};

    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Category.find(query, (err, categories) => {
      console.log('test');
      if (err) res.status(500).send(err);
      else {
        const returnCategories = [];
        categories.forEach((element, index, array) => {
          const newCategory = element.toJSON();
          newCategory.links = {};
          // newCategory.links.self = `http://${req.headers.host}/api/categories/${newCategory._id}`;
          returnCategories.push(newCategory);
        });
        res.json(returnCategories);
      }
    });
  }

  return {
    post,
    get
  };
}

module.exports = categoryController;
