import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header";
import axios from "axios";
import styles from "./styles.module.css";
export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/Trailer/k_eii62t9e/${id}`)
      .then((res) => setDetail(res.data))
      .catch((err) => console.error("API'dan veri alınamadı" + "   " + err));
  }, [id]);
  console.log(detail);
  return (
    <div>
      <Header />

      <div className={styles.detailBox}>
        <div>
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
        </div>
        {/* <iframe
          style={{ width: "750px", height: "500px" }}
          src={detail.linkEmbed}
          frameBorder="0"
        ></iframe> */}
      </div>
    </div>
  );
}
