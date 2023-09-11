<template>
    <div class="shop">
        <h2>Shop</h2>
        <iframe class="video" src="https://www.youtube.com/embed/asvML5L7Y0Y?autoplay=1" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        <div class="row" style="align-items: center; justify-content:center; padding:20px; border:5px solid red">
            <div class="col-5">
                <select class="form-select form-select-lg mb-1 bg-danger" aria-label="small select example">
                    <option selected>All</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Converse">Converse</option>
                    <option value="New Balance">New Balance</option>
                    <option value="Nike">Nike</option>
                </select>
            </div>
            <div class="col-5">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-danger" type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
        </div>
        <!-- PRODUCTS -->
        <div class="row">
            <div class="col-3" v-for="Product in Products" :key="Product.prodID">
                <div class="card" style="width: 18rem; margin:20px; margin-left: 40px;border: 1px red solid">
                    <img :src="Product.productUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ Product.prodName }}</h5>
                        <p class="card-text">{{ Product.Brand }}</p>
                        <h6>R{{ Product.price }}</h6>
                        <a href="/singleView" class="btn">More Details</a>
                        <a href="/cart" class="btn">Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['Products']),
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    methods: {
        editProduct(prodID) {

        },
        deleteProduct(prodID) {

        },
    },
}
</script>

<style scoped>
.shop{
    background-color: black;
    color: white;
}
.form-select option :hover{
    background-color: black;
    color: white;
}
.btn {
    background-color: black;
    color: white;
}

.btn:hover {
    background-color: white;
    color: black;
}

.row {
    align-items: center;
    border-top: solid black 3px;
}

.col-4 {
    padding: 10px;
    display: flex;
    justify-content: space-around;
}

.card:hover {
    transform: scale(1.1);
    box-shadow: 1px 2px 3px 1px rgb(228, 0, 0);
}

.video {
    width: 100% !important;
    height: 350px;
}
</style>