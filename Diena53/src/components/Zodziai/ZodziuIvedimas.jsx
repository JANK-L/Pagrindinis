import React, { useRef } from "react";

const ZodziuIvedimas = (props) => {
  const formRef = useRef();

  const pridetiZodi = (event) => {
    event.preventDefault();

    const forma = formRef.current;

    const zodis = forma["zodis"].value.trim(" ");

    if (zodis.length > 0) props.grazintiZodi(zodis);

    forma.reset();
  };

  return (
    <form onSubmit={pridetiZodi} ref={formRef}>
      <label htmlFor="zodis">Zodis: </label>
      <input type="text" name="zodis" id="zodis" required />
      <button type="submit">Prideti</button>
    </form>
  );
};

export default ZodziuIvedimas;
