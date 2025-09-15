import React, { useEffect, useState } from "react";
import { getMovies } from "../api/movie_api";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies();
      if (data?.results) {
        setMovieList(data.results);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {movieList.length > 0 ? (
        movieList.map((movie) => (
          <div key={movie.id}>{movie.original_title}</div>
        ))
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
};

export default Movies;
