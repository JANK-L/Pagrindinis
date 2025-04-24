import React from "react";

const Pazymys = ({ pazymys }) => {
  return (
    <div>
      <p>
        {pazymys} - {pazymys > 4 ? "Teigiamas" : "Neigiamas"}
      </p>
    </div>
  );
};

export default Pazymys;
