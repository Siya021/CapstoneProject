<template>
  <div class="login">
   
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
        <h2>Login</h2>
        <hr>
        <form action="" >
          <div class="container" style="margin-top: 100px; padding:15px">
          <label for="uname"><b>Email Adress</b></label>
          <input class="form-control" type="text" placeholder="Enter Username" name="uname" required>
          <br>
          <label for="psw"><b>Password</b></label>
          <input class="form-control" type="password" placeholder="Enter Password" name="psw" required>
          <br>
          <button class="btn btn-outline-danger" type="submit">Login</button>
          <br>
          <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
          </label>
        </div>
        </form>
        <a href="/register">Don't have an account? <span class="signing">Sign Up</span></a>
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
a{
  text-decoration: none;
  color: white;
}
.signing{
  
  color: red;
}
.leader{
  font-size: 80px;
  text-align: start;
  font-weight: 700;
}
.container{
  display:inline-block
}
.login {
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