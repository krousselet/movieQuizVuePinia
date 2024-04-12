<template>
    <div>
      <div class="search-bar">
        <input v-model="searchQuery" placeholder="Search for a movie or series..." @keyup.enter="performSearch">
        <button @click="performSearch">Search</button>
      </div>
      <div v-if="details" class="details">
        <h2>{{ details.title }}</h2>
        <img :src="imageURL(details.poster_path)" alt="Poster">
        <p>{{ details.description }}</p>
        <h3>Cast:</h3>
        <ul>
          <li v-for="actor in details.cast" :key="actor.name">
            {{ actor.name }} as {{ actor.character }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useMovieStore } from '@/stores/MovieStore';
  
  export default {
    setup() {
      const searchQuery = ref('');
      const movieStore = useMovieStore();
  
      const performSearch = async () => {
        if (!searchQuery.value.trim()) return;
        const results = await movieStore.fetchSearchResults(searchQuery.value);
        if (results.length > 0) {
          await movieStore.fetchDetails(results[0].id);
        } else {
          movieStore.details = null;
          alert('No results found');
        }
      };
  
      const imageURL = (path) => {
        return `https://image.tmdb.org/t/p/w500${path}`;
      };
  
      return {
        searchQuery,
        performSearch,
        details: movieStore.details,
        imageURL,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add styles as necessary */
  </style>
  