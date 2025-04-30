import React from "react";

const KnyguSpausdinimas = ({ knygos }) => {
  return (
    <>
      {knygos.length > 0
        ? knygos.map((knyga, i) => (
            <div key={i}>
              <hr />
              <h3>{knyga.pavadinimas}</h3>
              <p>Metai: {knyga.metai}</p>
              <p>Kaina: {knyga.kaina}&euro;</p>
              <hr />
            </div>
          ))
        : "Šiuo metu nėra įvestų knygų"}
    </>
  );
};

export default KnyguSpausdinimas;
