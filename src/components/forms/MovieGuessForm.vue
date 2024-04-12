<template>
    <div class="container my-5">
      <form @submit.prevent="submitGuess">
        <div class="mb-3">
          <label for="movieGuess" class="form-label">Devinez le titre du film</label>
          <input type="text" class="form-control" id="movieGuess" v-model="userGuess">
        </div>
        <button type="submit" class="btn btn-primary">Soumettre</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useMovieStore } from '@/stores/movieStore';
  
  export default {
    setup() {
      const userGuess = ref('');
      const movieStore = useMovieStore();
  
      const submitGuess = () => {
  // Retrieve the correct title from localStorage
  const correctTitle = localStorage.getItem('results');
  
  if (!correctTitle) {
    console.error('No correct title found in localStorage.');
    return;
  }

  // Normalize input for comparison (e.g., lowercase, trim spaces)
  const normalizedGuess = userGuess.value.trim().toLowerCase();
  const normalizedCorrectTitle = correctTitle.trim().toLowerCase();

  // Compare the guess with the correct answer
  if (normalizedGuess === normalizedCorrectTitle) {
    alert('Bravo! Vous avez deviné correctement.');
  } else {
    alert('Dommage! Mauvaise réponse. Essayez encore.');
  }
};
  
      return { userGuess, submitGuess };
    },
  };
  </script>
  