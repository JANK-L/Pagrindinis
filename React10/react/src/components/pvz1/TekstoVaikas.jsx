const TekstoVaikas = (props) => {
  const patikrinimas = (fraze) => {
    if (fraze && fraze.split("").filter((r) => r == "a").length > 0) {
      return "Yra a raide";
    } else return "Nera a raidziu";
  };

  console.log(props);
  return (
    <div>
      <p>Gautas tekstas: {props.tekstas}</p>
      <p>Teksto ilgis: {props.tekstas?.length}</p>
      <p>{patikrinimas(props.tekstas)}</p>
    </div>
  );
};

export default TekstoVaikas;
