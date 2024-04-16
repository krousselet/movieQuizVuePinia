<template>
    <img :src="homeStore.mozaicMobile">
    <h1>{{ homeStore.mainTitle }}</h1>
</template>
<script setup>
import { onMounted } from 'vue';
import { useHomeStore } from '@/stores/HomeStore';
import { useMovieStore } from '@/stores/MovieStore';
const movieStore = useMovieStore();
const homeStore = useHomeStore();
onMounted(() => {
    movieStore.loadMovies();
    movieStore.loadSeries();
      return {
        movies: movieStore.movies,
        series: movieStore.series
      };
    });
  
      
</script>

<style lang="scss" scoped>

</style>