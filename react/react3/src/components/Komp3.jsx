const Komp3 = () => {
  const prekes = [
    {
      id: 1,
      pavadinimas: "Tusinukas",
      kaina: 2.5,
      kiekis: 300,
    },
    {
      id: 2,
      pavadinimas: "Piestukas",
      kaina: 1,
      kiekis: 200,
    },
    {
      id: 3,
      pavadinimas: "Sasiuvinys",
      kaina: 1.5,
      kiekis: 1300,
    },
    {
      id: 4,
      pavadinimas: "Penalas",
      kaina: 20.5,
      kiekis: 400,
    },
    {
      id: 5,
      pavadinimas: "Kuprine",
      kaina: 97,
      kiekis: 39,
    },
  ];

  const prekiuUzKaina = (kaina, kiekis) => {
    return kaina * kiekis;
  };

  const arDaugiauUzSasiuvini = (kaina) => {
    if (prekes[2].kaina > kaina) {
      return "ne";
    } else if (prekes[2].kaina < kaina) {
      return "taip";
    }
  };

  return (
    <>
      <h2>Prekes</h2>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Preke</th>
          <th>Kaina</th>
          <th>Kiekis</th>
          <th>Prekiu uz kaina</th>
          <th>Ar kaina daugiau uz sasiuvini</th>
        </tr>
        {prekes.map((preke) => {
          return (
            <tr>
              <td>{preke.id}</td>
              <td>{preke.pavadinimas}</td>
              <td>{preke.kaina} &euro;</td>
              <td>{preke.kiekis} vnt.</td>
              <td>{prekiuUzKaina(preke.kaina, preke.kiekis)} &euro;</td>
              <td>{arDaugiauUzSasiuvini(preke.kaina)}</td>
            </tr>
          );
        })}
        <tfoot>
          <td></td>
          <td></td>
          <td>{prekes.reduce((a, preke) => a + preke.kaina, 0)} &euro;</td>
          <td>{prekes.reduce((a, preke) => a + preke.kiekis, 0)} vnt.</td>
          <td>
            {prekiuUzKaina(
              prekes.reduce((a, preke) => a + preke.kaina, 0),
              prekes.reduce((a, preke) => a + preke.kiekis, 0)
            )}{" "}
            &euro;
          </td>
          <td></td>
        </tfoot>
      </table>
    </>
  );
};

export default Komp3;
