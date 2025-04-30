import React from "react";

const SpalvuMygtukai = (props) => {
  return (
    <div>
      <button onClick={() => props.pasirinktaSpalva("Geltona")}>Geltona</button>
      <button onClick={() => props.pasirinktaSpalva("Zalia")}>Zalia</button>
      <button onClick={() => props.pasirinktaSpalva("Raudona")}>Raudona</button>
    </div>
  );
};

export default SpalvuMygtukai;
