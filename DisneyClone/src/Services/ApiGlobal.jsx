import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = '2ec0d66f5bdf1dd12eefa0723f1479cf';

// Llamada para obtener videos en tendencia
const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};

// Llamada para obtener películas por género
const getMovieByGenreId = (id) => {
  return axios.get(`${movieBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${id}`);
};

export default {
  getTrendingVideos,
  getMovieByGenreId
};
