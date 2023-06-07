import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header";
import Categories from "../../components/categories";
import axios from "axios";
import styles from "../../components/movie-list/styles.module.css";
import Movies from "../../movies.json";
export default function CategoriesList() {
  const { id } = useParams();
  const [categorList, setCategoryList] = useState([]);
  useEffect(() => {
    axios
      .get(`https://imdb-api.com/API/AdvancedSearch/k_eii62t9e/?genres=${id}`)
      .then((res) => setCategoryList(res.data.results.slice(0, 10)))
      .catch((err) => console.error("API'dan veri alınamadı" + "  " + err));
  }, [id]);

  console.log(categorList);
  return (
    <div>
      <Header />
      <Categories />
      <div className={styles.moviList}>
        {Movies.slice(10, 20).map((categorList) => (
          <div className={styles.moviBox} key={categorList.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${categorList.poster_path}`}
              alt={categorList.title}
            />
            <div>{categorList.title}</div>
            <Link to={`/detail/${categorList.id}`}>Go to Movie</Link>
          </div>
        ))}
      </div>

      {/* <div className={styles.moviList}>
        {categorList.map((categorList) => (
          <div className={styles.moviBox} key={categorList.id}>
            <img src={categorList.image} alt={categorList.title} />
            <div>{categorList.title}</div>
            <Link to={`/detail/${categorList.id}`}>Go to Movie</Link>
          </div>
        ))}
      </div> */}
    </div>
  );
}
