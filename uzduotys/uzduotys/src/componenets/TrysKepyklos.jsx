import { useState } from "react";

const TrysKepyklos = () => {
  const [uzsakymai, setUzsakymai] = useState(0);
  const [kapikla1, setKepikla1] = useState(0);
  const [kapikla2, setKepikla2] = useState(0);
  const [kapikla3, setKepikla3] = useState(0);

  const arSpes = () => {
    if (kapikla1 + kapikla2 + kapikla3 >= uzsakymai)
      return "Spes atlykti uzsakymus.";
    else return `Nespes, Truks ${uzsakymai - (kapikla1 + kapikla2 + kapikla3)}`;
  };

  return (
    <div>
      <h2>TrysKepyklos</h2>

      <label htmlFor="uzsakymai">Dienos uzsakymu kiekis: </label>
      <input
        type="number"
        id="uzsakymai"
        onInput={(event) => setUzsakymai(parseInt(event.target.value))}
      />
      <br />

      <label htmlFor="kepykla1">
        Pirma Kepikla gali atlykti uzsakymu kieki: &nbsp;
      </label>
      <input
        type="number"
        id="kepykla1"
        onInput={(event) => setKepikla1(parseInt(event.target.value))}
      />
      <br />
      <label htmlFor="kepykla2">
        Antra Kepikla gali atlykti uzsakymu kieki: &nbsp;
      </label>
      <input
        type="number"
        id="kepykla2"
        onInput={(event) => setKepikla2(parseInt(event.target.value))}
      />
      <br />
      <label htmlFor="kepykla3">
        Tracia Kepikla gali atlykti uzsakymu kieki: &nbsp;
      </label>
      <input
        type="number"
        id="kepykla3"
        onInput={(event) => setKepikla3(parseInt(event.target.value))}
      />
      <br />
      <p>{arSpes()}</p>
    </div>
  );
};

export default TrysKepyklos;
