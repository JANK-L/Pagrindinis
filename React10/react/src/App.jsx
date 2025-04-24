import "./App.css";
import Parduotuve from "./components/pvz2/Parduotuve";
import Paslaugos from "./components/pvz3/Paslaugos";
import Grupe from "./components/pvz4/Grupe";
import Imone1 from "./components/pvz5/Imone1";
import TekstoBendras from "./components/pvz1/TekstoBendras";
import Savaite from "./components/pvz6/Savaite";
import Servisas from "./components/pvz7/Servisas";
import Pasaulis from "./components/uzduotys/PasaulioInfo/Pasaulis";
import VisosRoles from "./components/uzduotys/Roles/VisosRoles";
import Darbuotojas from "./components/uzduotys/Bonusai/Darbuotojas";
import Imone from "./components/uzduotys/Bonusai/Imone";
import Pardavejas from "./components/uzduotys/AutoPardavejas/Pardavejas";
import HobiuParduotuve from "./components/uzduotys/Deliones/HobiuParduotuve";
import Studentas from "./components/uzduotys/StudentoInfo/Studentas";
import Kategorija from "./components/uzduotys/Portalas/Kategorija";
import Mokymai from "./components/uzduotys/MokymuInfo/Mokymai";

function App() {
  return (
    <>
      {/* 
      <TekstoBendras />
      <hr />
      <Parduotuve />
      <hr />
      <Paslaugos />
      <hr />
      <Grupe />
      <hr />
      <Imone1 />
      <hr />
      <Savaite />
      <hr />
      <Servisas />*/}
      <Pasaulis />
      <hr />
      <VisosRoles />
      <hr />
      <Imone />
      <hr />
      <Pardavejas />
      <hr />
      <HobiuParduotuve />
      <hr />
      <Studentas />
      <hr />
      <Kategorija />
      <hr />
      <Mokymai />
    </>
  );
}

export default App;
