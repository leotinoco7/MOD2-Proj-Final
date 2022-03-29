const res = require("express/lib/response");
const Series = require("../models/Series");

const login = (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const login_ = async (req, res) => {
  try {
    let usuario = req.body.usuario;
    let senha = req.body.senha;

    if (!login_) {
      return res.redirect("/login");
    }

    await Series.login_(usuario), await Series.login_(senha);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const series_ = await Series.findAll();
    res.render("index", { series_ });
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
    res.render("detalhes");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
  cadastro,
  create,
  detalhes,
  login,
  login_,
};
