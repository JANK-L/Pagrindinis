const Darbuotojas = () => {
  let darbuotojas = {
    vardas: "Vardenis",
    profesija: "durininkas",
    atlyginimas: 3000,
    etatas: 1,
    darbo_stazas: 3,
  };

  let uzdirbta = (stazas, atlyginimas) => {
    return stazas * 12 * atlyginimas;
  };

  let ilgametisDarbuotojas = (stazas) => {
    return stazas >= 5 ? "Ilgametis" : "Naujokas";
  };

  let arUzdirbaDaugiau = (atlygioKriterijus) => {
    if (atlygioKriterijus > darbuotojas.atlyginimas) {
      return "maziau";
    } else if (atlygioKriterijus === darbuotojas.atlyginimas) {
      return "lygiai";
    } else {
      return "daugiau";
    }
  };

  let atlygioKriterijus = 5000;

  return (
    <>
      <h2>Darbuotojas</h2>
      <ul>
        <li>vardas: {darbuotojas.vardas}</li>
        <li>profesija: {darbuotojas.profesija}</li>
        <li>atlyginimas: {darbuotojas.atlyginimas} &euro;</li>
        <li>etatas: {darbuotojas.etatas}</li>
        <li>darbo stazas: {darbuotojas.darbo_stazas}</li>
      </ul>
      <p>
        Uzdirpta per {darbuotojas.darbo_stazas} metus:{" "}
        {uzdirbta(darbuotojas.darbo_stazas, darbuotojas.atlyginimas)} &euro;
      </p>
      <p>Ar ilgametis: {ilgametisDarbuotojas(darbuotojas.darbo_stazas)}</p>

      <p>
        Lyginant su {atlygioKriterijus} &euro; daruotojas uzdirba{" "}
        {arUzdirbaDaugiau(atlygioKriterijus)}
      </p>
    </>
  );
};

export default Darbuotojas;
