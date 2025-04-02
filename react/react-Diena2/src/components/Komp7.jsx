import "./Komp7.css";

const Komp7 = () => {
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
      kaina: 2,
      kiekis: 200,
    },
    {
      id: 3,
      pavadinimas: "Sasiuvinys",
      kaina: 1.1,
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
  return (
    <div>
      <h1>Komp7</h1>
      <div className="prekiu-sarasas">
        {prekes.length > 0 ? (
          prekes.map((preke) => (
            <div className="prekes-blokas">
              <h3>{preke.pavadinimas}</h3>
              <p>Kaina: {preke.kaina} Eur</p>
              <p>Jos turime: {preke.kiekis} vnt</p>
            </div>
          ))
        ) : (
          <p>Prekiu nera</p>
        )}
      </div>
    </div>
  );
};

export default Komp7;
