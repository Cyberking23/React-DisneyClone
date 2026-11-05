import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
function MovieList({genreId,index_}) {
    const [movieList,setMovieList]=useState([])
    const elementRef=useRef(null);
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=element.clientWidth ? element.clientWidth * 0.75 : 500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=element.clientWidth ? element.clientWidth * 0.75 : 500;
    }
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[40px] lg:text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute left-0
            ${index_%3==0?'top-[42%]':'top-1/2'} -translate-y-1/2`}/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-3 sm:gap-5 md:gap-6 lg:gap-8
     scrollbar-none scroll-smooth pt-3 sm:pt-4 px-2 sm:px-3 pb-3 sm:pb-4'>
        {movieList.map((item,index)=>(
           <React.Fragment key={item.id || index}>
          {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
           </React.Fragment> 
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[40px] lg:text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10
            absolute right-0 
            ${index_%3==0?'top-[42%]':'top-1/2'} -translate-y-1/2`}/> 
    </div>
  )
}

export default MovieList