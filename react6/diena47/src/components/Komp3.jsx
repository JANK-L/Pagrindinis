const Komp3 = () => {
  const zodis = "azuolas";

  const inputFn = (event) => {
    let ivesta = event.target.value;

    ivesta === zodis ? alert("Atspejote") : console.log("neatspejote");
  };

  return (
    <div>
      <h2>Komp3</h2>
      <input type="text" onChange={inputFn} />
    </div>
  );
};

export default Komp3;
