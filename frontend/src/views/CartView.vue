<template>
      <div class="container-fluid">
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <h4></h4>
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
    computed: {
        cart() {
            return this.$store.state.cart;
        },
    },
    mounted() {
        if(localStorage.get('cart)')){
            this.cart = JSON.parse(localStorage.getItem('cart'));
        } else {
            console.log("There is nothing on cart")
            this.message = "Sorry Please add something on cart"
        }
    },
    methods: {
        checkout() {
            localStorage.clear();
            window.location.replace("/checkout")
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