import React, { useContext } from "react";
import MovieContext from "../../context/moviecontext";
import styles from "./styles.module.css";
export default function MovieList() {
  const { movie } = useContext(MovieContext);

  return (
    <div className={styles.moviList}>
      {movie.map((movie) => (
        <div className={styles.moviBox} key={movie.id}>
          <img src={movie.image} alt={movie.title} />

          <div>{movie.title}</div>
        </div>
      ))}
    </div>
  );
}
