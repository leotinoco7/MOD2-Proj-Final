const routes = require("express").Router();
const SeriesController = require("../controllers/SeriesController");

routes.get("/", SeriesController.getAll);
routes.get("/cadastro", SeriesController.cadastro);
routes.post("/create", SeriesController.create);
routes.get("/getById/:id/:method", SeriesController.getById);

module.exports = routes;
