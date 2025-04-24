import React from "react";
import Diena from "./Diena";

const Savaite = () => {
  let temperaturos = [14, 5, 22, 19, 10, 13, 8, 4, 6, 24];
  return (
    <div>
      <h2>Savaite</h2>
      <div>
        {temperaturos.map((temperatura, i) => (
          <Diena key={i} temp={temperatura} />
        ))}
      </div>
    </div>
  );
};

export default Savaite;
