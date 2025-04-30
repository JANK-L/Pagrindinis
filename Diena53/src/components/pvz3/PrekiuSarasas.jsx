import React from "react";

const PrekiuSarasas = (props) => {
  const data = props.data;

  return (
    <div>
      {data.map((preke, i) => (
        <div
          key={i}
          style={{
            border: "1px solid white",
            textAlign: "center",
            marginBottom: "4px",
          }}
        >
          <h3>{preke.pavadinimas}</h3>
          <p>Kiekis: {preke.kiekis} vnt.</p>
          <p>Kaina: {preke.kaina} &euro;</p>
          <button onClick={() => props.nupirko(preke)}>Nupirkti</button>
        </div>
      ))}
    </div>
  );
};

export default PrekiuSarasas;
