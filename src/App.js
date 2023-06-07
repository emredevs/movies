import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieContextProvider } from "./context/moviecontext";
import HomeContainer from "./page/home";
import CategoriesList from "./page/categoriesList";

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/:id" element={<CategoriesList />} />
        </Routes>
      </MovieContextProvider>
    </div>
  );
}

export default App;
