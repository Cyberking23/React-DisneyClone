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
        left-2 lg:left-6 top-1/2 -translate-y-1/2 z-20 cursor-pointer" 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] lg:text-[40px] absolute
        right-2 lg:right-6 top-1/2 -translate-y-1/2 z-20 cursor-pointer' 
        onClick={()=>sliderRight(elementRef.current)}/>

   
    <div className='flex overflow-x-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-4
    scrollbar-none scroll-smooth snap-x snap-mandatory gap-4 sm:gap-5' ref={elementRef}> 
        {movieList.map((item, index)=>(
            <div key={item.id || index} 
            className='min-w-full h-[190px] sm:h-[250px] md:h-[320px] lg:h-[360px] xl:h-[400px] 
            relative rounded-lg overflow-hidden bg-[#0c0e16]
            hover:border-[3px] md:hover:border-[4px] border-gray-400 
            transition-all duration-100 ease-in snap-center shrink-0 flex items-center'>
                
                {/* Fondo ambiental difuminado para rellenar sin estirar */}
                <img src={IMAGE_BASE_URL+item.backdrop_path} 
                alt=""
                className='hidden md:block absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110' />

                {/* Imagen principal manteniendo su proporción y calidad real sin estirarse */}
                <img src={IMAGE_BASE_URL+item.backdrop_path} 
                alt={item.title || item.name || ''}
                className='w-full md:w-[72%] lg:w-[68%] h-full object-cover object-[center_20%] ml-auto relative z-0'/>

                {/* Degradado estilo Disney+ y título a la izquierda */}
                <div className='absolute inset-0 bg-gradient-to-r from-[#0c0e16] via-[#0c0e16]/80 md:via-[#0c0e16]/40 to-transparent z-10 flex flex-col justify-end md:justify-center p-4 sm:p-6 md:p-10 lg:p-14'>
                    <h2 className='text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold max-w-[75%] md:max-w-[45%] drop-shadow-lg leading-tight'>
                        {item.title || item.name}
                    </h2>
                    {item.overview && (
                        <p className='hidden md:line-clamp-2 lg:line-clamp-3 text-gray-300 text-xs lg:text-sm max-w-[42%] mt-3 drop-shadow'>
                            {item.overview}
                        </p>
                    )}
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Slider