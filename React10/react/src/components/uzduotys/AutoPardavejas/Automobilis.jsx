import React from "react";

const Automobilis = ({ info }) => {
  return (
    <div>
      <h3>
        {info.marke} {info.modelis} - {info.metai}
      </h3>
      <p>Rida: {info.rida} Km</p>
      <p>
        Kaina: <strong>{info.kaina}&euro;</strong>
      </p>
    </div>
  );
};

export default Automobilis;
