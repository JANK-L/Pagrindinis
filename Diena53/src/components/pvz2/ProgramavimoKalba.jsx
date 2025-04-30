import React from "react";

const ProgramavimoKalba = (props) => {
  const issiunciam = (event) => {
    props.grazinameReiksme(event.target.innerText);
  };

  return (
    <div>
      <h2>Programavimo Kalba</h2>
      <button onClick={issiunciam}>HTML</button>
      <button onClick={issiunciam}>CSS</button>
      <button onClick={issiunciam}>JavaScript</button>
      <button onClick={issiunciam}>PHP</button>
    </div>
  );
};

export default ProgramavimoKalba;
