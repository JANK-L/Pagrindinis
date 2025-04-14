import "./App.css";
import Skrolinimas from "./components/Skrolinimas";
import Slaptazodis from "./components/Slaptazodis";
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
    </>
  );
}

export default App;
