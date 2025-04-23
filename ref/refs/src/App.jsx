import "./App.css";
import Kelione from "./componenets/Kelione";
import Komp3 from "./componenets/Komp3";
import Komp4 from "./componenets/Komp4";
import MedzioApdirbejas from "./componenets/MedzioApdirbejas";
import Skaicius from "./componenets/Skaicius";

function App() {
  return (
    <>
      {/*    <Komp3 />
      <hr />
      <Komp4 />*/}
      <Skaicius />
      <hr />
      <Kelione />
      <MedzioApdirbejas />
    </>
  );
}

export default App;
