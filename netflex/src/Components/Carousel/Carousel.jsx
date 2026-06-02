import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./Carousel.module.css";

function Carousel({ title, movies }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const CARD_WIDTH = 240;
  const VISIBLE_CARDS = 5;

  const handlePrev = () => {
    const newPos = Math.max(0, scrollPosition - CARD_WIDTH);
    setScrollPosition(newPos);
  };

  const handleNext = () => {
    const maxScroll =
      (movies?.length || 0) * CARD_WIDTH - VISIBLE_CARDS * CARD_WIDTH;
    const newPos = Math.min(maxScroll, scrollPosition + CARD_WIDTH);
    setScrollPosition(newPos);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.navButton} ${styles.prev}`}
          onClick={handlePrev}
          disabled={scrollPosition === 0}
        >
          <MdNavigateBefore size={30} />
        </button>

        <div className={styles.moviesContainer}>
          <div
            className={styles.moviesTrack}
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {movies?.map((movie) => (
              <div key={movie.id} className={styles.movieSlide}>
                <MovieCard movies={movie} />
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.navButton} ${styles.next}`}
          onClick={handleNext}
          disabled={
            scrollPosition >=
            (movies?.length || 0) * CARD_WIDTH - VISIBLE_CARDS * CARD_WIDTH
          }
        >
          <MdNavigateNext size={30} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
