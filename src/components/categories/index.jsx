import React from "react";
import Genres from "../../genres.json";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
export default function Categories() {
  return (
    <div className={styles.categorys}>
      {Genres.slice(0, 12).map((genres) => (
        <div className={styles.categorysBox} key={genres.id}>
          <Link to={`/${genres.name}`} className={styles.categorysLink}>
            {genres.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
