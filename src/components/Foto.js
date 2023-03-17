import React, { useContext } from "react";
import Context from "../contexts/Context";

const Foto = ({ foto, fav }) => {
  const { fotos, setFotos } = useContext(Context);

  const setFavorito = (id) => {
    const fotoConClick = fotos.findIndex((f) => f.id === id);
    fotos[fotoConClick].liked = !fotos[fotoConClick].liked;
    setFotos([...fotos]);
  };
};

export default Foto;