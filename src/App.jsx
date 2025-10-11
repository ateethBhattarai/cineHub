import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchInput from "./components/SearchInput";
import { getMovies, getGenres } from "./api/movie_api";
import { useDebounce } from "react-use";
import LoadingSpinner from "./components/LoadingSpinner";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce search input
  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    500,
    [searchTerm]
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const moviesData = await getMovies();
        const genresData = await getGenres();

        if (moviesData?.results) {
          setMovieList(moviesData.results);
        }

        if (genresData) {
          setGenreList(genresData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const mapGenreIdsToNames = (ids) => {
    return ids
      .map((id) => genreList.find((genre) => genre.id === id)?.name)
      .filter(Boolean);
  };

  // Filter movies by debounced search term
  const filteredMovies = movieList.filter((movie) =>
    (movie.title || movie.name || "")
      .toLowerCase()
      .includes(debouncedSearchTerm.toLowerCase())
  );

  // Handle loading
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="my-2 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterUrl={
              movie.poster_path
                ? IMAGE_BASE_URL + movie.poster_path
                : "/no-movie.png"
            }
            title={movie.title || movie.name}
            overview={movie.overview}
            vote_average={movie.vote_average}
            original_language={movie.original_language}
            release_date={movie.release_date || movie.first_air_date}
            genres={mapGenreIdsToNames(movie.genre_ids)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
