// routes/userRoutes.js
const express = require("express");
const {
  UserController,
  newUser,
  userNewOrder,
  newOrderDetails,
  deleteOrderFromCarts,
} = require("../controllers/userController");

const router = express.Router();

// Define your user routes here
router.get("/:id", UserController);
router.post("/add-user", newUser);
router.post("/add-order", userNewOrder);
router.post("/add-order-details", newOrderDetails);
router.delete("/delete-order", deleteOrderFromCarts);

module.exports = router;
