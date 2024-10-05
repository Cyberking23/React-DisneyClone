import React, { useEffect, useState, useRef } from 'react';
import GlobalApi from "../Services/ApiGlobal";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

export default function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = () => {
    GlobalApi.getTrendingVideos()
      .then((resp) => {
        console.log(resp.data.results);
        setMovieList(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <>
      <div>
        <HiChevronLeft
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>

      <div ref={elementRef} className="flex overflow-x-auto scrollbar-hide w-full px-16 py-4 scroll-smooth">
        {movieList.map((item) => (
          <img
            key={item.id}
            src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
            alt={item.title || "Movie Image"}
            className="min-w-full h-[310px] object-cover -top mr-5 hover:border-[4px] border-gray-400"
          />
        ))}
      </div>
    </>
  );
}
