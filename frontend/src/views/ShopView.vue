<template>
    <div class="shop">
        <h2>Shop</h2>
        <div class="row justify-content-center align-items-center p-3 border border-danger">
            <div class="col-md-5">
                <LogoComp />
            </div>
            <div class="col-md-5">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-danger" type="submit"><a><svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg></a></button>
                </form>
            </div>

        </div>
        <!-- PRODUCTS -->
        <div class="row">
             <div class="col-md-3 border-right border-danger">
                <select class="form-select form-select-lg mb-1 bg-danger" aria-label="small select example" >
                    <option selected>All</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Converse">Converse</option>
                    <option value="New Balance">New Balance</option>
                    <option value="Nike">Nike</option>
                </select>
            </div>
            <div class="col-md-12">
                <div class="row" style=" border:white solid;">
                    <div class="col-md-3" v-for="Product in Products" :key="Product.prodID">
                        <div class="card mb-4"
                            style="width: 18rem; margin:20px; margin-left: 40px; border: 1px red solid; background-color: black; color:white">
                            <img :src="Product.productUrl" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title" :style="{ 'text-decoration': 'overline red 1px' }">{{
                                    Product.prodName }}</h5>
                                <p class="card-text"><strong>{{ Product.brand }}</strong></p>
                                <h6>R{{ Product.price }}</h6>
                               <router-link :to="{ name: 'single-view', params: { prodID: Product.prodID } }" class="btn">More Details</router-link>
                                <a href="/cart" class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import LogoComp from '@/components/LogoComp.vue';
import axios from 'axios';

export default {
    components: {
        LogoComp
    },
    computed: {
        ...mapState(['Products']),
    },
    data() {
        return {
            Product: null,
            errorMsg: null,
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    methods: {
        async fetchBrand(brand) {
            try {
                const { data } = await axios.get(`https://capstone-zyve.onrender.com/products/${brand}`);
                this.Product = data.result[0];
            } catch (e) {
                this.errorMsg = "An error occurred.";
            }
        },
    },
}
</script>

<style scoped>
.shop {
    background-color: black;
    color: white;
}

.form-select option:hover {
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

/* Adjust for screens between 391px and 768px (e.g., smartphones) */
@media (min-width: 391px) and (max-width: 768px) {
    .col-md-5 {
        /* Restore column width for screens between 391px and 768px */
        flex: 0 0 100%;
        max-width: 100%;
    }
    .col-md-3 {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

/* Adjust for screens larger than 992px (e.g., tablets and desktops) */
@media (min-width: 993px) {
    .col-md-5 {
        /* Restore column width for screens larger than 992px */
        flex: 0 0 41.66667%;
        max-width: 41.66667%;
    }
    .col-md-3 {
        /* Restore column width for screens larger than 992px */
        flex: 0 0 25%;
        max-width: 25%;
    }
    /* Add more specific styles for screens larger than 992px if needed */
}
</style>
