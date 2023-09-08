const express = require("express");
const bodyParser = require("body-parser");
const { verifyAToken } = require("../middleware/AuthenticateUser");
const routes = express.Router();
//Import all model's objects
const { users, products, orders } = require("../model");
//User's router
routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
routes.get("/users/:id", (req, res) => {
  users.fetchUser(req, res);
});
routes.post("/register", bodyParser.json(), (req, res) => {
  users.register(req, res);
});
routes.put("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});
routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});
// Products Routes
routes.get("/products", (req, res) => {
  products.fetchProducts(req, res)
});
routes.get("/product/:id", (req, res) => {
  products.fetchProduct(req, res)
});
routes.post("/products/add", bodyParser.json(), (req, res) => {
  products.addProduct(req, res);
});
routes.put("/products/:id", bodyParser.json(), (req, res) => {
  products.updateProducts(req, res)
});
routes.patch("/products/:id", bodyParser.json(), (req, res) => {
  products.updateProducts(req, res)
});
routes.delete("/products/:id", (req, res) => {
  products.deleteProduct(req, res);
});

//order router

module.exports = {
  express,
  routes,
  verifyAToken,
};
// done