import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/ApiGlobal";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null); // Crear referencia para el contenedor

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]); // Agregar genreId como dependencia

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const slideRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += 500; // Desplazarse a la derecha
    }
  };

  const slideLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= 500; // Desplazarse a la izquierda
    }
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={slideLeft}
        className="text-[50px] text-white p-2 cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 z-10 hidden md:block"
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto scrollbar-hide pt-5 px-3 scroll-smooth"
      >
        {movieList.map((item, index) => (
          <div className="m-2 min-w-[200px]" key={index}>
            <MovieCard movie={item} />
          </div>
        ))}
      </div>

      <IoChevronForwardOutline
        onClick={slideRight}
        className="text-[50px] text-white p-2 cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 z-10 hidden md:block"
      />
    </div>
  );
}

export default MovieList;
