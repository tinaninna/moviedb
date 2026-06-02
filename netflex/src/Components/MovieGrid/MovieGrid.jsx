import styles from "./MovieGrid.module.css";
import MovieCard from "../MovieCard/MovieCard";

function MovieGrid({ title, movies }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {movies?.slice(0, 6).map((movie) => (
          <div key={movie.id} className={styles.movieItem}>
            <MovieCard movies={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;
