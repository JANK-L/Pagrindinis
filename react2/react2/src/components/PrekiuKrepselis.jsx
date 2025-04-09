const PrekiuKrepselis = () => {
  let prekes = [
    { id: 1, pavadinimas: "Saga", kaina: 1, kiekis: 5, nuolaida: 0.1 },
    { id: 2, pavadinimas: "Virbalas", kaina: 5, kiekis: 2, nuolaida: 0.3 },
    { id: 3, pavadinimas: "Kuprine", kaina: 175, kiekis: 1, nuolaida: 0.21 },
    { id: 4, pavadinimas: "Zuvis", kaina: 9, kiekis: 3, nuolaida: 0 },
  ];

  let krepselioNuolaida = (prekes) => {
    return parseFloat(
      prekes.reduce((nuolaida, preke) => {
        nuolaida += preke.kaina * preke.kiekis * preke.nuolaida;
        return nuolaida;
      }, 0)
    ).toFixed(2);
  };

  let krepselioSuma = (prekes) => {
    return parseFloat(
      prekes.reduce((suma, preke) => {
        suma += preke.kaina * preke.kiekis * (1 - preke.nuolaida);
        return suma;
      }, 0)
    ).toFixed(2);
  };

  let prekiuLentele = (prekes) => {
    return (
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Preke</th>
          <th>Kaina</th>
          <th>Kiekis</th>
          <th>nuolaida</th>
          <th>Galutine kaina</th>
        </tr>
        <tbody>
          {prekes.map((preke) => (
            <tr>
              <td>{preke.id}</td>
              <td>{preke.pavadinimas}</td>
              <td>{preke.kaina} &euro;</td>
              <td>{preke.kiekis}</td>
              <td>{preke.nuolaida * 100} %</td>
              <td>
                {parseFloat(preke.kaina * (1 - preke.nuolaida)).toFixed(2)}{" "}
                &euro;
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  let atrinktosPrekes = (kainosRiba, prekes) => {
    return prekiuLentele(
      prekes.filter((preke) => preke.kaina * (1 - preke.nuolaida) < kainosRiba)
    );
  };

  let kainosRiba = 50;

  return (
    <>
      <div>{prekiuLentele(prekes)}</div>
      <hr />
      <p>Bendra prekiu nuolaida: {krepselioNuolaida(prekes)} &euro;</p>
      <hr />
      <p>Bendra krepselio suma: {krepselioSuma(prekes)} &euro;</p>
      <hr />
      <p>Prekes kurios kainuoja maziau uz {kainosRiba} &euro;</p>
      <hr />
      <div>{atrinktosPrekes(kainosRiba, prekes)}</div>
    </>
  );
};

export default PrekiuKrepselis;
