import "./App.css";
import Galerija from "./components/galerija/Galerija";
import SvarkasInfo from "./components/SvarkasInfo";

function App() {
  return (
    <div className="main">
      <Galerija className="left" />
      <SvarkasInfo className="right" />
    </div>
  );
}

export default App;
