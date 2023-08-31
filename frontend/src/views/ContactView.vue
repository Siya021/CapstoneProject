<template>
    <div class="container-fluid">
        <div class="row" style="align-items: center; justify-content: center; margin: 50px;">
            <div class="col-8" style="border-top: 2px solid red; border-right:2px solid red">
                <FormComp />
            </div>
            <div class="col-4">
                <LocationComp />
            </div>
        </div>
        <div class="row" style="align-items: center; justify-content: center; margin: 50px;">
            <div class="col-4">
                <FormComp />
            </div>
            <div class="col-8" style="border-left: 2px solid red; border-top: 2px solid black;">
                <LocationComp />
            </div>
        </div>
    </div>
</template>

<script>
import FormComp from '@/components/FormComp.vue';
import LocationComp from '@/components/LocationComp.vue'
export default {
    components: {
        FormComp,
        LocationComp
    }
}
</script>

<style scoped>

</style>