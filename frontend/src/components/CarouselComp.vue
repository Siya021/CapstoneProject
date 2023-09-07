<template>
    <div class="row">
        <div class="col-6">
            <img src="https://i.postimg.cc/vTNvxcyh/IMG-20231904-Trendzone-Mag-Agency.jpg" alt="" class="display">
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

.display{
    height: 500px;
    width: 700px;
}
.soon {
    color: red;
    font-size: 50px;
    font-weight: 700;
}
</style>