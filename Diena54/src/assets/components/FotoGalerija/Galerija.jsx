import React, { useState } from "react";
import GalerijaRodyti from "./GalerijaRodyti";
import GalerijaKarusele from "./GalerijaKarusele";
import "./Galerija.css";

const Galerija = () => {
  const images = [
    "./src/assets/components/FotoGalerija/Nuotraukos/image1.jpg",
    "./src/assets/components/FotoGalerija/Nuotraukos/image2.jpg",
    "./src/assets/components/FotoGalerija/Nuotraukos/image3.jpg",
    "./src/assets/components/FotoGalerija/Nuotraukos/image4.jpg",
    "./src/assets/components/FotoGalerija/Nuotraukos/image5.jpg",
  ];

  const [foto, setFoto] = useState(images[0]);

  const setImage = (reiksme) => {
    setFoto(reiksme);
  };

  const change = (reiksme) => {
    let index = images.indexOf(foto) + reiksme;
    if (index >= 0 && index < images.length) setImage(images[index]);
  };

  return (
    <>
      <div className="mainPhoto">
        <GalerijaRodyti curentFoto={foto} nextFoto={change} />
      </div>
      <div className="karusele">
        <GalerijaKarusele
          images={images}
          selectPhoto={setImage}
          newSelect={foto}
        />
      </div>
    </>
  );
};

export default Galerija;
