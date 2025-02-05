// 1/5
/*
const vardas = "Vardenis";
const pavarde = "Pavardenis";
let amzius = 21;
let ugis = 1.94;
let svoris = 140;
const aukstojiMokykla = "Žemasis Universitetas";
const akademinesGrupesPavadinimas = "IE25/4";
let kursas = 1;
const studijuProgramosPavadinimas = "Industrijų ekonomika";
let atsiskaitytuKredituSkaicius = 3;

console.log(
  `Vardas                : ${vardas}
Pavardė               : ${pavarde}
Amžius                : ${amzius} metai
Ūgis                  : ${ugis} m
Svoris                : ${svoris} Kg
Aukštoji mokykla      : ${aukstojiMokykla}
Grupė                 : ${akademinesGrupesPavadinimas}
kursas                : ${kursas}
Studijų grupė         : ${studijuProgramosPavadinimas}
Atsiskaityti kreditai : ${atsiskaitytuKredituSkaicius}`
);
*/

// 2/5
/*
const pavadinimas = "Panevėžys";
const valstybe = "Lietuva";
const apskritis = "Panevežio aps.";
const ikurimoData = 1503;
let meras = "Rytis Mykolas Račkauskas";
const plotas = 50.1;
let gyventojuSkaicius = 87913;

console.log(
  `Pavadinimas        : ${pavadinimas}
Valstybė           : ${valstybe}
Apskritis          : ${apskritis}
Įkūrimo data       : ${ikurimoData} m.
Meras              : ${meras}
Plotas             : ${plotas} km^2
Gyventojų skaičius : ${gyventojuSkaicius}`
);
*/

// 3/5

// 3.
/*
let vardas = "Vardenis";

console.log(`Mano vardas yra ${vardas}.`);

// 4.

const akademineGrupe = "ifzm-6";
let vidurkis = 8;

console.log(
  `Akademinė grupė : ${akademineGrupe}
Vidurkis        : ${vidurkis}`
);

// 5.

let kintamasis = "Žodis";
console.log(
  `${kintamasis}${kintamasis}${kintamasis}${kintamasis}${kintamasis}`
);
*/

// 4/5
/*
// 6.
const pavadinimas = "šuo";
const kailioSpalva = "rudą";
let svoris = 1.4;

console.log(
  `Gyvūnas - ${pavadinimas} turi ${kailioSpalva} kailio spalvą ir sveria ${svoris} kg.`
);

// 7.

let skaičius = 25;
console.log(`${skaičius}${skaičius}${skaičius}${skaičius}${skaičius}`);

// 8.

let skaičius2 = 36;
console.log(skaičius2, skaičius2, skaičius2, skaičius2, skaičius2);

*/

// 5/5
/*
let simbolis = "*";
console.log(`${simbolis} ${simbolis} ${simbolis}
${simbolis}   ${simbolis}
${simbolis} ${simbolis} ${simbolis}`);
*/

// 04. Aritmetiniai veiksmai

// 1/3

// 1.
/*
let skaičius = 3;

console.log(skaičius);
console.log(skaičius ** 2);
console.log(skaičius ** 3);

// 2.

let a = 3;
let b = 5;
let c = 8;

console.log("suma:", a + b + c);
console.log("sandauga:", a * b * c, "\n");

// 3.

let x = 33;
let y = 4;

let suma = x + y;
console.log(suma);

let skirtumas = x - y;
console.log(skirtumas);

console.log(suma * skirtumas);
console.log(suma / skirtumas, "\n");

// 4.

let k1 = 40;
let k2 = 33;
let k3 = 0;
let k4 = -20;

let vidurkis = (k1 + k2 + k3 + k4) / 4;
console.log("vidurkis:", vidurkis);
*/

// 2/3
/*
// 5.

let a = 3;
let b = 7;

console.log(a, "+", b, "=", a + b);
console.log(a, "-", b, "=", a - b);
console.log(a, "*", b, "=", a * b);
console.log(a, "/", b, "=", a / b);

// 6.

console.log(-1 + 4 * 6);
console.log((35 + 5) % 7);
console.log(14 + (-4 * 6) / 12);
console.log(2 + (15 / 6) * 1 - (7 % 2));
*/

// 3/3
/*
// 7.

let x = 3;

for (let i = 1; i <= 10; i++) {
  console.log(x, "*", i, "=", x * i);
}

// 8.

let y = 45;

let y1 = Math.floor(y / 10);
let y2 = y % 10;
console.log(y, "->", y1, "+", y2, "=", y1 + y2);
*/

// 05 - salygos

// 1/2

// 1.
let a = 3;
let b = 32;
let c = 32;

if (a == b) {
  console.log("Pirmas ir antras skaičius yra lygus.");
}
if (c == b) {
  console.log("Antras ir trečias skaičius yra lygus.");
}
if (a > b) {
  console.log("Pirmas skaičius yra didesnis už antrąjį");
}
if (b > c * 2) {
  console.log(
    "Antras skaičius yra didesnis už dvigubą trečiojo skaičiaus reikšmę"
  );
}
if (a % 2 == 0) {
  console.log("Pirmas skaičius yra lyginis");
}
if (b % 2 != 0) {
  console.log("Antras skaičius yra nelyginis");
}
if (c > 0) {
  console.log("Trečias skaičius yra teigiamas");
}
if (a < 0) {
  console.log("Pirmas skaičius yra neigiamas");
}
if (b % 4 == 0) {
  console.log("Antras skaičius dalinasi iš 4");
}
if (c % 8 == 0) {
  console.log("Trečias skaičius dalinasi iš 8");
}
