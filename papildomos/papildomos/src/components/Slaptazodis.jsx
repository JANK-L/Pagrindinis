import { useState } from "react";

const Slaptazodis = () => {
  let [ilgis, setIlgis] = useState(0);

  const slaptazodioIlgis = (event) => {
    setIlgis(event.target.value.length);
  };
  const arEnter = (event) => {
    event.code === "Enter"
      ? alert("Slaptazodis priimtas", setIlgis(0), (event.target.value = ""))
      : "";
  };

  return (
    <div>
      <h2>Slaptazodis</h2>
      <input type="password" onInput={slaptazodioIlgis} onKeyDown={arEnter} />
      <p>Slaptazodzio ilgis: {ilgis}</p>
    </div>
  );
};

export default Slaptazodis;
