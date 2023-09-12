<template>
    <div class="admin">
        <div class="container">
            <h4>Users</h4>
            <div class="card" style="width: 18rem;" v-for="User in Users" :key="User.userID">
                <img :src="User.userUrl" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ User.firstName }} {{ User.lastName }}</h5>
                    <p class="card-text">{{ User.email }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{ User.userPass }}</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
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
                </div>
            </div>
        </div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
            ADD
        </button>


        <!-- Modal -->
        <div class="modal fade" style="font-family: 'Courier New', Courier, monospace; font-weight: 700;" id="exampleModal"
            tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-warning">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">New Sneaker</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="create-animal">
                            #<br>
                            <input type="text" name="name"><br>
                            Title<br>
                            <input type="text" name="title"><br>
                            Brand:<br>
                            <input type="text" name="brand"><br>
                            Price:<br>
                            <input type="number" name="price" min="700.00" max="15000.00" step="0.01"><br>
                            Image:<br>
                            <input type="text" name="image"><br>
                            <input type="submit" name="submit" id="submit-new">
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-dark">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Price</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>

    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['Users']),
        ...mapState(['Products'])
    },
    mounted() {
        this.$store.dispatch('fetchUsers');
        this.$store.dispatch('fetchProducts')
    },
    methods: {
        deleteProduct(prodID) {

        },
    },
}
</script>

<style scoped>
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
}

.admin {
    color: white;
    background-color: black;
}

.container {
    border: solid red 2px;
    padding: 10px;
}</style>