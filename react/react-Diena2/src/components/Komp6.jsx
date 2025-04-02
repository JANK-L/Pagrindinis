const Komp6 = () => {
  let skaiciai1 = [2, 5, 6, 3, 2, 4];
  let skaiciai2 = [];

  return (
    <div>
      <h1>Komp6</h1>
      <h2>Skaiciai 1</h2>
      {skaiciai1.length > 0 ? (
        <ul>
          {skaiciai1.map((skaicius) => (
            <li>{skaicius}</li>
          ))}
        </ul>
      ) : (
        <p>Skaiciu nera</p>
      )}

      <h2>Skaiciai 2</h2>
      {skaiciai2.length > 0 ? (
        <ul>
          {skaiciai2.map((skaicius) => (
            <li>{skaicius}</li>
          ))}
        </ul>
      ) : (
        <p>Skaiciu nera</p>
      )}
    </div>
  );
};

export default Komp6;
