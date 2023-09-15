<template>
    <div>
        <div class="row" v-if="Product">
            <div class="col-6" v-for="Product in Product" :key="Product.prodID">
                <img :src="Product.prodUrl" class="single-view">
            </div>
            <div id="details" class="col-6">
                <h4>{{Product.prodName}}</h4>
                <p>{{ Product.brand}}</p>
                <h2>{{ Product.price}}</h2>
                <!--sizes-->
                <div class="container-fluid">
                    <p>Sync Your Size</p>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                            value="option1">
                        <label class="form-check-label" for="inlineRadio1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">5</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">6</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">7</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">8</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">2</label>
                    </div>
                </div>
                <!--sizes-->
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button"><i class="bi bi-cart-plus-fill"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["prodID"],
    created() {
        this.$store.dispatch("fetchProduct", this.prodID);
    },
    computed: {
        Product() {
            return this.$store.state.Product;
        },
    },
}
</script>

<style scoped>
.d-grid {
    margin-top: 50px;
}

.bi {
    color: white;
}

.btn:hover {
    background-color: black;
}

.container-fluid {
    border: solid red 2px;
}

.form-check #details {
    padding: 10px;
    margin-top: 30px;
}

.row {
    padding: 20px;
}

h2 {
    font-family: monospace;
    font-weight: bold;
    background-color: black;
    color: white;
}

.single-view {
    border-left: red solid 9px;
    border-left-style: ridge;
    width: 100%;
}
</style>