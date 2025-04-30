import React from "react";

const Mygtukas = (props) => {
  const paspaudusFn = (event) => {
    props.griztaReiksme(event.target.innerText);
  };

  return <button onClick={paspaudusFn}>{props.miestas}</button>;
};

export default Mygtukas;
