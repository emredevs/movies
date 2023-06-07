import React, { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieContextProvider({ children }) {
  const [movie, setMovie] = useState([]);
  const values = { setMovie, movie };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
}
export default MovieContext;
