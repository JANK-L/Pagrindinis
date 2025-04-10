const Tikrinimai = () => {
  const skaicius = Math.floor(Math.random() * 50 + 1);

  const arLyginis = () => {
    alert(skaicius % 2 === 0 ? "Lyginis" : "Nelyginis");
  };

  const daugiauUz30 = () => {
    alert(skaicius > 30 ? "Didesnis uz 30" : "mezesnis arba lygus 30");
  };

  const arPirminis = () => {
    let temp = 2;
    let info = "Pirminis";
    while (temp != skaicius) {
      if (skaicius % temp === 0) {
        info = "Nepirminys";
        break;
      }
      temp++;
    }
    alert(info);
  };

  return (
    <div>
      <h2>Tikrinimai</h2>
      <p>{skaicius}</p>
      <button onClick={arLyginis}>Ar lyginis?</button>
      <button onClick={daugiauUz30}>Ar daugiau uz 30?</button>
      <button onClick={arPirminis}>Ar skaicius pirminis?</button>
    </div>
  );
};

export default Tikrinimai;
