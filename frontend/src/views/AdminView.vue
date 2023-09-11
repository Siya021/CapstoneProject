<template>
    <div>
        <div class="container">
            <h1>Admin</h1>
            
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
import AddProducts from '@/components/AddProducts.vue';
    export default {
    components: {
            AddProducts
        }
    }
</script>

<style scoped>

</style>