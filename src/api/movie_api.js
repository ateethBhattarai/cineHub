const api_key = import.meta.env.VITE_MOVIE_API_KEY;

const movie_discover_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

export const getMovies = async () => {
  try {
    const res = await fetch(movie_discover_url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
