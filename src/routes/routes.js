const routes = require("express").Router();
const SeriesController = require("../controllers/SeriesController");

routes.get("/index", SeriesController.getAll);
routes.get("/cadastro", SeriesController.cadastro);
routes.post("/create", SeriesController.create);
// routes.get("/Edit/:id/:method", SeriesController.Edit);
routes.get("/lista", SeriesController.detalhes);

module.exports = routes;
