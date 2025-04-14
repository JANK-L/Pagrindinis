import { useState, useRef } from "react";
const Uzvedimas = () => {
  let [pele, setPele] = useState("");

  const tekstasRef = useRef(null);
  //let tekstas = document.getElementById("tekstas");

  const yraPele = () => {
    setPele("Pele uzvesta!");
    //tekstas.style.backgroundColor = "green";
    tekstasRef.current.style.backgroundColor = "green";
  };
  const neraPeles = () => {
    setPele("");
    //tekstas.style.backgroundColor = "";
    tekstasRef.current.style.backgroundColor = "";
  };
  return (
    <div>
      <h2>Uzvedimas</h2>

      <p onMouseMove={yraPele} onMouseLeave={neraPeles} ref={tekstasRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        quaerat dolorem delectus exercitationem vel praesentium iusto aliquam
        temporibus molestiae, quam provident repellendus alias velit sequi
        deleniti natus ullam hic debitis?
      </p>
      <p> {pele}</p>
    </div>
  );
};

export default Uzvedimas;
