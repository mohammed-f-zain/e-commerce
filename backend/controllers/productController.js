const { getAllProducts } = require("../models");

function getAllProductsController(req, res) {
  getAllProducts((err, products) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(products);
    }
  });
}

module.exports = { getAllProductsController };
