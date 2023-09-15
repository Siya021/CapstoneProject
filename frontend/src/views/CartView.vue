<template>
      <div class="container-fluid">
        <div class="card" v-if="Product">
            <div class="card-content">
                <div class="content">
                    <h4>{{product.prodName}}</h4>
                    <br>
                    <p class="mt-4">Sneaker brand</p>
                </div>
                <div class="media">
                    <div class="media-content">
                        <p class="title is-6"></p>
                    </div>
                    <div class="media-right">
                        <a @click="checkout()" class="btn form-contol">Checkout</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
</template>
<script>
export default {
    data() {
        return {
            cart: [],
            message: ''
        }
    },
    mounted() {
        if (localStorage.getItem('cart')) {
            this.cart = JSON.parse(localStorage.getItem('cart'));
            console.log(this.cart)
        } else {
            console.log("There is nothing on cart")
            this.message = "Sorry Please add something on cart"
        }
    }
}
</script>
<style scoped>
.container-fluid{
    color: white;
    background-color: black;
    border: solid red 4px;
}
</style>