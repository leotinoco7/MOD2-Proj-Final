const Series = require("../models/Series");

const getAll = async (req, res) => {
  try {
    const series_ = await Series.findAll();
    res.render("index", { series_ });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
};
