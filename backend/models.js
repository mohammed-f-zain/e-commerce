const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("database.sqlite");

function createUsersTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      favproducts TEXT,
      orders TEXT
    );
  `;

  db.run(query);
}

function createProductsTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT,
      price REAL NOT NULL,
      category TEXT

      );
  `;

  db.run(query);
}
function createOrdersTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS orders (
      OrderID INTEGER PRIMARY KEY AUTOINCREMENT,
      UserID INTEGER,
      OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `;

  db.run(query);
}

function createOrderDetailsTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS order_details (
      OrderDetailID INTEGER PRIMARY KEY AUTOINCREMENT,
      OrderID INTEGER,
      ProductID INTEGER,
      Quantity INTEGER,
      FOREIGN KEY (OrderID) REFERENCES orders (OrderID) ON DELETE CASCADE
    );
  `;

  db.run(query);
}

function getAllProducts(callback) {
  const query = `SELECT * FROM products;`;

  db.all(query, (err, products) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, products);
    }
  });
}

function getUser(id, callback) {
  const query = "SELECT * FROM users WHERE email = ?";
  db.all(query, [id], (err, user) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, user);
    }
  });
}

function addUser(username, email, password, callback) {
  const query = `
    INSERT INTO users (username, email, password, favproducts, orders)
    VALUES (?, ?, ?, ?, ?);
  `;

  db.run(query, [username, email, password, null, null], function (err) {
    if (err) {
      callback(err);
    } else {
      const userId = this.lastID;
      callback(null, userId);
    }
  });
}

// function userNewOrder(userId, productId, callback) {
//   const query = `
//     INSERT INTO orders (id, productID, userID)
//     VALUES (?, ?, ?);
//   `;
//   db.run(query, [userId, productId, userId], function (err) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, userId); // Return the ID of the newly inserted order
//     }
//   });
// }

function addOrder(userID, callback) {
  const query = `
    INSERT INTO orders (UserID)
    VALUES (?);
  `;

  db.run(query, [userID], function (err) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, userID);
    }
  });
}

function addOrderDetail(orderID, productID, quantity, callback) {
  const query = `
    INSERT INTO order_details (OrderID, ProductID, Quantity)
    VALUES (?, ?, ?);
  `;

  db.run(query, [orderID, productID, quantity], function (err) {
    if (err) {
      callback(err);
    } else {
      const orderDetailID = this.lastID;
      callback(null, orderDetailID);
    }
  });
}

function deleteOrder(orderID, userID, callback) {
  db.run("BEGIN TRANSACTION");

  db.run("DELETE FROM order_details WHERE OrderID = ?", [orderID], handleDelete);

  function handleDelete(err) {
    if (err) {
      return rollbackAndCallback(err);
    }

    db.run("DELETE FROM orders WHERE OrderID = ? AND UserID = ?", [orderID, userID], function (err) {
      if (err) {
        return rollbackAndCallback(err);
      }

      if (this.changes === 0) {
        return rollbackAndCallback(new Error("Order not found for this user."));
      }

      db.run("COMMIT", callback);
    });
  }

  function rollbackAndCallback(err) {
    db.run("ROLLBACK", () => callback(err));
  }
}


module.exports = {
  createUsersTable,
  createProductsTable,
  createOrdersTable,
  createOrderDetailsTable,
  getAllProducts,
  getUser,
  addUser,
  addOrder,
  addOrderDetail,
  deleteOrder,
};
