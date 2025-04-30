import "./App.css";
import CounterTev from "./components/Counter/CounterTev";
import ImoneBendras from "./components/Imone/ImoneBendras";
import KnyguBendras from "./components/Knygos/KnyguBendras";
import Ivykiai from "./components/Papildoma/Ivykiai/Ivykiai";
import Spalvos from "./components/Papildoma/Spalvos/Spalvos";
import TemperaturosRodiklis from "./components/Papildoma/Temperatura/TemperaturosRodiklis";
import Pasirinkimai from "./components/pvz1/Pasirinkimai";
import Renkames from "./components/pvz2/Renkames";
import Parduotuve from "./components/pvz3/Parduotuve";
import ZodziuBendras from "./components/Zodziai/ZodziuBendras";

function App() {
  return (
    <>
      {/*<Pasirinkimai />
      <hr />
      <Renkames />
      <hr />
      <Parduotuve />*/}

      <CounterTev />
      <hr />
      <ZodziuBendras />
      <hr />
      <KnyguBendras />
      <hr />
      <ImoneBendras />
      <hr />
      <hr />
      <Spalvos />
      <hr />
      <TemperaturosRodiklis />
      <hr />
      <Ivykiai />
    </>
  );
}

export default App;
