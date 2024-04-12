<template>
  <Navbar></Navbar>
  <Play></Play>
  <Swiper></Swiper>
</template>

<script>
// @ is an alias to /src
import Play from '@/components/Play-component.vue'
import Navbar from '@/components/Navbar-component.vue'
import Swiper from '@/components/Swiper-component.vue'
export default {
  name: 'PlayView',
  components: {
    Navbar,
    Play,
    Swiper,
  }
}
</script>
