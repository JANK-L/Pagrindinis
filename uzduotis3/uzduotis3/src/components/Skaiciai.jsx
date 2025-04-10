const Skaiciai = () => {
  const skaiciai = [12, 65, 23, 1, 5, 87, 66];

  const suma = () => {
    alert(
      "Skaiciu suma: " +
        skaiciai.reduce((suma, skaicus) => (suma += skaicus), 0)
    );
  };

  const dydziausias = () => {
    alert("Dydziausias skaicius: " + Math.max(...skaiciai));
  };
  return (
    <div>
      <h2>Skaiciai</h2>
      <p>Skaiciai: {skaiciai.map((skaicius) => skaicius + " ")}</p>

      <button onClick={suma}>Suma skaiciu</button>
      <button onClick={dydziausias}>Dydziausias</button>
    </div>
  );
};

export default Skaiciai;
