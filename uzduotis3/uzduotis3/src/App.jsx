import "./App.css";
import EinaPrieLentos from "./components/EinaPrieLentos";
import GeriausiasMedis from "./components/GeriausiasMedis";
import Laimejimas from "./components/Laimejimas";
import AtvirkstinisTekstas from "./components/Papildomi/AtvirkstinisTekstas";
import CapsLockIspejimas from "./components/Papildomi/CapsLockIspejimas";
import MygtukoSpalva from "./components/Papildomi/MygtukoSpalva";
import PaspaudimuSkaiciuokle from "./components/Papildomi/PaspaudimuSkaiciuokle";
import RaidziuFiltras from "./components/Papildomi/RaidziuFiltras";
import SimboliuSkaicius from "./components/Papildomi/SimboliuSkaicius";
import Skaiciuotuvas from "./components/Papildomi/Skaiciuotuvas";
import SlaptazodzioRodymas from "./components/Papildomi/SlaptazodzioRodymas";
import Sansas from "./components/Sansas";
import Skaiciai from "./components/Skaiciai";
import Tikrinimai from "./components/Tikrinimai";

function App() {
  return (
    <>
      <Laimejimas />
      <hr />
      <Sansas />
      <hr />
      <Tikrinimai />
      <hr />
      <GeriausiasMedis />
      <hr />
      <Skaiciai />
      <hr />
      <EinaPrieLentos />
      <hr />
      <hr />
      <Skaiciuotuvas />
      <hr />
      <SimboliuSkaicius />
      <hr />
      <CapsLockIspejimas />
      <hr />
      <PaspaudimuSkaiciuokle />
      <hr />
      <AtvirkstinisTekstas />
      <hr />
      <SlaptazodzioRodymas />
      <hr />
      <RaidziuFiltras />
      <hr />
      <MygtukoSpalva />
    </>
  );
}

export default App;
