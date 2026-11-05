import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;
function Slider() {
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef();
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight=(element)=>{
        if (!element || !element.firstElementChild) return;
        const slideWidth = element.firstElementChild.clientWidth;
        const gap = parseInt(window.getComputedStyle(element).columnGap || window.getComputedStyle(element.firstElementChild).marginRight) || 0;
        element.scrollLeft += slideWidth + gap;
    }
    const sliderLeft=(element)=>{
        if (!element || !element.firstElementChild) return;
        const slideWidth = element.firstElementChild.clientWidth;
        const gap = parseInt(window.getComputedStyle(element).columnGap || window.getComputedStyle(element.firstElementChild).marginRight) || 0;
        element.scrollLeft -= slideWidth + gap;
    }
  return (
    <div className='relative'>
        <HiChevronLeft className="hidden md:block text-white text-[30px] lg:text-[40px] absolute
        left-2 lg:left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer" 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] lg:text-[40px] absolute
        right-2 lg:right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer' 
        onClick={()=>sliderRight(elementRef.current)}/>

   
    <div className='flex overflow-x-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-4
    scrollbar-none scroll-smooth snap-x snap-mandatory gap-3 sm:gap-5' ref={elementRef}> 
        {movieList.map((item, index)=>(
            <img key={item.id || index} src={IMAGE_BASE_URL+item.backdrop_path} 
            className='min-w-full h-[180px] sm:h-[240px] md:h-[310px] lg:h-[350px] xl:h-[380px] object-cover
            object-[center_20%] rounded-md hover:border-[3px] md:hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in snap-center shrink-0'/>
        ))}
    </div>
    </div>
  )
}

export default Slider