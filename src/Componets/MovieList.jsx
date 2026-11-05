import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
function MovieList({genreId,index_}) {
    const [movieList,setMovieList]=useState([])
    const elementRef=useRef(null);
    const targetScrollRef=useRef(null);
    const animFrameRef=useRef(null);

    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            setMovieList(resp.data.results)
        })
    }

    const smoothScrollTo=(element, delta)=>{
        if (!element) return;
        const maxScroll = element.scrollWidth - element.clientWidth;
        const base = targetScrollRef.current !== null ? targetScrollRef.current : element.scrollLeft;
        const target = Math.max(0, Math.min(maxScroll, base + delta));
        targetScrollRef.current = target;

        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

        const step = () => {
            const current = element.scrollLeft;
            const diff = targetScrollRef.current - current;
            if (Math.abs(diff) <= 1) {
                element.scrollLeft = targetScrollRef.current;
                targetScrollRef.current = null;
                animFrameRef.current = null;
                return;
            }
            element.scrollLeft = current + diff * 0.25;
            animFrameRef.current = requestAnimationFrame(step);
        };
        animFrameRef.current = requestAnimationFrame(step);
    }

    const slideRight=(element)=>{
        if (!element) return;
        const amount = element.clientWidth ? element.clientWidth * 0.75 : 500;
        smoothScrollTo(element, amount);
    }
    const slideLeft=(element)=>{
        if (!element) return;
        const amount = element.clientWidth ? element.clientWidth * 0.75 : 500;
        smoothScrollTo(element, -amount);
    }
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[40px] lg:text-[50px] text-white
           p-2 z-20 cursor-pointer select-none
            hidden md:block absolute left-0 bg-black/40 hover:bg-black/70 rounded-full
            ${index_%3==0?'top-[42%]':'top-1/2'} -translate-y-1/2`}/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-3 sm:gap-5 md:gap-6 lg:gap-8
     scrollbar-none pt-3 sm:pt-4 px-2 sm:px-3 pb-3 sm:pb-4'>
        {movieList.map((item,index)=>(
           <React.Fragment key={item.id || index}>
          {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
           </React.Fragment> 
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[40px] lg:text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-20 select-none
            absolute right-0 bg-black/40 hover:bg-black/70 rounded-full
            ${index_%3==0?'top-[42%]':'top-1/2'} -translate-y-1/2`}/> 
    </div>
  )
}

export default MovieList