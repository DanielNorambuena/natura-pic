import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Context from "./contexts/Context";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const endpoint = "/fotos.json";
  const [data, setData] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const fetchFotos = async () => {
    const response = await fetch(endpoint);
    const datafotos = await response.json();

    const fotosFiltradas = {
      photos: datafotos.photos.map((photo) => {
        return {
          id: photo.id,
          src: photo.src,
          liked: false,
        };
      }),
    };
    setData(fotosFiltradas);
  };

  console.log(data);

  useEffect(() => {
    fetchFotos();
  }, []);

  const context = { data, setData, favoritos, setFavoritos };

  return (
    <div className="App">
      <Context.Provider value={context}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}