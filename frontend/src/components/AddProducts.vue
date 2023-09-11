<template>
    <div class="modal fade" id="addProduct" tabindex="-1" aria-labelledby="addProductLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductLabel">Add Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addProduct">
              <input type="text" v-model="name" placeholder="name..">
              <input type="text" v-model="tempCategories" @keyup="addCategories" placeholder="burger, wings, ..">
              <input type="text" v-model="desc" placeholder="desc...">
              <input type="text" v-model="price" placeholder="R10.00">
              <input type="text" v-model="image" placeholder="www.image.come">
              <button type="submit" class="btn btn-primary">Save changes</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>