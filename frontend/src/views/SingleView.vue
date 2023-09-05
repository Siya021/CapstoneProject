<template>
    <div>
        <div class="row">
            <div class="col-6">
                <img src="https://i.postimg.cc/2ymGcbZd/72447285-800-800.png" class="single-view">
            </div>
            <div id="details" class="col-6">
                <h4>Name</h4>
                <p>Brand</p>
                <h2>Price</h2>
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
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['products']),
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
};
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
    border: solid blue 2px;
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
    border-left: blue solid 9px;
    border-left-style: ridge;
    width: 100%;
}
</style>