const MovieCard = ({
  posterUrl,
  title,
  overview,
  vote_average,
  original_language,
  release_date,
  genres = [],
}) => {
  return (
    <div className="bg-dark-100 p-5 rounded-2xl shadow-inner shadow-light-100/10">
      <img
        src={posterUrl ? posterUrl : "/no-movie.png"}
        alt={title}
        className="rounded-lg h-auto w-full"
      />

      <div className="py-4">
        <h2 className="text-gray-700 font-bold text-base line-clamp-1">
          {title}
        </h2>

        {overview && (
          <p className="text-gray-400 text-sm mb-2 line-clamp-2">{overview}</p>
        )}

        <div className="text-sm text-gray-300 mb-1 flex gap-1 items-center">
          <img
            className="size-4 object-contain"
            src="star.svg"
            alt="star_icon"
          />
          <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p> <span>•</span>
          <p className="capitalize">{original_language}</p>
          <span>•</span>
          <p>{release_date ? release_date.split("-")[0] : "N/A"}</p>
        </div>

        <p className="text-sm text-gray-400">{genres.join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieCard;
