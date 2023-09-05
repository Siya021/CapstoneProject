<template>
  <div>
    <div class="top">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
    <nav class="navbar navbar-expand-lg bg-body-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><LogoComp/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/shop">Shop</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin"></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="bottom">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <p><a href="#" class="link-underline-danger">Don't have and account?sign up</a></p>
        </li>
      </ul>
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
.top a{
  color: white;
}
.top{
  color: white;
  background-color: black;
}

.container-fluid {
  color: white;
}
</style>