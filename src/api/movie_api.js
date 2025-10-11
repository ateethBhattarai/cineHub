const bearer_token = import.meta.env.VITE_MOVIE_BEARER_TOKEN;

const api_get_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${bearer_token}`,
  },
};
// managing movie_data
const movie_discover_url = "https://api.themoviedb.org/3/discover/movie";

export const getMovies = async (query = "") => {
  try {
    const res = await fetch(
      query
        ? movie_discover_url + `?query=${encodeURIComponent(query)}`
        : movie_discover_url,
      api_get_options
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// managing genres
const genre_discover_url =
  "https://api.themoviedb.org/3/genre/movie/list?language=en";

export const getGenres = async () => {
  try {
    const res = await fetch(genre_discover_url, api_get_options);
    const data = await res.json();
    return data.genres;
  } catch (error) {
    console.error(error);
  }
};
