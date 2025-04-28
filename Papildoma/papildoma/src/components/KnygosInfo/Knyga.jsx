import React from "react";

const Knyga = ({ knyga, ilgaKnyga }) => {
  return (
    <div>
      <h3>{knyga.pavadinimas}</h3>
      <p>{knyga.autorius}</p>
      {ilgaKnyga === true && <p>Ilga knyga</p>}
      <br />
    </div>
  );
};

export default Knyga;
