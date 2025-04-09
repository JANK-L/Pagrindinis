const ZodzioIlgis = () => {
  let zodis = "Kampainis";

  let zodzioIlgis = (zodis) => {
    return zodis.length;
  };

  return (
    <>
      <h2>ZodzioIlgis</h2>
      <p>Zodis: {zodis}</p>
      <p>Zodzio ilgis: {zodzioIlgis(zodis)}</p>
    </>
  );
};

export default ZodzioIlgis;
