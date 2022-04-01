const res = require("express/lib/response");
const Series = require('../models/Series');

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
    res.redirect("/lista");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const detalhes = async (req, res) => {
  try {
    const series_ = await Series.findAll();

    res.render("lista", series_);
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};


const Edit = async (req, res) => {
  try {
    const method = req.params.method;
    const series_ = await Series.findAll();
    const serie = await Series.findByPk(req.params.id);

    if (method == "put") {
      res.render("lista", {
        series_,
        seriePut: serie,
        serieDel: null,
      });
    } else {
      res.render("lista", {
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

app.get("/deletar/:id", async (req,res) => {
  const serie = await Series.findByPk(req.params.id);
})

module.exports = {
  getAll,
  cadastro,
  create,
  Ed,
  update,
  detalhes
};
