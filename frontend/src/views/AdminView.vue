<template>
    <div>
        <div class="container">
            <h1>Admin</h1>
        </div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
            ADD NEW SNEAKER
        </button>
        <button class="btn btn-outline-warning">SORT</button>

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
                <tr v-for="item in nike" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td><img :src="item.image" alt=""> </td>
                    <td> {{ item.title }}</td>
                    <td>{{ item.brand }}</td>
                    <td>{{ item.price }}</td>
                    <td><button class="btn btn-outline-info" data-bs-toggle="modal"
                            data-bs-target="#editModal1">Edit</button>
                        <div class="modal fade" style="font-family: 'Courier New', Courier, monospace; font-weight: 700;"
                            id="editModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content"
                                    style="background-image: url('https://i.postimg.cc/1t1wtks9/3271a637cdaf3fff549e5e49e44a4357.jpg');background-size: cover;">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel"
                                            style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                                            Nike</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
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
                        |<button class="btn btn-outline-danger">Delete</button>
                    </td>
                </tr>
                <tr v-for="data in adidas" :key="data.id">
                    <th scope="row">{{ data.id }}</th>
                    <td><img :src="data.image" alt=""> </td>
                    <td> {{ data.title }}</td>
                    <td>{{ data.brand }}</td>
                    <td>{{ data.price }}</td>
                    <td><button class="btn btn-outline-info" data-bs-toggle="modal"
                            data-bs-target="#editModal3">Edit</button>
                        <div class="modal fade" style="font-family: 'Courier New', Courier, monospace; font-weight: 700;"
                            id="editModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content"
                                    style="background-image: url('https://i.postimg.cc/RZqcb1gz/52fe26771081b8193b0a7edb742e7ed6.jpg');background-size: cover;">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Adidas</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
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
                        |<button class="btn btn-outline-danger">Delete</button>
                    </td>
                </tr>
                <tr v-for="data in new_balance" :key="data.id">
                    <th scope="row">{{ data.id }}</th>
                    <td><img :src="data.image" alt=""> </td>
                    <td> {{ data.title }}</td>
                    <td>{{ data.brand }}</td>
                    <td>{{ data.price }}</td>
                    <td><button class="btn btn-outline-info" data-bs-toggle="modal"
                            data-bs-target="#editModal">Edit</button>
                        <!-- Edit Modal Start -->
                        <div class="modal fade" style="font-family: 'Courier New', Courier, monospace; font-weight: 700;"
                            id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content"
                                    style="background-image: url('https://i.postimg.cc/pXWQKM8r/09d537c04256ed7bc50c8c3625e28cb0.jpg');background-size: cover;">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">New Balance</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
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
                        <!-- Edit Modal Footer -->

                        |<button class="btn btn-outline-danger">Delete</button>
                    </td>
                </tr>
                <tr v-for="data in converse" :key="data.id">
                    <th scope="row">{{ data.id }}</th>
                    <td><img :src="data.image" alt=""> </td>
                    <td> {{ data.title }}</td>
                    <td>{{ data.brand }}</td>
                    <td>{{ data.price }}</td>
                    <td><button class="btn btn-outline-info" data-bs-toggle="modal"
                            data-bs-target="#editModal4">Edit</button>
                        <div class="modal fade"
                            style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-weight: 700;"
                            id="editModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content"
                                    style="background-image: url('https://i.postimg.cc/fT8cKqjK/b3c16982775609c1e597fc436820281a.jpg');background-size: cover;">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Converse</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
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

                    |<button class="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div></template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>