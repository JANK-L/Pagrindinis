import "./App.css";
import Header from "./components/header/Header";
import Paketas from "./components/paketas/Paketas";

function App() {
  return (
    <>
      <Header />
      <div className="container configurator">
        <section className="first">
          <div>
            <img src="./src/assets/masina.png" alt="" />
          </div>
          <div>
            <Paketas />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
