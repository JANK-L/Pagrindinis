import React from "react";

const Studentas = ({ studentas }) => {
  return (
    <div>
      <h3>
        {studentas.vardas} {studentas.pavarde}
      </h3>
      <p>Yra {studentas.amzius} m. amzius</p>
    </div>
  );
};

export default Studentas;
