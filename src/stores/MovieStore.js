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
          image: movie.backdrop,  // Now using backdrop URL instead of poster_path
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
          image: serie.backdrop,  // Now using backdrop URL instead of poster_path
          title: serie.title || serie.name  // Adjusting for TV series title
        }));
        localStorage.setItem('series', JSON.stringify(this.series));
      }
    }
  }
});
