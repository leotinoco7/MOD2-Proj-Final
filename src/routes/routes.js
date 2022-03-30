const routes = require("express").Router();
const SeriesController = require("../controllers/SeriesController");

routes.get("/index", SeriesController.login);
routes.post("/acesso", SeriesController.acesso);
routes.get("/home", SeriesController.getAll);
routes.get("/cadastro", SeriesController.cadastro);
routes.post("/create", SeriesController.create);
routes.get("/detalhes", SeriesController.detalhes);

module.exports = routes;

