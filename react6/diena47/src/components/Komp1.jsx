const Komp1 = () => {
  const inputoTekstas = (event) => {
    //console.log(event.nativeEvent.target.value);
    const tekstoIlgis = event.nativeEvent.target.value;
    //console.log(tekstoIlgis);
    if (tekstoIlgis.length > 5) alert("Tekstas turi daugiau nei 5 simbolius!");
  };

  return (
    <div>
      <h2>Komp1</h2>
      <input onInput={inputoTekstas} type="text" />
    </div>
  );
};

export default Komp1;
