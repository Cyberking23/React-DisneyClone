const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <div className="m-2">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[200px] h-auto hover:border-[3px] border-gray-400 hover:scale-100 transition-all duration-150 ease-in cursor-pointer" // Ajustar tamaño de la imagen
        alt={movie.title} // Añadir texto alternativo
      />
    </div>
  );
}

export default MovieCard;
