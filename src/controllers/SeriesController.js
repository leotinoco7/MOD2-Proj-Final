const res = require("express/lib/response");
const Series = require("../models/Series");

const login = (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const acesso = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;

    if (!acesso) {
      return res.redirect("/index");
    }

    await Series.acesso(username), await Series.acesso(password);
    res.redirect("/home");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const series_ = await Series.findAll();
    res.render("home", { series_ });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const cadastro = (req, res) => {
  try {
    res.render("cadastro");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const create = async (req, res) => {
  try {
    const serie = req.body;

    if (!serie) {
      return res.redirect("/cadastro");
    }

    await Series.create(serie);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const detalhes = (req, res) => {
  try {
    res.render("lista");
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
      res.render("home", {
        series_,
        seriePut: serie,
        serieDel: null,
      });
    } else {
      res.render("home", {
        series_,
        seriePut: null,
        serieDel: serie,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = (req, res) => {};

module.exports = {
  getAll,
  cadastro,
  create,
  detalhes,
  login,
  acesso,
  getById,
  update,
};
