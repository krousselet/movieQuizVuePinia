<template>
  <Navbar></Navbar>
  <About></About>
</template>

<script>
import Navbar from '@/components/Navbar-component.vue'
import About from '@/components/About-component.vue'
export default {
  name: 'AboutView',
  components: {
    Navbar,
    About
  }
}
</script>