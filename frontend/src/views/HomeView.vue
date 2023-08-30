<template>
  <div class="home">
    <div class="row">
        <DisplayComp />
    </div>
  </div>
</template>

<script>
import DisplayComp from '@/components/DisplayComp.vue';
export default {
  name: 'HomeView',
  components: {
    DisplayComp
  }
}
</script>
<style scoped>
.home {
  background-image: url('https://i.postimg.cc/vTNvxcyh/IMG-20231904-Trendzone-Mag-Agency.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
}

.row {
  align-content: center;
  justify-content: center;
  padding: 50px;
}

</style>

