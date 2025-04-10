const SlaptazodzioRodymas = () => {
  const rodytiSlaptazodi = () => {
    let inputas = document.getElementById("slaptazodzio_laukas");

    inputas.type === "password"
      ? (inputas.type = "text")
      : (inputas.type = "password");
  };

  return (
    <div>
      <h2>SlaptazodzioRodymas</h2>
      <input type="password" id="slaptazodzio_laukas" />
      <br />
      <input type="checkbox" id="box" onChange={rodytiSlaptazodi} />
      <label for="box"> Rodyti slaptazodi</label>
    </div>
  );
};

export default SlaptazodzioRodymas;
