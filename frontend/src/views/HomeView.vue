<template>
  <div class="home">
    <div class="row">
        <DisplayComp />
    </div> 
    <div class="row" style="background-color: white;">
      <CarouselComp/>
    </div>
    <div class="row" style="align-items: center; justify-content: center;background-color: black;border-top: 5px solid;">
      <h2>Just Dropped</h2>
      <JustDroppedComp/>
    </div>
   
  </div>
</template>

<script>
import DisplayComp from '@/components/DisplayComp.vue';
import JustDroppedComp from '../components/JustDroppedComp.vue';
import CarouselComp from '../components/CarouselComp.vue';

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
.row {
  align-content: center;
  justify-content: center;
  padding:10px;
}

</style>

