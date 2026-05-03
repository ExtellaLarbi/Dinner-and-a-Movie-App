// src/components/MovieCard.js
function MovieCard({ movie }) {
  if (!movie) return null;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <div className="card">
      <h2>{movie.title}</h2>
      {posterUrl && <img src={posterUrl} alt={movie.title} />}
      <p>Rating: {movie.vote_average}</p>
      <p>{movie.overview}</p>
      <a
        href={`https://www.themoviedb.org/movie/${movie.id}`}
        target="_blank"
        rel="noreferrer"
      >
        View on TMDB
      </a>
    </div>
  );
}

export default MovieCard;
