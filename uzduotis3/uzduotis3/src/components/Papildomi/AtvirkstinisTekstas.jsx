const AtvirkstinisTekstas = () => {
  const atvirkscias = (event) => {
    let tekstas = event.target.value;
    console.log(tekstas.split("").reverse().join(""));
  };
  return (
    <div>
      <h2>AtvirkstinisTekstas</h2>
      <input type="text" onChange={atvirkscias} />
    </div>
  );
};

export default AtvirkstinisTekstas;
