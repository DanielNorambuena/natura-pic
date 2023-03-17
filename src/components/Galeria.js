import "../assets/css/galeria.css";
import Heart from "./Heart";
import Context from "../contexts/Context";
import { useContext } from "react";

export default function Home() {

  const { data, favoritos, setFavoritos } = useContext(Context);

  const addFavoritos = (id) => {
    if (favoritos.some((photo) => photo.id === id)) {
      return;
    }
    else {
      const foto = data.photos?.filter((photo) => photo.id === id);
      setFavoritos([...favoritos, ...foto]);
      foto[0].liked = true;

      console.log(favoritos)
    }
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {data.photos?.map((photo) => {
        return (
          <div className="foto" key={photo.id}
            style={{ backgroundImage: `url(${photo.src.large})` }}
            onClick={() => addFavoritos(photo.id)}
          >
            <Heart filled={photo.liked} />
          </div>
        );
      })}
    </div>
  );
}