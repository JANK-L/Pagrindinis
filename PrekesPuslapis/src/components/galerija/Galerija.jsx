import React, { useState } from "react";
import "./Galerija.css";
import PagrindineNuotrauka from "./PagrindineNuotrauka";
import Karusele from "./Karusele";

const Galerija = () => {
  const [pasirinktas, setPasirinktas] = useState(0);

  const images = [
    "./src/assets/image0.png",
    "./src/assets/image1.png",
    "./src/assets/image2.png",
    "./src/assets/image3.png",
    "./src/assets/image4.png",
  ];

  const pakeistiNuotrauka = (pasikeitimas) => {
    if (
      pasirinktas + pasikeitimas >= 0 &&
      pasirinktas + pasikeitimas < images.length
    ) {
      setPasirinktas(pasirinktas + pasikeitimas);
    }
  };

  return (
    <div className="galerija">
      <div>
        <Karusele
          nuotraukos={images}
          pasirinktas={pasirinktas}
          pakeisti={setPasirinktas}
        />
      </div>
      <div>
        <PagrindineNuotrauka
          nuotrauka={images[pasirinktas]}
          pakeisti={pakeistiNuotrauka}
        />
      </div>
    </div>
  );
};

export default Galerija;
