const routes = require("express").Router();
const SeriesController = require("../controllers/SeriesController");

routes.get("/home", SeriesController.getAll);

module.exports = routes;
