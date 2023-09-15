<template>
    <div class="admin">
        <div class="container">
            <h4>Users</h4>
            <div class="row">
                <form style="margin: 10px;">
                    <h2>Add User</h2>
                    <input class="form-control-sm" v-model="newUser.firstName" placeholder="firstName" />
                    <input class="form-control-sm" v-model="newUser.lastName" placeholder="lastName" />
                    <input class="form-control-sm" v-model="newUser.email" placeholder="email" />
                    <input class="form-control-sm" v-model="newUser.userPass" placeholder="userPass" />
                    <input class="form-control-sm" v-model="newUser.userUrl" placeholder="userProfile" />
                    <button type="submit" class="form-control-sm" id="addUser">
                        Add User
                    </button>
                </form>
                <div class="card" style="width: 18rem;margin:10px" v-for="User in Users" :key="User.userID">
                    <img :src="User.userUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ User.firstName }} {{ User.lastName }}</h5>
                        <p class="card-text">{{ User.email }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{ User.userPass }}</li>
                    </ul>
                    <div class="card-body">
                        <a class="editcard-link" @click="deleteUser(user.userID)"><svg xmlns="http://www.w3.org/2000/svg"
                                width="26" height="26" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg></a>
                        <a href="#" class="delcard-link"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                            </svg></a>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="container-fluid" style="background-color: black;">
            <h4>Products</h4>
            <div class="row">
                <form style="margin: 10px;">
                    <h2>Add Product</h2>
                    <input v-model="newProduct.prodName" placeholder="Product Name" />
                    <input v-model="newProduct.brand" placeholder="brand" type="text" />
                    <input v-model="newProduct.price" placeholder="price" type="number" step="0.01" />
                    <input v-model="newProduct.prodUrl" placeholder="Product URL" />
                    <button @click="addProduct" onclick="window.location.reload()">Add Product</button>
                </form>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="Product in Products" :key="Product.prodID">
                        <td>{{ Product.prodID }}</td>
                        <td>{{ Product.prodName }}</td>
                        <td>{{ Product.Brand }}</td>
                        <td>{{ Product.price }}</td>
                        <td><img :src="Product.productUrl" alt="image"></td>
                        <td>
                            <a href="#" class="editcard-link"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                    fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg></a>
                            <a href="#" class="delcard-link"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                    fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from "axios";

export default {
    name: "Table",
    data() {
        return {
            newUser: {
                username: "",
                email: "",
                firstName: "",
                lastName: "",
            },
            newProduct: {
                prodName: "",
                brand: "",
                price: 0,
                prodUrl: "",
            },
        };
    },
    computed: {
        Users() {
            return this.$store.state.Users;
        },
        Products() {
            return this.$store.state.Products;
        },
        ...mapState(['Users'])
    },
    mounted() {
        this.$store.dispatch('fetchUsers');
        this.$store.dispatch('fetchProducts');
    },
    methods: {
        async addNewUser() {
            try {
                const response = await axios.post('https://capstone-zyve.onrender.com/register', this.newUser);
                alert(response.data.msg); // Assuming the response has a 'msg' property
                this.newUser = {
                    firstName: "",
                    lastName: "",
                    email: "",
                    userPass: "",
                };
                this.fetchUsers();
            } catch (error) {
                console.error("Error adding user:", error);
            }
        },
        async editUser(User) {
            try {
                // Check if user.userId is defined
                if (User.userId === undefined) {
                    console.error("User ID is undefined");
                    return; // Exit the function to prevent the request
                }
                const updatedData = {
                    firstName: this.newUser.firstName,
                    lastName: this.newUser.lastName,
                    email: this.newUser.email,
                    userPass: this.newUser.userPass,
                };
                console.log('PATCH Request URL:', `
        https://capstone-zyve.onrender.com/update-user/${User.userID}`);
                console.log('PATCH Request Payload:', updatedData);
                // Make the PATCH request only if user.userId is defined
                await axios.patch(`https://capstone-zyve.onrender.com/update-user/${User.userID}`, updatedData);
                this.fetchUsers();
                alert('User updated successfully');
            } catch (error) {
                console.error("Error editing user:", error);
            }
        },
        async deleteUser(userID) {
            const confirmed = confirm("Are you sure you want to delete this user?");
            if (confirmed) {
                try {
                    await this.$store.dispatch("deleteUser", userID);
                    console.log("User deleted successfully!");
                } catch (error) {
                    console.error("Error deleting user:", error);
                    // Handle the error if needed
                }
            }
            this.$router.push("/admin");
        },
        async addProduct() {
            try {
                const response = await axios.post('https://capstone-zyve.onrender.com/addProduct', this.newProduct);
                alert(response.data.msg);
                this.newProduct = {
                    prodName: "",
                    brand: "",
                    price: 0,
                    prodUrl: "",
                };
                // this.fetchProducts()
            } catch (error) {
                console.error("Error adding product:", error);
            }
        },
        async editProduct(Product) {
            try {
                // Check if product.prodID is defined
                if (Product.prodID === undefined) {
                    console.error("Product ID is undefined");
                    return; // Exit the function to prevent the request
                }
                const updatedData = {
                    prodName: this.newProduct.prodName,
                    brand: this.newProduct.brand,
                    price: this.newProduct.price,
                    prodUrl: this.newProduct.prodUrl,
                };
                console.log('PATCH Request URL:', `https://capstone-zyve.onrender.com/updateProduct/${Product.prodID}`);
                console.log('PATCH Request Payload:', updatedData);
                // Make the PATCH request only if product.prodID is defined
                await axios.patch(`https://capstone-zyve.onrender.com/Products/updateProduct/${Product.prodID}`, updatedData);
                this.fetchProducts();
                alert('Product updated successfully');
            } catch (error) {
                console.error("Error editing product:", error);
            }
        },
        async deleteProduct(prodID) {
            const confirmed = confirm("Are you sure you want to delete this product?");
            if (confirmed) {
                try {
                    await this.$store.dispatch("deleteProduct", prodID);
                    console.log("Product deleted successfully!");
                } catch (error) {
                    console.error("Error deleting product:", error);
                    // Handle the error if needed
                }
            }
            this.$router.push("/admin");
        },
        resetForm() {
            // Reset the form after a successful add
            this.newUser.firstName = "";
            this.newUser.lastName = "";
            this.newUser.email = "";
            this.newUser.userPass = "";
        },
        populateForm(user) {
            this.newUser.firstName = user.firstName;
            this.newUser.lastName = user.lastName;
            this.newUser.email = user.email;
            this.newUser.userPass = user.userPass;
        },
    },
};
</script>

<style scoped>
#addUser {
    background-color: red;
    color: white;
}

img {
    height: 60px;
    width: 60px;
}

.delcard-link {
    color: red;
    margin: 10px;
}

.editcard-link {
    color: green;
    margin: 10px;
}

h4 {
    text-decoration: overline red 6px;
    text-align: start;
    font-weight: 700;
}

.admin {
    color: white;
    background-color: black;
}

.container {
    border: solid white 2px;
    padding: 10px;
    background-color: red;
}
</style>