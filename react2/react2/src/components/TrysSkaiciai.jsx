const TrysSkaiciai = () => {
  let skaicius1 = 30;
  let skaicius2 = 600;
  let skaicius3 = 347;

  let isvesetiSkaicius = (s1, s2, s3) => {
    return `${s1}, ${s2}, ${s3}`;
  };

  let dydziausias = (skaiciai) => {
    return Math.max(...skaiciai);
  };

  let suma = (skaiciai) => {
    return skaiciai.reduce((a, sk) => (a += sk));
  };

  return (
    <div>
      <h2>TrysSkaiciai</h2>
      <p>{isvesetiSkaicius(skaicius1, skaicius2, skaicius3)}</p>
      <p>Dydziausias: {dydziausias([skaicius1, skaicius2, skaicius3])}</p>
      <p>suma: {suma([skaicius1, skaicius2, skaicius3])}</p>
    </div>
  );
};

export default TrysSkaiciai;
