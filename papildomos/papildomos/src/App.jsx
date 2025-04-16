import "./App.css";
import ElPastoTikrinimas from "./components/ElPastoTikrinimas";
import Skrolinimas from "./components/Skrolinimas";
import Slaptazodis from "./components/Slaptazodis";
import TekstoLaukas from "./components/TekstoLaukas";
import Uzvedimas from "./components/Uzvedimas";
import VardoIvedimas from "./components/VardoIvedimas";

function App() {
  return (
    <>
      <VardoIvedimas />
      <hr />
      <Slaptazodis />
      <hr />
      <Uzvedimas />
      <hr />
      <Skrolinimas />
      <hr />
      <ElPastoTikrinimas />
      <hr />
      <TekstoLaukas />
    </>
  );
}

export default App;
