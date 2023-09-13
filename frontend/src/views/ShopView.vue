<template>
    <div class="shop">
        <h2>Shop</h2>
        <div class="row" style="align-items: center; justify-content:center; padding:20px; border:5px solid red">
            <div class="col-5">
                <LogoComp />
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

            <div class="col-3" style="border-right: solid red 2px;">
                <Ul class="dropdown-menu">
                    <li class="dropdown-item" v-for="brand in brand" :key="brand">{{ brand }}</li>
                </Ul>
            </div>
            <div class="col-12">
                <div class="row" style=" border:white solid;">
                    <div class="col-3 " v-for="Product in filteredProducts" :key="Product.prodID">
                        <div class="card"
                            style="width: 18rem; margin:20px; margin-left: 40px;border: 1px red solid; background-color: black; color:white">
                            <img :src="Product.productUrl" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title" style="text-decoration: overline red 1px;">{{ Product.prodName }}
                                </h5>
                                <p class="card-text"><strong>{{ Product.brand }}</strong></p>
                                <h6>R{{ Product.price }}</h6>
                                <a href="/singleView" class="btn">More Details</a>
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
export default {
    components: {
        LogoComp
    },
    computed: {
        ...mapState(['Products']),
        filteredProducts() {
            return this.filterProducts();
        }
    },
    data() {
        return {
            selectedBrand: 'All',
            selectedBrand: 'Nike',
            selectedBrand: 'Puma',
            selectedBrand: 'Adidas',
            selectedBrand: 'New balance'
        };
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    methods: {
        editProduct(prodID) {

        },
        deleteProduct(prodID) {

        },
        filterProducts() {
            if (this.selectedBrand === 'All', 'Nike', 'Puma', 'Adidas', 'New Balance') {
                return this.Products;
            } else {
                return this.Products.filter(Product => Product.brand === this.selectedBrand);
            }
        }
    },
}
</script>

<style scoped>
.shop {
    background-color: black;
    color: white;
}

.form-select option :hover {
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