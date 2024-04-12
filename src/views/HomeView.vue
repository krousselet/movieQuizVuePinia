<template>
  <header>
    <Navbar>
    </Navbar>
    <DataDetails></DataDetails>
  </header>
    
    <Home></Home>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home-component.vue'
import Navbar from '@/components/Navbar-component.vue'
import DataDetails from '@/components/Data-details-component.vue'

export default {
  name: 'HomeView',
  components: {
    Home,
    Navbar,
    DataDetails,
  }
}
</script>
