<template>
  <div class="container-fluid" style="background-color: black;">
    <div class="about"
      style="border-top: solid 5px red; border-top-width: 50px;border-top-right-radius: 20%;border-bottom-left-radius: 20%;">
      <div class="row">
        <div class="col-8" style="text-align: center;padding:40px;margin:60px; border-right: 6px red solid; background-color: black; color: white
        ">
          <p><big>Welcome to <LogoComp/></big>
          </p>
          <hr>
          <p><small>At <span>SoleXpress</span>, we are more than just a sneaker store, we are a community of sneaker enthusiasts
              dedicated to providing you with the most extraordinary and exclusive footwear experiences. Our journey began
              with a shared passion for sneakers and a vision to create a haven for sneakerheads, fashion-forward
              individuals, and those seeking unparalleled style and comfort.</small></p>
          <br>
          <h6>Our Story</h6>
          <p><span>SoleXpress</span> was born from a love affair with sneakers. Our founders, avid collectors and fashion aficionados,
            felt the need to bring together a diverse range of premium sneakers, streetwear, and accessories under one
            roof. What started as a small online venture grew into a brick-and-mortar destination where sneaker culture
            thrives.</p>
          <h6>Our Mission</h6>
          <p>At SoleXpress, our mission is clear, to empower individuals to express their unique style through the world of
            sneakers. We believe that the right pair of sneakers can transform not only your outfit but also your
            confidence. We aim to curate an exclusive selection of sneakers that cater to a wide range of tastes, ensuring
            that everyone can find their perfect fit.</p>
            <br>
            <p><a href="/register"><big style="color:red">Join us</big></a> on this journey of self-expression through sneakers, and let your feet do the talking. SoleXpress is not just a destination; it's a lifestyle. Welcome to the SoleXpress family, where your sneaker dreams become a reality.</p>
        </div>
        <div class="col-4" style="border-top-right-radius: 18% ; margin-top: 70px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoComp from '@/components/LogoComp.vue';
export default {
  components: {
   LogoComp
  }
}
</script>
<style scoped>
h6{
  text-decoration: overline red 5px;
  font-weight: 700;
}
.about {
  margin: 0px;
  background-image: url('https://i.postimg.cc/L6Fj8YSb/291109303-1408619176231720-6716812370712594682-n.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color:black;
  font-weight: 700;
}
a{
  text-decoration: none;
}
span{
  color: red;
}

.about h1 {
  text-align: start;
  padding-left: 15px;
}

p {
  font-style: italic;
 
}</style>