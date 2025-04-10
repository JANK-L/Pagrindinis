const Skaiciuotuvas = () => {
  const skaiciuoti = (veiksmas, event) => {
    event.preventDefault();

    let pirmas = Number(document.querySelector(".pirmas").value);
    let antras = Number(document.querySelector(".antras").value);

    veiksmas === "+"
      ? console.log(pirmas + antras)
      : veiksmas === "-"
      ? console.log(pirmas - antras)
      : veiksmas === "*"
      ? console.log(pirmas * antras)
      : antras != 0
      ? console.log(pirmas / antras)
      : console.log("dalyba is nulio negalima");
  };

  return (
    <div>
      <h2>Skaiciuotuvas</h2>
      <form>
        <input className="pirmas" type="number" required />
        <br />
        <input className="antras" type="number" required />
        <br />
        <button onClick={(e) => skaiciuoti("+", e)}>+</button>
        <button onClick={(e) => skaiciuoti("-", e)}>-</button>
        <button onClick={(e) => skaiciuoti("*", e)}>*</button>
        <button onClick={(e) => skaiciuoti("/", e)}>/</button>
      </form>
    </div>
  );
};

export default Skaiciuotuvas;
