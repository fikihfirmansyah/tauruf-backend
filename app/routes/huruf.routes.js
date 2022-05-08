module.exports = app => {
  const huruf = require("../controllers/huruf.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", huruf.create);

  // Retrieve all Tutorials
  router.get("/", huruf.findAll);

  // Retrieve all published Tutorials
  router.get("/published", huruf.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", huruf.findOne);

  // Update a Tutorial with id
  router.put("/:id", huruf.update);

  // Delete a Tutorial with id
  router.delete("/:id", huruf.delete);

  // Delete all Tutorials
  router.delete("/", huruf.deleteAll);

  app.use('/api/huruf', router);
};
