import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  return (
    <>
        <img src={IMAGE_BASE_URL+movie.poster_path} 
        className='w-[110px] sm:w-[140px] md:w-[175px] lg:w-[200px] xl:w-[220px] shrink-0 rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-105 md:hover:scale-110 transition-all duration-150 ease-in object-cover'/>
    </>
  )
}

export default MovieCard