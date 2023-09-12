<template>
    <div class="admin">
        <!-- Users Table -->
        <div>
            <form>
                <h2>Add User</h2>
                <input v-model="newUser.firstName" placeholder="firstName" />
                <input v-model="newUser.lastName" placeholder="lastName" />
                <input v-model="newUser.userAge" placeholder="userAge" />
                <input v-model="newUser.Gender" placeholder="Gender" />
                <input v-model="newUser.userRole" placeholder="userRole" />
                <input v-model="newUser.emailAdd" placeholder="emailAdd" />
                <input v-model="newUser.userPass" placeholder="userPass" />
                <input v-model="newUser.userProfile" placeholder="userProfile" />
                <button type="submit">
                    add user
                </button>
            </form>
        </div>
        <table class="w-100">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Profile</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.userID">
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.userAge }}</td>
                    <td>{{ user.Gender }}</td>
                    <td>{{ user.userRole }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>
                        <div class="card bg-transparent">
                            <img :src="user.userprofile" class="mx-auto" alt="...">
                        </div>
                    </td>
                    <td>
                        <button>edit</button>
                        <button @click="deleteUser(user.userID)">delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Products Table -->
        <div>
            <h2>Add Product</h2>
            <input v-model="newProduct.prodName" placeholder="Product Name" />
            <input v-model="newProduct.Category" placeholder="Brand" />
            <input v-model="newProduct.amount" placeholder="Price" type="number" step="0.01" />
            <input v-model="newProduct.prodUrl" placeholder="Product URL" />
            <button @click="addProduct" onclick="window.location.reload()">Add Product</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Product URL</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="Product in Products" :key="Product.prodID">
                    <td>{{ Product.prodID }}</td>
                    <td>{{ Product.prodName }}</td>
                    <td>{{ Product.Brand }}</td>
                    <td>{{ Product.price }}</td>
                    <td><img :src="Product.prodUrl" alt=""></td>
                    <td>
                        <button @click="editProduct(Product)">Edit</button>
                        <button @click="deleteProduct(Product.prodID)" onclick="window.location.reload()">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "AdminTable",
    components: {},
    data() {
        return {
            newUser: {
                firstName: "",
                lastName: "",
                email: "",
                userPass: "",

            },
            newProduct: {
                prodName: "",
                brand: "",
                price: "",
                prodUrl: "",
            },
        };
    },
    computed: {
        users() {
            return this.$store.state.Users;
        },
        products() {
            return this.$store.state.Products;
        },
    },
    mounted() {
        this.$store.dispatch('fetchUsers');
        this.$store.dispatch('fetchProducts');
    },
    methods: {
        async addUser() {
            try {
                const response = await axios.post('https://capstone-zyve.onrender.com/', this.newUser);
                alert(response.data.msg); // Assuming the response has a 'msg' property
                this.newUser = {
                    username: "",
                    email: "",
                    firstName: "",
                    lastName: "",
                };
                this.fetchUsers();
            } catch (error) {
                console.error("Error adding user:", error);
            }
        },
        async editUser(user) {
            try {
                // Check if user.userId is defined
                if (user.userId === undefined) {
                    console.error("User ID is undefined");
                    return; // Exit the function to prevent the request
                }
                const updatedData = {
                    username: this.newUser.username,
                    email: this.newUser.email,
                    firstName: this.newUser.firstName,
                    lastName: this.newUser.lastName,
                };
                console.log('PATCH Request URL:', `
       https://capstone-zyve.onrender.com/${user.userId}`);
                console.log('PATCH Request Payload:', updatedData);
                // Make the PATCH request only if user.userId is defined
                await axios.patch(`https://capstone-zyve.onrender.com/update-user/${user.userId}`, updatedData);
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
                const response = await axios.post('https://capstone-zyve.onrender.com/', this.newProduct);
                alert(response.data.msg); // Assuming the response has a 'msg' property
                this.newProduct = {
                    prodName: "",
                    quantity: 0,
                    amount: 0,
                    Category: "",
                    prodUrl: "",
                };
                // this.fetchProducts()
            } catch (error) {
                console.error("Error adding product:", error);
            }
        },
        async editProduct(product) {
            try {
                // Check if product.prodID is defined
                if (product.prodID === undefined) {
                    console.error("Product ID is undefined");
                    return; // Exit the function to prevent the request
                }
                const updatedData = {
                    prodName: this.newProduct.prodName,
                    quantity: this.newProduct.quantity,
                    amount: this.newProduct.amount,
                    Category: this.newProduct.Category,
                    prodUrl: this.newProduct.prodUrl,
                };
                console.log('PATCH Request URL:', `https://capstone-zyve.onrender.com/products/updateProduct/${product.prodID}`);
                console.log('PATCH Request Payload:', updatedData);
                // Make the PATCH request only if product.prodID is defined
                await axios.patch(`https://capstone-zyve.onrender.com/products/updateProduct/${product.prodID}`, updatedData);
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
            this.newUser.username = "";
            this.newUser.email = "";
            this.newUser.firstName = "";
            this.newUser.lastName = "";
        },
        populateForm(user) {
            this.newUser.username = user.username;
            this.newUser.email = user.email;
            this.newUser.firstName = user.firstName;
            this.newUser.lastName = user.lastName;
        },
    },
};
</script>

<style scoped>
.admin{
    color: white;
}
.table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.table th,
.table td {
    padding: 10px;
    border: 1px solid #ddd;
}

/* Style for product images */
.table img {
    max-width: 100px;
    height: auto;
    display: block;
    margin: 0 auto;
}

/* Style for buttons */
.table button {
    padding: 6px 12px;
    background-color: #3490DC;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.table button:hover {
    background-color: #2779BD;
}
</style>