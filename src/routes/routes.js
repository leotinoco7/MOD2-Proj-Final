const routes = require("express").Router();
const SeriesController = require("../controllers/SeriesController");

routes.get("/", SeriesController.getAll);
routes.get("/cadastro", SeriesController.cadastro);
routes.post("/create", SeriesController.create);
routes.get("/lista", SeriesController.detalhes);
routes.get("/getById/:id/:method", SeriesController.getById);
routes.post("/update/:id", SeriesController.update);
routes.get("/remove/:id", SeriesController.remove);



module.exports = routes;