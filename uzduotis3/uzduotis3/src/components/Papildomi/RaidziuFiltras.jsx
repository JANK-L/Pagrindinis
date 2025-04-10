const RaidziuFiltras = () => {
  const filtruotasTekstas = (event) => {
    let filtras = document.getElementById("pasirinkimas").value;
    let tekstas = event.target.value;

    filtras === "viskas"
      ? console.log(tekstas)
      : filtras === "skaiciai"
      ? console.log(Number(tekstas.replace(/\D/g, "")))
      : console.log(tekstas.replace(/\d/g, ""));
  };

  return (
    <div>
      <h2>RaidziuFiltras</h2>
      <input type="text" onInput={filtruotasTekstas} />
      <select name="pasirinkimas" id="pasirinkimas">
        <option value="raides">tik raides</option>
        <option value="skaiciai">tik skaiciai</option>
        <option value="viskas">viskas</option>
      </select>
    </div>
  );
};

export default RaidziuFiltras;
