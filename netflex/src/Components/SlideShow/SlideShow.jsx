// import React from 'react'
import styles from "./SlideShow.module.css";
import MovieCard from "./../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SlideShow({ title, movies }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={7}
          slidesPerView={4.5}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movies={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow;
