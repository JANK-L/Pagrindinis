import React from "react";

const Karusele = (props) => {
  const { nuotraukos, pasirinktas, pakeisti } = props;

  const pasirinktaNuotrauka = (index) => {
    pakeisti(index);
  };

  return (
    <div className="karusele">
      {nuotraukos.map((nuotrauka, i) => (
        <img
          key={i}
          src={nuotrauka}
          alt=""
          className={pasirinktas === i ? "pasirinktas" : ""}
          onClick={() => pasirinktaNuotrauka(i)}
        />
      ))}
    </div>
  );
};

export default Karusele;
