const Komp2 = () => {
  const inputoSkaicius = (event) => {
    let skaicius = event.target.valueAsNumber;

    if (skaicius === 100) console.log("Pasiektas 100!");
    console.log(skaicius);
  };

  return (
    <div>
      <h2>Komp2</h2>
      <input onInput={inputoSkaicius} type="number" />
    </div>
  );
};

export default Komp2;
