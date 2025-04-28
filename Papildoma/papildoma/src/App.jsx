import "./App.css";
import KnyguSarasas from "./components/KnygosInfo/KnyguSarasas";
import Produktai from "./components/ProduktoInfo/Produktai";
import ZmoniuSarasas from "./components/ZmonesInfo/ZmoniuSarasas";

function App() {
  return (
    <>
      <ZmoniuSarasas />
      <hr />
      <KnyguSarasas />
      <hr />
      <Produktai />
    </>
  );
}

export default App;
