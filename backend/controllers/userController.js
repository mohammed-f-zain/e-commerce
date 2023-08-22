const {
  getUser,
  addUser,
  addOrder,
  addOrderDetail,
  deleteOrder,
} = require("../models");

const newUser = (req, res) => {
  const { username, email, password } = req.body;
  addUser(username, email, password, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(user);
    }
  });
};

const UserController = (req, res) => {
  const userId = req.params.id;
  getUser(userId, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else if (user[0] === undefined) {
      res.json("user not exists");
    } else {
      res.json(user);
    }
  });
};

// const newOrder = (req, res) => {
//   const { userId, productId } = req.body;
//   userNewOrder(userId, productId, (err, order) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: "Internal server error" });
//     } else {
//       res.json("add new order successfully");
//     }
//   });
// };

const userNewOrder = (req, res) => {
  const { userID } = req.body;
  addOrder(userID, (err, userID) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(`add new order successfully ${userID}`);
    }
  });
};

const newOrderDetails = (req, res) => {
  const { orderID, productID, quantity } = req.body;
  addOrderDetail(orderID, productID, quantity, (err, orderDetailsID) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(`add new order successfully ${orderDetailsID}`);
    }
  });
};

const deleteOrderFromCarts = (req, res) => {
  const { orderID, userID } = req.body;
  deleteOrder(orderID, userID, (err, orderID) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(`Delete Order From cart Successfuly ${orderID}`);
    }
  });
};

module.exports = {
  UserController,
  newUser,
  userNewOrder,
  newOrderDetails,
  deleteOrderFromCarts,
};
