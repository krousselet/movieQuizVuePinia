import axios from 'axios';

class FetchDataService {
  constructor() {
    this.apiKey = process.env.VUE_APP_TMDB_API_KEY;
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      params: {
        api_key: this.apiKey,
      },
    });
  }

  async fetchTMDB(endpoint, params) {
    try {
      const response = await this.axiosInstance.get(endpoint, { params });
      return response.data.results.map((item) => ({
        title: item.title || item.name,  // For movies use title, for TV series use name
        id: item.id,
        backdrop: item.backdrop_path ? `https://image.tmdb.org/t/p/w300${item.backdrop_path}` : 'Un problème est survenu',
      }));
    } catch (error) {
      console.error(`Error fetching data from TMDB: ${error}`);
      throw error;
    }
  }

  async fetchMediaPostersAndBackdrops(type) {
    const params = {
      language: 'fr-FR',
      sort_by: type === 'movie' ? 'release_date.desc' : 'first_air_date.desc',
      include_adult: false,
      include_video: false,
      page: 1,
      ...(type === 'movie' ? { 'release_date.lte': new Date().toISOString().split('T')[0] } : { 'air_date.lte': new Date().toISOString().split('T')[0] }),
      with_original_language: 'en'
    };
    return this.fetchTMDB(`/popular/${type}`, params);
  }

  async fetchDetails(type, id) {
    const detailsEndpoint = `/${type}/${id}`;
    const creditsEndpoint = `/${type}/${id}/credits`;
    try {
      const [detailsResponse, creditsResponse] = await Promise.all([
        this.axiosInstance.get(detailsEndpoint),
        this.axiosInstance.get(creditsEndpoint)
      ]);
      return {
        ...detailsResponse.data,
        cast: creditsResponse.data.cast.map(member => member.name), // Fetching only cast names
        presentation: detailsResponse.data.overview // Presentation of the movie or TV show
      };
    } catch (error) {
      console.error(`Error fetching detailed info for ${type} ID ${id}: ${error}`);
      throw error;
    }
  }
}

export default new FetchDataService();
