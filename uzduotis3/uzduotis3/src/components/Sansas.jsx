const Sansas = () => {
  const skaicius = Math.floor(Math.random() * 10 + 1);

  const patikrintiSkaiciu = () => {
    alert(skaicius >= 5 ? "laimejai" : "nelaimejai");
  };
  return (
    <div>
      <h2>Sansas</h2>
      <button onClick={patikrintiSkaiciu}>Speti</button>
    </div>
  );
};

export default Sansas;
