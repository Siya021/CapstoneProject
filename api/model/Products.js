const db = require("../config");

class Products {
  fetchProducts(req, res) {
    const query = `
      SELECT prodID, brand, prodName, price, productUrl
      FROM Products;`;
    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          status: 500,
          error: "Internal Server Error",
        });
      } else {
        res.json({
          status: res.statusCode,
          results,
        });
      }
    });
  }

  fetchProduct(req, res) {
    const prodID= req.params.id;
    const query = `
      SELECT prodID, brand, prodName, price, productUrl
      FROM Products
      WHERE prodID = ?;`;
    db.query(query, [prodID], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          status: 500,
          error: "Internal Server Error",
        });
      } else if (result.length === 0) {
        res.status(404).json({
          status: 404,
          error: "Product not found",
        });
      } else {
        res.json({
          status: res.statusCode,
          result: result[0],
        });
      }
    });
  }

  fetchBrand(req, res) {
    const brand = req.params.brand;
    const query = `
      SELECT prodID, brand, prodName, price, productUrl
      FROM Products
      WHERE brand = ?;`;
    db.query(query, [brand], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          status: 500,
          error: "Internal Server Error",
        });
      } else if (result.length === 0) {
        res.status(404).json({
          status: 404,
          error: "Product not found",
        });
      } else {
        res.json({
          status: res.statusCode,
          result: result,
        });
      }
    });
  }

  addProduct(req, res) {
    const data = req.body;
    const query = `
      INSERT INTO Products (brand, prodName, price, productUrl)
      VALUES (?, ?, ?, ?);`;

    db.query(query, [data.brand, data.prodName, data.price, data.productUrl], (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          status: 500,
          error: "Internal Server Error",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "Product added successfully",
        });
      }
    });
  }

  updateProduct(req, res) {
    const prodID = req.params.id;
    const updatedData = req.body;
    const query = `
      UPDATE Products
      SET ?
      WHERE prodID = ?;`;

    db.query(query, [updatedData, prodID], (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          status: 500,
          error: "Internal Server Error",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "Product updated successfully",
        });
      }
    });
  }

  deleteProduct(req, res) {
    const prodID = req.params.id;
    const query = `
      DELETE FROM Products
      WHERE prodID = ?;`;

    db.query(query, [prodID], (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          status: 500,
          error: "Internal Server Error",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "Product deleted successfully",
        });
      }
    });
  }
}

module.exports = Products;
