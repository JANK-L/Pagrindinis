import React, { useRef, useState } from "react";

const NaujasIvykis = (props) => {
  const [temp, setTemp] = useState("");
  const inputRef = useRef();

  const pakeisti = (event) => {
    setTemp(inputRef.current.value.trim(" "));
  };

  const atnaujinti = () => {
    if (temp.length > 0) props.grazintiPavadinima(temp);

    inputRef.current.value = "";
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={pakeisti}
        required
        placeholder="Iveskite ivykio pavadinima"
      />
      <button onClick={atnaujinti}>Prideti</button>
    </div>
  );
};

export default NaujasIvykis;
