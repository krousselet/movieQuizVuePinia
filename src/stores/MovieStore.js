// src/stores/MovieStore.js
import { defineStore } from 'pinia';
import FetchDataService from '@/services/FetchDataService';

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [],
    series: []
  }),
  actions: {
    async loadMovies() {
      let movies = localStorage.getItem('movies');
      if (movies) {
        this.movies = JSON.parse(movies);
      } else {
        movies = await FetchDataService.fetchMediaPostersAndBackdrops('movie');
        this.movies = movies.map(movie => ({
          id: movie.id,
          image: movie.backdrop,
          title: movie.title
        }));
        localStorage.setItem('movies', JSON.stringify(this.movies));
      }
    },

    async loadSeries() {
      let series = localStorage.getItem('series');
      if (series) {
        this.series = JSON.parse(series);
      } else {
        series = await FetchDataService.fetchMediaPostersAndBackdrops('tv');
        this.series = series.map(serie => ({
          id: serie.id,
          image: serie.backdrop,  //Backdrop is used so no details are present on the picture
          title: serie.title || serie.name  // Adjusting for TV series title
        }));
        localStorage.setItem('series', JSON.stringify(this.series));
      }
    },
    updateItemStatus(id, isCorrect) {
      const item = [...this.movies, ...this.series].find(item => item.id === id);
      if (item) {
        item.found = isCorrect;
      }
    },
  }
});
