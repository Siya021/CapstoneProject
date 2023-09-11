<template>
    <div class="register">
        <div class="row">
            <div class="col-4" style="align-items: center;justify-content: center; margin-top: 80px;">
                <h1 class="leader">Your</h1>
                <h1 class="leader">Pathway To</h1>
                <h1 class="leader"></h1>
                <h1 class="leader">Comfort <span class="slash" style="color: red;">&</span></h1>
                <h1 class="leader"></h1>
                <h1 class="leader">Style</h1>
            </div>
            <div class="col-8">
                <LogoComp />
                <h4 style="text-decoration: overline; margin-top: 50px;">Create <span>New Account</span></h4>
                <div class="container">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LogoComp from '@/components/LogoComp.vue';
import Display2Comp from '@/components/Display2Comp.vue';
export default {
    components: {
        LogoComp,
        Display2Comp
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: white;
}

span {
    font-weight: 700;
    color: red;
    text-decoration: underline white 6px;
}

.leader {
    font-size: 80px;
    text-align: start;
    font-weight: 700;
}

.register {
    border-left: 5px solid red;
    background-image: url('https://i.postimg.cc/xC2Bj68p/M-Elevated-PDP-Construct-Shai-4.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-color: black;
    color: white;
    height: 500px;
}

input {
    margin: 10px;
    width: 40%;
}</style>