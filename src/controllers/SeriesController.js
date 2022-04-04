const res = require("express/lib/response");
const Series = require("../models/Series");
let message = "";

const series_ = Series.findAll();

const getAll = async (req, res) => {
  try {
    const series_ = await Series.findAll();

    let randomSeries;

    currentRandom = [Math.floor(Math.random() * series_.length)];

    randomSeries = series_[currentRandom];

    console.log(currentRandom);

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
    res.render("lista", { series_, seriePut: null, serieDel: null});
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  setTimeout(() => {
    message = "";
  }, 1000);
  try {
    const method = req.params.method;
    const series_ = await Series.findAll();
    const serie = await Series.findByPk(req.params.id);

    if (method == "put") {
      res.render("lista", {
        series_,
        seriePut: serie,
        serieDel: null,
        message
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

const update = async (req, res) => {
  try {
    const serie = req.body;
    await Series.update(serie, { where: { id: req.params.id } });
    res.redirect("/lista");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
  message = "Série atualizada com sucesso!";
};

const remove = async (req, res) => {
  try {
    await Series.destroy({ where: { id: req.params.id } });
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
