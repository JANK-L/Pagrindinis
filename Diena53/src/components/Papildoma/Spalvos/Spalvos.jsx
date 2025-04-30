import React, { useRef, useState } from "react";
import SpalvuMygtukai from "./SpalvuMygtukai";

const Spalvos = () => {
  const divRef = useRef();
  let [spalva, setSpalva] = useState("Melyna");

  const KeistiSpalva = () => {
    if (spalva === "Geltona") {
      divRef.current.style.backgroundColor = "yellow";
    }
    if (spalva === "Zalia") {
      divRef.current.style.backgroundColor = "green";
    }
    if (spalva === "Raudona") divRef.current.style.backgroundColor = "red";
  };

  return (
    <div ref={divRef}>
      <h2>Spalvos</h2>
      <p>Pasirinkta spalva {spalva}</p>
      <SpalvuMygtukai pasirinktaSpalva={setSpalva} />
      {KeistiSpalva()}
    </div>
  );
};

export default Spalvos;
