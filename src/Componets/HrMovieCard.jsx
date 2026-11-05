import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function HrMovieCard({movie}) {
  return (
    <section className='shrink-0 hover:scale-105 md:hover:scale-110 transition-all duration-150 ease-in cursor-pointer'>
    <img src={IMAGE_BASE_URL+movie.backdrop_path} 
    className='w-[150px] sm:w-[200px] md:w-[240px] lg:w-[260px] xl:w-[290px] rounded-lg
    hover:border-[3px] border-gray-400 object-cover
    '/>
    <h2 className='w-[150px] sm:w-[200px] md:w-[240px] lg:w-[260px] xl:w-[290px] text-white
    mt-1 sm:mt-2 text-xs sm:text-sm md:text-base truncate'>{movie.title}</h2>
    </section>
  )
}

export default HrMovieCard