const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const {
  createUsersTable,
  createProductsTable,
  createOrdersTable,
  createOrderDetailsTable,
} = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/products", productRoutes);

createUsersTable();
createProductsTable();

createOrdersTable();

createOrderDetailsTable();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
