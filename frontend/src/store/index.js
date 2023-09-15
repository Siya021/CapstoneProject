import { createStore } from "vuex";
import axios from "axios";

const url = "https://capstone-zyve.onrender.com/";
export default createStore({
  state: {
    Users: null,
    User: null,
    Products: null,
    Product: null,
    Orders: null,
    Order: null,
    msg: null,
    spinner: null,
    token: null,
    singleProd: null,
  },
  getters: {},
  mutations: {
    setSingle(state, singleProd) {
      state.singleProd = singleProd;
    },
    setUsers(state, Users) {
      state.Users = Users;
    },
    setUser(state, User) {
      state.User = User;
    },
    setProducts(state, Products) {
      state.Products = Products;
    },
    setProduct(state, Product) {
      state.Product = Product;
    },
    setOrders(state, Orders) {
      state.Orders = Orders;
    },
    setOrder(state, Order) {
      state.Order = Order;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setmsg(state, msg) {
      state.msg = msg;
    },
    addUser: (state, newUser) => {
      state.Users.push(newUser);
    },
    deleteProduct: (state, prodID) => {
      state.Products = state.Products.filter(
        (Product) => Product.prodID !== prodID
      );
    },
    deleteUser: (state, userID) => {
      state.Users = state.Users.filter((User) => User.userID !== userID);
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${url}Users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occured.");
      }
    },
    async addNewUser(context, newUser) {
      try {
        const response = await axios.post(`${url}register`, newUser);
        if (response.status === 201) {
          context.commit("addNewUser", newUser);
        }
      } catch (error) {
        console.error("Error adding new user:", error);
      }
    },
    async addProduct(context, newProduct) {
      try {
        const response = await axios.post(`${url}addProduct`, newProduct);
        if (response.status === 201) {
          context.commit("addProduct", newProduct);
        }
      } catch (error) {
        console.error("Error adding product");
      }
    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${url}products`);
        context.commit("setProducts", data.results);
        console.log(data.results);
      } catch (e) {
        context.commit("setMsg", "An error occured.");
      }
    },
    async fetchProduct(context, prodID) {
      try {
        const { data } = await axios.get(`${url}product/${prodID}`);
        context.commit("setProduct", data.result);
        console.log(data.result);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },
    async fetchBrand(context, brand) {
      try {
        const { data } = await axios.get(`${url}Products/${brand}`);
        context.commit("setProduct", data.result[0]);
        console.log(data.result);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },

    async deleteProduct(context, prodID) {
      try {
        context.commit("setDeletionStatus", null);
        const response = await axios.delete(`${url}Products/${prodID}`);
        if (response.status !== 200) {
          throw new Error(
            `Failed to delete product. Status: ${response.status}`
          );
        }
        context.commit("deleteProduct", prodID);
        context.commit("setDeletionStatus", "success");
      } catch (error) {
        console.error("Error deleting product:", error);
        context.commit("setDeletionStatus", "error");
      }
    },
    async editProduct(context, { prodID, updatedData }) {
      try {
        const response = await axios.patch(
          `${url}Products/${prodID}`,
          updatedData
        );
        if (response.status !== 200) {
          throw new Error(
            `Failed to update product. Status: ${response.status}`
          );
        }
        context.commit("updateProduct", { prodID, updatedData });
        context.commit("setEditStatus", "success");
      } catch (error) {
        console.error("Error editing product:", error);
        context.commit("setEditStatus", "error");
      }
    },
    async fetchOrder(context, prodID) {
      try {
        const { data } = await axios.get(`${url}order/${prodID}`);
        context.commit("setProduct", data.result);
        console.log(data.result);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },
  },
  modules: {},
});
