import Paslauga from "./Paslauga";

const Paslaugos = () => {
  return (
    <div>
      <h2>Paslaugos</h2>
      <Paslauga pavadinimas="Darzo ravejimas" kategorija="Sodininkyste" />
      <Paslauga pavadinimas="Vartu tvarkymas" kategorija="Meistravimas" />
      <Paslauga pavadinimas="Karves melzimas" kategorija="Gyvulininkyste" />
    </div>
  );
};

export default Paslaugos;
