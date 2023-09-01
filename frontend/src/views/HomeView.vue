<template>
  <div class="home">
    <div class="row">
        <DisplayComp />
    </div> 
    <div class="row">
      <CarouselComp/>
    </div>
    <div class="row" style="align-items: center; justify-content: center;">
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
  background-image: url('https://i.postimg.cc/vTNvxcyh/IMG-20231904-Trendzone-Mag-Agency.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 1200px;
}

.row {
  align-content: center;
  justify-content: center;
  padding: 50px;
}

</style>

