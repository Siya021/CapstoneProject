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
                <h4 style="text-decoration: overline; margin-bottom: 70px; margin-top: 20px;">Create <span>New
                        Account</span></h4>
                <div class="container">
                    <div class="imgcontainer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor"
                            class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
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
                    <br>
                    <button class="btn btn-outline-danger" type="submit">Register</button>
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