//model Index
const Users = require("./Users");
const Orders = require("./Orders");
const Products = require("./Products");
//Export all objects
module.exports = {
  users: new Users(),
  Products: new Products(),
  orders: new Orders(),
};
