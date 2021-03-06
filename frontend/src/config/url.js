const BASE_URL = `http://localhost:3000`;

export const options = {
  headers: {
    Authorization: localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "",
  },
};
export const SIGN_UP = `${BASE_URL}/auth/signup`;
export const LOGIN = `${BASE_URL}/auth/login`;
export const ADD_MOVIE = `${BASE_URL}/movie/addMovie`;
export const LIST_MOVIE = `${BASE_URL}/movie/getMovies`;
export const DELETE_MOVIE = `${BASE_URL}/movie/deleteMovie`;

export const ADD_THEATRE = `${BASE_URL}/theatre/addTheatre`;
export const LIST_THEATRE = `${BASE_URL}/theatre/getTheatres`;
export const DELETE_THEATRE = `${BASE_URL}/theatre/deleteTheatre`;

export const MAP_MOVIE_THEATRE = `${BASE_URL}/map/movieTheatre`;
export const MAP_DATE_THEATRE = `${BASE_URL}/map/mapDate`;
export const GET_SEAT_DATA = `${BASE_URL}/map/seatMap`;
