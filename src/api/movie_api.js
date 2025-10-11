const api_key = import.meta.env.VITE_MOVIE_API_KEY;
const bearer_token = import.meta.env.VITE_MOVIE_BEARER_TOKEN;

// managing movie_data
const movie_discover_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

export const getMovies = async () => {
  try {
    const res = await fetch(movie_discover_url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// managing genres
const genre_discover_url =
  "https://api.themoviedb.org/3/genre/movie/list?language=en";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${bearer_token}`,
  },
};

export const getGenres = async () => {
  try {
    const res = await fetch(genre_discover_url, options);
    const data = await res.json();
    return data.genres;
  } catch (error) {
    console.error(error);
  }
};
