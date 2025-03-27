// 10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
// slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
// mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
// simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.

let slaptazodis = "";

let slaptazodioIlgis = 12;
10;

function slaptazodzioGeneravimas() {
  let kiek = simboliuKiekiai();

  slaptazodis =
    sugeneruotiDidziajeRaide(kiek[0]) +
    sugeneruotiMazajaRaide(kiek[1]) +
    sugeneruotiSimboli(kiek[2]);

  slaptazodis = slaptazodis
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
}

function simboliuKiekiai() {
  let kiekiai = [];
  kiekiai.push(Math.floor(Math.random() * (slaptazodioIlgis - 2)) + 1);
  slaptazodioIlgis -= kiekiai[0];
  kiekiai.push(Math.floor(Math.random() * (slaptazodioIlgis - 1)) + 1);
  slaptazodioIlgis -= kiekiai[1];
  kiekiai.push(slaptazodioIlgis);

  return kiekiai;
}

function sugeneruotiDidziajeRaide(kiekis) {
  let simboliai = "";
  for (let i = 0; i < kiekis; i++) {
    simboliai += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  return simboliai;
}

function sugeneruotiMazajaRaide(kiekis) {
  let simboliai = "";
  for (let i = 0; i < kiekis; i++) {
    simboliai += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  return simboliai;
}

function sugeneruotiSimboli(kiekis) {
  let simboliai = "";
  for (let i = 0; i < kiekis; i++) {
    switch (Math.floor(Math.random() * 3) + 1) {
      case 1:
        simboliai += String.fromCharCode(Math.floor(Math.random() * 15) + 33);
        break;
      case 2:
        simboliai += String.fromCharCode(Math.floor(Math.random() * 7) + 58);
        break;
      case 3:
        simboliai += String.fromCharCode(Math.floor(Math.random() * 4) + 123);
        break;
    }
  }

  return simboliai;
}
slaptazodzioGeneravimas();

console.log("Sugeneruotas slaptažodis: ", slaptazodis);
