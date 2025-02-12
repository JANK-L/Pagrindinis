// 01.

let augalu_pavadinimai = [
  "Rožė",
  "Levanda",
  "Saulėgrąža",
  "Tulpė",
  "Ramunė",
  "Lelija",
  "Violetinė",
  "Obelis",
  "Ąžuolas",
  "Kadagys",
];

// 02.
/*
for (let i = 0; i < augalu_pavadinimai.length; i++) {
  console.log(augalu_pavadinimai[i]);
}
*/

// 03.
/*
for (let i = augalu_pavadinimai.length - 1; i >= 0; i--) {
  console.log(augalu_pavadinimai[i]);
}
*/

// 04.

let countTrumpesni = 0;
let countIlgesni = 0;

for (let i = 0; i < augalu_pavadinimai.length; i++) {
  if (augalu_pavadinimai[i].length < 5) {
    countTrumpesni++;
    continue;
  }
  if (augalu_pavadinimai[i].length > 7) {
    countIlgesni++;
    continue;
  }
}
console.log(
  "Masyve žodžių kiekis trumpesniu, nei 5 simboliai:",
  countTrumpesni
);
console.log("Masyve žodžių kiekis ilgesniu, nei ų simboliai:,", countIlgesni);
