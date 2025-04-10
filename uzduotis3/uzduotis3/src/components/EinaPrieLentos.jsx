const EinaPrieLentos = () => {
  const vardai = [
    "Jonas",
    "Ieva",
    "Marius",
    "Eglė",
    "Lina",
    "Petras",
    "Jūratė",
    "Tomas",
    "Milda",
    "Andrius",
  ];

  const einaPrieLentos = () => {
    let eina = Math.floor(Math.random() * vardai.length + 1);
    alert("Eina prie lentos " + vardai[eina]);
  };

  return (
    <div>
      <h2>EinaPrieLentos</h2>
      <button onClick={einaPrieLentos}>Kviesti prie lentos</button>
    </div>
  );
};

export default EinaPrieLentos;
