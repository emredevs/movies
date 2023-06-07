import React, { useContext, useEffect } from "react";
import Header from "../../components/header";
import MovieContext from "../../context/moviecontext";
import axios from "axios";
import MovieList from "../../components/movie-list";
import Categories from "../../components/categories";
export default function HomeContainer() {
  const { movie, setMovie } = useContext(MovieContext);
  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/Top250Movies/k_eii62t9e`)
      .then((res) => setMovie(res.data.items.slice(0, 25)));
  }, []);
  console.log(movie);
  return (
    <div>
      <Header />
      <Categories />
      <MovieList />
    </div>
  );
}
