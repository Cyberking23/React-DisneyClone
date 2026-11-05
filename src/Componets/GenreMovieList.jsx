import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
        {GenresList.genere.map((item,index)=>index<=4&&(
            <div key={item.id || index} className='py-3 sm:py-5 md:py-6 px-4 sm:px-8 md:px-12 lg:px-16'>
                <h2 className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white 
                font-bold'>{item.name}</h2> 
                <MovieList genreId={item.id} index_={index} />   
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList