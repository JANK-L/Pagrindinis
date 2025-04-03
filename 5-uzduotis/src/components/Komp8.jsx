// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {
  const salys = [
    { pavadinimas: "Lietuva", sostine: "Vilnius", gyventoju_skaicius: 2862380 },
    { pavadinimas: "Latvija", sostine: "Ryga", gyventoju_skaicius: 1907675 },
    { pavadinimas: "Estija", sostine: "Talinas", gyventoju_skaicius: 1328439 },
  ];
  return (
    <div>
      <ol>
        {salys.map((salis) => (
          <li>
            {salis.pavadinimas}
            <ul>
              <li>Sostinė: {salis.sostine}</li>
              <li>Gyventojų skaičius: {salis.gyventoju_skaicius}</li>
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Komp8;
