import "./App.css";
import Kelione from "./componenets/Kelione";
import Kepyklele from "./componenets/Kepyklele";
import Komp3 from "./componenets/Komp3";
import Komp4 from "./componenets/Komp4";
import MedzioApdirbejas from "./componenets/MedzioApdirbejas";
import Prekes from "./componenets/Prekes";
import Skaicius from "./componenets/Skaicius";
import Temperaturos from "./componenets/Temperaturos";

function App() {
  return (
    <>
      {/*    <Komp3 />
      <hr />
      <Komp4 />*/}
      <Skaicius />
      <hr />
      <Kelione />
      <hr />
      <MedzioApdirbejas />
      <hr />
      <Temperaturos />
      <hr />
      <Prekes />
      <hr />
      <Kepyklele />
    </>
  );
}

export default App;
