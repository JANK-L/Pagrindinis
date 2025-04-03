// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {
  const kursai = [
    { pavadinimas: "Skulptura", trukme: 120, kaina: 1700 },
    { pavadinimas: "Tapyba", trukme: 200, kaina: 2500 },
    { pavadinimas: "Vadyba", trukme: 254, kaina: 3750 },
  ];
  return (
    <div>
      <table>
        <tr>
          <th>Pavadinimas</th>
          <th>Trukmė, h</th>
          <th>Kaina, Eur</th>
        </tr>
        {kursai.map((kursas) => (
          <tr>
            <th>{kursas.pavadinimas}</th>
            <td>{kursas.trukme}</td>
            <td>{kursas.kaina}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Komp9;
