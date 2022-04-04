const res = require("express/lib/response");
const Series = require("../models/Series");
let message = "";
let type = "";

const getAll = async (req, res) => {
  try {
    const series_ = await Series.findAll();
    res.render("index", { series_});
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const cadastro = (req, res) => {
  try {
    res.render("cadastro", {message, type});
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const create = async (req, res) => {
  try {
    const serie = req.body;

    if (!serie) {
      message = "Preencha todos os campos para cadastrar!";
      type = "danger";
      return res.redirect("/cadastro");
    }

    await Series.create(serie);
    message = "Série cadastrada com sucesso!";
    type = "success";
    res.redirect("/lista");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const detalhes = async (req, res) => {
  try {
    const series_ = await Series.findAll();
    res.render("lista", { series_, seriePut: null, serieDel: null, message, type});
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const series_ = await Series.findAll();
    const serie = await Series.findByPk(req.params.id);

    if (method == "put") {
      res.render("lista", {
        series_,
        seriePut: serie,
        serieDel: null,
        message,
        type,
      });
    } else {
      res.render("lista", {
        series_,
        seriePut: null,
        serieDel: serie,
        message,
        type,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const serie = req.body;
    await Series.update(serie, { where: { id: req.params.id } });
    message = "Série atualizada com sucesso!";
    type = "success";
    res.redirect("/lista");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await Series.destroy({ where: { id: req.params.id } });
    message = "Série deletada com sucesso!";
    type = "success";
    res.redirect("/lista");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
  cadastro,
  create,
  detalhes,
  getById,
  update,
  remove,
};
