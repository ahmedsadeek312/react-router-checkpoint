import "./App.css";
import FilmList from "./Components/FilmList";
import { Routes, Route } from "react-router-dom";
import MovieCard from "./Components/MovieCard";
import Info from "./Components/Info";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<FilmList />} />
        <Route exact path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
