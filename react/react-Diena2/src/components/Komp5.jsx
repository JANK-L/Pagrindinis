const Komp5 = () => {
  const title = "Medziai";
  const medziai = ["Uosis", "Pusis", "Egle", "Klevas", "Berzas"];

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {medziai.map((medis) => (
          <li>{medis}</li>
        ))}
      </ul>
    </div>
  );
};

export default Komp5;
