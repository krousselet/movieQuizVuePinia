<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="swiper-container">
            <h2>Movies</h2>
            <swiper :slides-per-view="getSlidesPerView" :space-between="20" loop>
              <swiper-slide v-for="movie in movies" :key="movie.id">
                <img :src="movie.image" alt="Movie image">
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="col-12">
          <div class="swiper-container">
            <h2>Series</h2>
            <swiper :slides-per-view="getSlidesPerView" :space-between="20" loop>
              <swiper-slide v-for="serie in series" :key="serie.id">
                <img :src="serie.image" alt="Series image">
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import { useMovieStore } from '@/stores/MovieStore';
  import { onMounted } from 'vue';
  
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    computed: {
    getSlidesPerView() {
      if (window.innerWidth <= 768) { // Mobile devices
        return 1;
      } else if (window.innerWidth <= 1024) { // Tablets
        return 2;
      } else { // Desktops
        return 3;
      }
    }
  },
    setup() {
      const store = useMovieStore();
      
      onMounted(() => {
        store.loadMovies();
        store.loadSeries();
      });
  
      return {
        movies: store.movies,
        series: store.series
      };
    }
  };
  </script>
  
  <style scoped>
  .swiper-container {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  </style>