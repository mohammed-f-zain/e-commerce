const express = require("express");
const {
  getAllProductsController,
} = require("../controllers/productController");

const router = express.Router();

// Route to get all products
router.get("/", getAllProductsController);

module.exports = router;
