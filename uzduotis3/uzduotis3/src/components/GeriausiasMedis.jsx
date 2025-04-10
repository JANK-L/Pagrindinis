const GeriausiasMedis = () => {
  const medziai = ["Ąžuolas", "Pušis", "Drebule"];

  const koksMedis = (medis) => {
    alert(
      medis === medziai[0]
        ? "oho koks rimtas"
        : medis === medziai[1]
        ? "labai aukstas"
        : "nu ne rimtas"
    );
  };

  return (
    <div>
      <h2>GeriausiasMedis</h2>
      {medziai.map((medis) => (
        <button key={medis} onClick={() => koksMedis(medis)}>
          {medis}
        </button>
      ))}
    </div>
  );
};

export default GeriausiasMedis;
