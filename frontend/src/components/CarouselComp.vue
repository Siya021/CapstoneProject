<template>
    <div class="row">
        <div class="col-6">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner" style="background-color:red">
                    <div class="carousel-item active">
                        <img src="https://i.postimg.cc/0NNkRj1b/79064054-800-800-removebg-preview-1.png"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.postimg.cc/C5bYHfk6/79214877-800-800-removebg-preview-1.png"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src=""
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.postimg.cc/0NNkRj1b/79064054-800-800-removebg-preview-1.png"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.postimg.cc/0NNkRj1b/79064054-800-800-removebg-preview-1.png"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item ">
                        <img src="https://i.postimg.cc/0NNkRj1b/79064054-800-800-removebg-preview-1.png"
                            class="d-block w-100" alt="...">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6" style="padding:50px; text-align:center; background-color: black;">
            <h1 class="soon">Coming soon</h1>
            <p>From</p>
            <div class="container-fluid" style="justify-content: center; text-align: center;">
                <BrandsComp />
            </div>
        </div>
    </div>
</template>

<script>
import BrandsComp from '@/components/BrandsComp.vue';
export default {
    components: {
        BrandsComp
    }

}
</script>

<style scoped>
.carousel-item {
    height: 500px;
    width: 550px;
}

.soon {
    color: red;
    font-size: 50px;
    font-weight: 700;
}</style>