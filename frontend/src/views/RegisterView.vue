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
                <h4 style="text-decoration: overline; margin-bottom: 110px; margin-top: 20px;">Create <span>New
                        Account</span></h4>
                <div class="container">
                    <div class="imgcontainer">
                        <img src="img_avatar2.png" alt="Avatar" class="avatar">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" minlength="3" maxlength="20"
                            required oninvalid="this.setCustomValidity('Please Enter Your Name')"
                            oninput="this.setCustomValidity('')" aria-label="First name">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" minlength="3" maxlength="20"
                            required oninvalid="this.setCustomValidity('Please Enter Your Name')"
                            oninput="this.setCustomValidity('')" aria-label="Last name">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com" aria-label="Email address">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter password"
                            aria-label="Enter password">
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
    height: 600px;
}

.form-control {
    margin: 10px;
    width: 40%;
    align-content: center;
    margin-left: 280px;
}
</style>