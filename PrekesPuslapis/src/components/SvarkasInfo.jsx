import React, { useState } from "react";
import Spalva from "./Spalva/Spalva";
import Dydis from "./Dydis/Dydis";
import Pirkimas from "./Pirkimas/Pirkimas";
import "./SvarkasInfo.css";

const SvarkasInfo = () => {
  const [kaina, setKaina] = useState();
  return (
    <div>
      <h1>Dvieilis švarkas</h1>
      <p>Sinsay</p>
      <div className="produktoInfo">
        <h3>PRODUKTO APRAŠYMAS</h3>
        <p className="aprasymas">
          Šis stilingas Dvieilis švarkas su atlapais ir elegantiškomis detalėmis
          tinkamas kasdieniam naudojimui ar ypatingoms progoms. Dvieilis
          užsegimas, dekoratyvinės siūlės bei aukštos kokybės medžiagos (83%
          poliesteris, 15% viskozė, 2% elastanas) užtikrina ne tik išskirtinį
          stilių, bet ir patogumą. Būtina laikytis priežiūros instrukcijų, kad
          išsaugotumėte drabužio kokybę ilgiau. Šis drabužis leidžia jums
          išsiskirti stiliaus ir patogumo deriniu vienu metu.
        </p>
      </div>
      <Spalva />
      <Dydis kaina={setKaina} />
      <Pirkimas kaina={kaina} />
    </div>
  );
};

export default SvarkasInfo;
