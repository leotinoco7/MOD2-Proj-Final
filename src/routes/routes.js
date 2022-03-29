const routes = require("express").Router();
const SeriesController = require("../controllers/SeriesController");

routes.get("/login", SeriesController.login);
routes.post("/login_", SeriesController.login_);
routes.get("/", SeriesController.getAll);
routes.get("/cadastro", SeriesController.cadastro);
routes.post("/create", SeriesController.create);
routes.get("/detalhes", SeriesController.detalhes);

module.exports = routes;

