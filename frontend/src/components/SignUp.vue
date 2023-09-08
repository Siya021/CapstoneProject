<template>
    <div class="signUp">
        <LogoComp />
        <div class="row">
            <h1>Sign Up</h1>
            <div class="col-4">
                <label for="name">First Name</label>
                <input type="text">
            </div>
            <div class="col-4">

            </div>
        </div>
    </div>
</template>

<script>
import LogoComp from './LogoComp.vue';
export default {
    components: {
        LogoComp
    }
}
</script>

<style scoped>
.signUp {
    background-color: black;
    color: white;
    align-content: center;
    justify-content: center;
    padding: 20px;
}
</style>