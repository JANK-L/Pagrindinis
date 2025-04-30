import React from "react";

const CounterMygtukai = (props) => {
  return (
    <div>
      <button onClick={() => props.gaudomPokyti(1)}>+1</button>
      <button onClick={() => props.gaudomPokyti(2)}>+2</button>
      <button onClick={() => props.gaudomPokyti(5)}>+5</button>
    </div>
  );
};

export default CounterMygtukai;
