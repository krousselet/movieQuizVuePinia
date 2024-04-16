<template>
  <div class="container">
    <div class="row">
      <!-- Apply v-if on a wrapper element -->
      <div v-if="!selectedItem">
        <div class="col-12" v-for="category in categories" :key="category.title">
          <div class="swiper-container">
            <h2>{{ category.title }}</h2>
            <swiper :slides-per-view="getSlidesPerView" :space-between="20" loop>
              <swiper-slide v-for="item in category.items" :key="item.id" @click="selectItem(item)">
                <img :src="item.image" :alt="item.title" :class="{'grayed-out': !item.found}">
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      
      <!-- Transition for Guess Form with close functionality -->
      <transition name="fade">
        <movie-guess-form v-if="selectedItem" :item="selectedItem" @guess-made="handleGuess" @close-form="selectedItem = null" />
      </transition>
    </div>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import MovieGuessForm from '@/components/forms/MovieGuessForm.vue';  // Make sure the path is correct
import { useMovieStore } from '@/stores/MovieStore';
import { ref, computed } from 'vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    MovieGuessForm
  },
  setup() {
    const store = useMovieStore();
    const selectedItem = ref(null);

    const selectItem = (item) => {
      selectedItem.value = item;
    };

    const handleGuess = (guessData) => {
      store.updateItemStatus(guessData.id, guessData.isCorrect);
      guessData.isCorrect ? selectedItem.value = null : console.log('Mauvaise réponse');

    };

    const getSlidesPerView = computed(() => {
      return window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
    });

    const categories = computed(() => [
      { title: 'Movies', items: store.movies },
      { title: 'Series', items: store.series }
    ]);

    return {
      categories,
      getSlidesPerView,
      selectedItem,
      selectItem,
      handleGuess
    };
  }
};
</script>

<style scoped>
.grayed-out {
  filter: grayscale(100%);
}
.swiper-container {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* starting and ending state for enter/leave transitions */ {
  opacity: 0;
}
</style>
