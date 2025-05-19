import "./App.css";
import Galerija from "./components/galerija/Galerija";
import SvarkasInfo from "./components/SvarkasInfo";

function App() {
  return (
    <div className="main">
      <div className="left">
        <Galerija />
      </div>
      <div className="right">
        <SvarkasInfo />
      </div>
    </div>
  );
}

export default App;
