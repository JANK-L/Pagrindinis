const MygtukoSpalva = () => {
  const keistiSpalva = () => {
    const mygtukai = document.querySelectorAll("button");
    const spalva = generuotiSpalva();
    mygtukai.forEach((mygtukas) => {
      mygtukas.style.backgroundColor = spalva;
    });
  };

  const generuotiSpalva = () => {
    let spalva = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];
    spalva = "rgb(" + spalva.join(", ") + ")";
    console.log(spalva);
    return spalva;
  };
  return (
    <div>
      <h2>MygtukoSpalva</h2>
      <button onClick={keistiSpalva}>Keisti spalva</button>
    </div>
  );
};

export default MygtukoSpalva;
