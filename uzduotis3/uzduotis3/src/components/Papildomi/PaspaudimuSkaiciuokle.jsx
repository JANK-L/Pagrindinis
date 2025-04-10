const PaspaudimuSkaiciuokle = () => {
  let paspaudymai = 0;

  const paspausta = () => {
    paspaudymai++;
    console.log(paspaudymai);
  };
  return (
    <div>
      <h2>PaspaudimuSkaiciuokle</h2>
      <button onClick={paspausta}>Spausti cia</button>
    </div>
  );
};

export default PaspaudimuSkaiciuokle;
