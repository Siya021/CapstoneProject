<template>
  <div class="home">
    <div class="row">
      <div class="col">
        <img src="https://i.postimg.cc/vTNvxcyh/IMG-20231904-Trendzone-Mag-Agency.jpg" alt="" class="image">
      </div>
    </div><hr>
    <div class="row">
        <DisplayComp />
    </div> 
    <hr>
    <div class="row" style="background-color: white;">
      <CarouselComp/>
    </div>
    <hr>
    <div class="row" style="align-items: center; justify-content: center;background-color: black;border-top: 5px solid;">
      <h2>Just Dropped</h2>
      <JustDroppedComp/>
    </div>
   
  </div>
</template>

<script>
import DisplayComp from '@/components/DisplayComp.vue';
import JustDroppedComp from '../components/JustDroppedComp.vue';
import CarouselComp from '../components/CarouselComp.vue'
export default {
  name: 'HomeView',
  components: {
    DisplayComp,
    JustDroppedComp,
    CarouselComp
  }
}
</script>
<style scoped>
.home {
  background-color: black;
  height: 1200px;
  color:white ;
}
.image{
  width: 100%;
  height: 500px;
  object-fit: contain;
}
.row {
  align-content: center;
  justify-content: center;
  padding: 50px;
}

</style>

