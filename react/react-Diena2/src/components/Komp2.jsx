const Komp2 = () => {
  let skaiciai = [2, 6, 3, 32, 53, 3];

  return (
    <div>
      <h2>Komp2</h2>
      <p>Lorem, ipsum.</p>
      <p>{skaiciai.join(", ")}</p>
      <p>{skaiciai[0]}</p>
      <p>{skaiciai[3]}</p>
    </div>
  );
};

export default Komp2;
