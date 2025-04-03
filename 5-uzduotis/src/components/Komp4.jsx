// TODO: prijunkite šį komponentą prie App.jsx

const Komp4 = () => {
  let filmas = {
    pavadinimas: "Pulp Fiction",
    rezisierius: "Quentin Tarantino",
    metai: 1994,
  };

  return (
    // TODO: į šio komponento div įstatykite
    // filmo pavadinimą, režisierių ir metus
    <div>
      <h3>{filmas.pavadinimas}</h3>
      <p>Rezisierius: {filmas.rezisierius}</p>
      <p>Metai: {filmas.metai}</p>
    </div>
  );
};

export default Komp4;
