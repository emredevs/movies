import React, { useContext } from "react";
import MovieContext from "../../context/moviecontext";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Movies from "../../movies.json";
export default function MovieList() {
  const { movie } = useContext(MovieContext);

  return (
    <div className={styles.moviList}>
      {/* API sorunlu olduğu için .json dan verileri çektiğim yer  */}
      {Movies.map((movie) => (
        <div className={styles.moviBox} key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
          <div>{movie.title}</div>
          <Link to={`/detail/${movie.id}`}>Go to Movie</Link>
        </div>
      ))}

      {/* axios */}
      {/* {movie.map((movie) => (
        <div className={styles.moviBox} key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <div>{movie.title}</div>
          <Link to={`/detail/${movie.id}`}>Go to Movie</Link>
        </div>
      ))} */}
    </div>
  );
}
