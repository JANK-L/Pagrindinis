const Komp2 = () => {
  let skaicius1 = 22;
  let skaicius2 = 38;

  const didesnis = (s1, s2) => {
    if (!s1 || !s2) return "";
    if (s1 > s2) {
      return `${s1} didesnis uz ${s2}`;
    } else if (s1 < s2) {
      return `${s2} didesnis uz ${s1}`;
    } else {
      return `${s2} ir ${s1} yra lygus.`;
    }
  };

  const mazesnis = (s1, s2) => {
    if (!s1 || !s2) return "";
    if (s1 < s2) {
      return `${s1} mazesnis uz ${s2}`;
    } else if (s1 > s2) {
      return `${s2} mazesnis uz ${s1}`;
    } else {
      return `${s2} ir ${s1} yra lygus.`;
    }
  };
  return (
    <>
      <h2>Didesnis/mazesnis skaicius</h2>
      <p>
        Turimi skaiciai: {skaicius1} ir {skaicius2}
      </p>
      <p>{didesnis(skaicius1, skaicius2)}</p>
      <p>{mazesnis(skaicius1, skaicius2)}</p>
    </>
  );
};

export default Komp2;
