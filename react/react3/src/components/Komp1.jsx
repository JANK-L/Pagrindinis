const Komp1 = () => {
  let skaicius = 53;

  const arLyginis = (skaicius) => {
    if (skaicius % 2 === 0) {
      return "Lyginis";
    } else {
      return "Nelyginis";
    }
  };

  return (
    <>
      <h2>Skaiciai ir skaiciaivimai</h2>
      <p>{skaicius}</p>
      <p>{3 + (6 * 8) / 2}</p>
      <p>{skaicius * 3}</p>
      <p>{skaicius % 2 == 0 ? "Lyginis" : "Nelyginis"}</p>
      <p>{arLyginis(skaicius)}</p>
    </>
  );
};

export default Komp1;
