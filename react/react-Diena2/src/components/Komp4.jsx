const Komp4 = () => {
  const automobilis = {
    marke: "Audi",
    modelis: "A4",
    metai: 2005,
    rida: 270700,
    kaina: 9000,
  };
  return (
    <div>
      <h2>Automobolis {automobilis.marke}</h2>
      <ul>
        <li>Modelis: {automobilis.modelis}</li>
        <li>metai: {automobilis.metai}</li>
        <li>Rida: {automobilis.rida} km</li>
        <li>Kaina: {automobilis.kaina} Eur</li>
      </ul>
    </div>
  );
};

export default Komp4;
