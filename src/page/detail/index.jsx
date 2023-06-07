import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header";
import axios from "axios";
import styles from "./styles.module.css";
import Movies from "../../movies.json";
export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const moviesFind = Movies.find((movies) => movies.id.toString() === id);
  console.log(moviesFind);

  // API sorun yarattığı için .jsondan veriler çekildi aşağıdaki kod hala çallışır halde
  // useEffect(() => {
  //   axios
  //     .get(`https://imdb-api.com/en/API/Trailer/k_eii62t9e/${id}`)
  //     .then((res) => setDetail(res.data))
  //     .catch((err) => console.error("API'dan veri alınamadı" + "   " + err));
  // }, [id]);
  // console.log(detail);
  return (
    <div>
      <Header />

      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${moviesFind.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className={styles.detailBox}
      >
        <div className={styles.detailInfoBox}>
          <div>
            <img
              style={{
                width: "500px",
                height: "400px",
                objectFit: "fill",
                borderRadius: "10px",
              }}
              src={`https://image.tmdb.org/t/p/original${moviesFind.poster_path}`}
              alt=""
            />
          </div>
          <div>
            <div>Title: {moviesFind.title}</div>
            <div>Release Date: {moviesFind.release_date}</div>
            <div>Vote Average: {moviesFind.vote_average}</div>
            <div>Vote Count: {moviesFind.vote_count}</div>
            <div>Overview: {moviesFind.overview}</div>
          </div>
        </div>

        {/* <div>
          <img
            style={{ width: "500px", height: "300px" }}
            src={detail.thumbnailUrl}
            alt=""
          />
          <div>
            {detail.title} -- {detail.year}
          </div>
          <div>{detail.uploadDate}</div>
          <div>{detail.videoDescription}</div>
        </div> */}
        {/* <iframe
          style={{ width: "750px", height: "500px" }}
          src={detail.linkEmbed}
          frameBorder="0"
        ></iframe> */}
      </div>
    </div>
  );
}
