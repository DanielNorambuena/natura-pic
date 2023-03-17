import Context from "../contexts/Context";
import { useContext } from "react";



export default function Favoritos() {

  const { favoritos, setFavoritos } = useContext(Context);
  const deleteFavoritos = (id) => {
    const foto = favoritos.filter((photo) => photo.id === id);
    foto[0].liked = false;
    const newFavoritos = favoritos.filter((photo) => photo.id !== id);

    setFavoritos(newFavoritos);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritos.map((photo) => {
          return (
            <div className="foto" key={photo.id}
              style={{ backgroundImage: `url(${photo.src.small})` }}
              onClick={() => deleteFavoritos(photo.id)}
            >
            </div>
          );
        })}
      </div>
    </div>
  );
}