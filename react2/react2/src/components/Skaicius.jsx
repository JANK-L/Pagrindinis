const Skaicius = () => {
  let skaicius = 3;

  let arLyginis = (skaicius) => {
    return skaicius % 2 === 0 ? "Taip" : "Ne";
  };
  let arTeigiamas = (skaicius) => {
    return skaicius > 0 ? "Teigiamas" : skaicius < 0 ? "Neigiamas" : "Nulis";
  };

  return (
    <>
      <h2>Skaicius</h2>
      <p>skaicius: {skaicius}</p>
      <p>Ar skaicius lyginis: {arLyginis(skaicius)}</p>
      <p>Ar skaicius teigimas: {arTeigiamas(skaicius)}</p>
    </>
  );
};

export default Skaicius;
