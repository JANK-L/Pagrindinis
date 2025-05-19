import React from "react";

const PagrindineNuotrauka = (props) => {
  const { nuotrauka, pasirinktas, pakeisti } = props;

  return (
    <div className="nuotraukaMain">
      <img
        className="rodykle left"
        src="./src/assets/arrowL.svg"
        alt=""
        onClick={() => pakeisti(-1)}
      />
      <img className="main" src={nuotrauka} alt="" />
      <img
        className="rodykle right"
        src="./src/assets/arrowR.svg"
        alt=""
        onClick={() => pakeisti(1)}
      />
    </div>
  );
};

export default PagrindineNuotrauka;
