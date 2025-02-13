// 1/2

// 01.
/* 
console.log("uzduotis 01 \n");

let masyvas = ["Susikurkite", "norimą", "masyvą", "su", "duomenimis"];

console.log("Pirmas narys:", masyvas[0]);
console.log("Paskutinys narys:", masyvas[masyvas.length - 1]);

console.log(
  "Pirmas du viduryje nariai:",
  masyvas[Math.round(masyvas.length / 2)],
  masyvas[Math.round(masyvas.length / 2 - 1)]
);
console.log("Masyvo nariu skaicius: :", masyvas.length);
*/

// 02.
/* 
console.log(`
------------
uzduotis 02\n`);

let array = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

console.log(array);

array[0] = "X";
array[4] = "X";
array[5] = "X";

console.log(array);
*/

// 03.
/* 
console.log(`
------------
uzduotis 03\n`);

let array1 = [];

array1.push(12, 4324324, 435435, 3333, 98234, 0);

console.log(array1);
*/

// 2/2

// 04.
/* 
console.log(`
------------
uzduotis 04\n`);

let empty_array = [];

while (empty_array.length < 10) {
  empty_array.push(Math.round(Math.random() * 100));
}

console.log(empty_array);
*/

// 05.
/* 
console.log(`
------------
uzduotis 05\n`);

let pazymiai1 = [10, 10, 5, 1, 7];
let pazymiai2 = [];

pazymiai2.push(8, 8, 5, 8, 8);

let vidurkis = [0, 0];
for (let i = 0; i < pazymiai1.length; i++) {
  vidurkis[0] += pazymiai1[i];
}
vidurkis[0] /= pazymiai1.length;

for (let i = 0; i < pazymiai2.length; i++) {
  vidurkis[1] += pazymiai2[i];
}
vidurkis[1] /= pazymiai2.length;

console.log("Vidurkis pirmo studento:", vidurkis[0]);
console.log("Vidurkis antro studento:", vidurkis[1]);

if (vidurkis[0] === vidurkis[1]) {
  console.log("Vidurkiai studentu lygus.");
} else if (vidurkis[0] > vidurkis[1]) {
  console.log("Pirmo studento vidurkis didesnis.");
} else console.log("Antro studento vidurkis didesnis.");
*/

// 1/4

// 06.
/*
console.log(`
------------
uzduotis 06\n`);

let studiju_pavadinimai = [
  "Teksto suvokimo programa",
  "Biotechnikos programa",
  "IT programa",
  "Uzsienio literaturos programa",
  "Laiko gaisimo programa",
  "verslo vadybos programa",
];

for (let i = 0; i < studiju_pavadinimai.length; i++) {
  console.log(studiju_pavadinimai[i]);
}
*/

// 07.
/*
console.log(`
------------
uzduotis 07\n`);

let salys = [];
salys.push(
  "Lietuva",
  "Kanada",
  "Japonija",
  "Brazilija",
  "Egiptas",
  "Austrija",
  "Indija",
  "Švedija",
  "Meksika",
  "Italija"
);

for (let i = 0; i < salys.length; i++) {
  console.log("Šalis", salys[i]);
}
*/

// 08.
/* 
console.log(`
------------
uzduotis 08\n`);

let projektai = [
  "Žalioji iniciatyva",
  "Inovacijų laboratorija",
  "Skaitmeninė revoliucija",
  "Ateities miestai",
  "Tvarus vystymasis",
  "Dirbtinio intelekto projektas",
  "Aplinkos apsauga",
  "Švietimo transformacija",
  "Sveikatos technologijos",
  "Energijos efektyvumas",
];

for (let i = 0; i < projektai.length; i++) {
  console.log("Projektas", i + 1, ":", projektai[i]);
}
*/

// 2/4

// 09.
/*
console.log(`
------------
uzduotis 09\n`);

let skaiciai = [3, 7, 1, 9, 5, 8, 2, 6, 4, 10];
console.log("masyvas:", skaiciai);
let didesni_uz5 = [];

for (let i = 0; i < skaiciai.length; i++) {
  if (Number(skaiciai[i]) > 5) {
    didesni_uz5.push(skaiciai[i]);
  }
}

console.log("Didesni uz 5:", didesni_uz5);
 */

// 10.
/* 
console.log(`
------------
uzduotis 10\n`);

let skaiciu_array = [];

while (skaiciu_array.length < 20) {
  skaiciu_array.push(Math.floor(Math.random() * 100));
}
console.log("Masivas: \n" + skaiciu_array);
console.log("Skaiciai dalyjasi is 4:");
for (let i = 0; i < skaiciu_array.length; i++) {
  if (skaiciu_array[i] % 4 == 0) {
    console.log(skaiciu_array[i]);
  }
}
*/

// 11.
/* 
console.log(`
------------
uzduotis 11\n`);

let pazymiai = [];

while (pazymiai.length < 20) {
  pazymiai.push(Math.floor(Math.random() * 10 + 1));
}

console.log("Pazymiai: \n" + pazymiai);
let vid = 0;
for (let i = 0; i < pazymiai.length; i++) {
  vid += pazymiai[i];
}

console.log("Vidurkis:", vid / pazymiai.length);
*/

// 12.
/* 
console.log(`
------------
uzduotis 12\n`);

let pazymiai12 = [];

while (pazymiai12.length < 20) {
  pazymiai12.push(Math.floor(Math.random() * 10 + 1));
}

console.log("Pazymiai: \n" + pazymiai12);
let vid12 = 0;
for (let i = 0; i < pazymiai12.length; i++) {
  vid12 += pazymiai12[i];
}
vid12 /= pazymiai12.length;
console.log("Vidurkis:", vid12);
console.log("Didesni pazymiai uz vidurki:");
for (let i = 0; i < pazymiai12.length; i++) {
  if (pazymiai12[i] > vid12) console.log(pazymiai12[i]);
}
*/

// 3/4

// 13.
/* 
console.log(`
------------
uzduotis 13\n`);

let skaiciai13 = [];

while (skaiciai13.length < 20) {
  skaiciai13.push(Math.floor(Math.random() * 100));
}
console.log("Skaiciai:");
for (let i = 0; i < skaiciai13.length; i++) {
  if (skaiciai13[i] % 2 == 0) {
    console.log(skaiciai13[i], skaiciai13[i] ** 2);
    continue;
  }
  console.log(skaiciai13[i]);
}
*/

// 14.
/* 
console.log(`
------------
uzduotis 14\n`);

let pazymiai14 = [];

while (pazymiai14.length < 20) {
  pazymiai14.push(Math.floor(Math.random() * 10 + 1));
}

console.log("Pazymiai:");
for (let i = 0; i < pazymiai14.length; i++) {
  if (pazymiai14[i] < 5) {
    console.log(
      `Pazimys ${pazymiai14[i]} neigiamas, iki teigiamo truko ${
        5 - pazymiai14[i]
      } balo(-ų).`
    );
    continue;
  }
  console.log(`Pazimys ${pazymiai14[i]} teigiamas.`);
}
*/

// 4/4

// 15.
/* 
console.log(`
------------
uzduotis 15\n`);

let zodziai = [
  "gyvenimas",
  "mokslas",
  "kelionė",
  "menas",
  "gamtos",
  "technologijos",
  "žmogus",
  "medis",
  "muzika",
  "skaitmeninis",
  "sveikata",
  "laimė",
  "draugystė",
  "kelias",
  "mėnulis",
  "pasaulis",
  "sėkmė",
  "gamtos",
  "alus",
  "atmintis",
];

let raidziuKiekis = 0;
for (let i = 0; i < zodziai.length; i++) {
  console.log(
    `Zodis "${zodziai[i]}" sudarytas is ${zodziai[i].length} raidziu.`
  );
  raidziuKiekis += zodziai[i].length;
}
console.log("Visu raidziu kiekis:", raidziuKiekis);
*/

// 16.
/* 
console.log(`
------------
uzduotis 16\n`);

let skaiciai16 = [];

while (skaiciai16.length < 20) {
  skaiciai16.push(Math.floor(Math.random() * 100));
}
let skaiciai_dalinasi3 = [];
let vid16 = 0;

for (let i = 0; i < skaiciai16.length; i++) {
  if (skaiciai16[i] % 3 == 0) {
    skaiciai_dalinasi3.push(skaiciai16[i]);
    vid16 += skaiciai16[i];
  }
}
let suma = vid16;
vid16 /= skaiciai_dalinasi3.length;

console.log("Masyvas:", skaiciai16);
console.log("skaiciai kurie dalijasi is 3:", skaiciai_dalinasi3);
console.log("Skaiciu kurie dalijasi is 3 suma:", suma);
console.log("Skaiciu kurie dalijasi is 3 vidurkis:", vid16);
*/

// 1/5

// 17.
/* 
console.log(`
------------
uzduotis 17\n`);

let zodziuMasyvas = [
  "stalas",
  "kėdė",
  "telefonas",
  "kompiuteris",
  "vaza",
  "knyga",
  "žibintas",
  "pieštukas",
  "langas",
];

for (const zodis in zodziuMasyvas) {
  console.log(zodis, "-", zodziuMasyvas[zodis]);
}
*/

// 18.
/* 
console.log(`
------------
uzduotis 18\n`);

let pirkiniaiSarasas = [
  "pienas",
  "duona",
  "kiaušiniai",
  "sviestas",
  "faršas",
  "obuoliai",
  "bulvės",
  "pomidorai",
  "makaronai",
  "riešutai",
  "sūris",
  "kriaušės",
  "alus",
];

console.log("Pirkiniu kiekis sarase:", pirkiniaiSarasas.length);

for (const pirkinys of pirkiniaiSarasas) {
  console.log("-", pirkinys);
}
*/

// 19.
/* 
console.log(`
------------
uzduotis 19\n`);

let pazymiuMasyvas = [];

while (pazymiuMasyvas.length < 20) {
  pazymiuMasyvas.push(Math.floor(Math.random() * 10 + 1));
}

let pazymiuVidurkis = 0;
console.log("Pazymiai: ");
for (const pazymys of pazymiuMasyvas) {
  pazymiuVidurkis += pazymys;
  console.log(pazymys);
}
console.log("Pazymiu vidurkis:", pazymiuVidurkis / pazymiuMasyvas.length);
*/

// 2/5

// 20.
/* 
console.log(`
------------
uzduotis 20\n`);

let kelioniuAtstumai = [];

while (kelioniuAtstumai.length < 15) {
  kelioniuAtstumai.push(Math.floor(Math.random() * 300));
}

console.log("Nuvaziuoti atstumai:", kelioniuAtstumai);
console.log("atstumai ilgesni uz 150 Km:");
for (const atstumas of kelioniuAtstumai) {
  if (atstumas > 150) console.log(atstumas, "Km");
}
*/

// 21.
/* 
console.log(`
------------
uzduotis 21\n`);

let failuSarasas = [
  "failas1.txt",
  "failas2.txt",
  "failas3.json",
  "failas4.csv",
  "failas5.txt",
  "failas6.pdf",
  "failas7.docx",
  "failas8.json",
  "failas9.pdf",
  "failas10.csv",
];
console.log("Visi failai:", failuSarasas);
console.log("Failai su kuriais galima dirbti:");

for (const failas of failuSarasas) {
  if (failas.endsWith(".txt") || failas.endsWith(".json")) console.log(failas);
}
*/

// 3/5

// 22.
/* 
console.log(`
------------
uzduotis 22\n`);

let automobiliuMarkes = [
  "Toyota",
  "Ford",
  "BMW",
  "Audi",
  "Mercedes-Benz",
  "Volkswagen",
  "Honda",
  "Chevrolet",
];

for (const marke of automobiliuMarkes) {
  console.log(marke, "- pavadinima sudaro", marke.length, "raidziu kiekis.");
}
*/

// 23.
/* 
console.log(`
------------
uzduotis 23\n`);

let ivykusiosKlaidos = [
  "ui18",
  "sys30",
  "auth10",
  "ui18",
  "sys30",
  "sys30",
  "a///",
  "auth10",
];

let klaidosPaaiskinimas = [
  "Grafinės sąsajos klaida navigacijoje",
  "Trūksta operatyviosios atminties sistemoje",
  "Nepakankamos vartotojo teisės",
  "Nenumatyta klaida.",
];

for (const klaida of ivykusiosKlaidos) {
  if (klaida.startsWith("ui")) {
    console.log(klaida, "-", klaidosPaaiskinimas[0]);
  } else if (klaida.startsWith("sys")) {
    console.log(klaida, "-", klaidosPaaiskinimas[1]);
  } else if (klaida.startsWith("auth")) {
    console.log(klaida, "-", klaidosPaaiskinimas[2]);
  } else {
    console.log(klaida, "-", klaidosPaaiskinimas[3]);
  }
}
*/

// 4/5

// 24.
/* 
console.log(`
------------
uzduotis 24\n`);

let likuciai = [234, 45, 688, 4, 345, 0, 56];

const isperkamaPerDiena = 5;

for (const likutis in likuciai) {
  console.log(
    "Prekes",
    likutis + 1,
    "liko",
    likuciai[likutis],
    "vnt. prekes uzteks mazdaug",
    Math.ceil(likuciai[likutis] / isperkamaPerDiena),
    "dienu."
  );
}
*/

// 25.
/* 
console.log(`
------------
uzduotis 25\n`);

let pazymaiArray = [];

while (pazymaiArray.length < 20) {
  pazymaiArray.push(Math.floor(Math.random() * 10 + 1));
}

let vidurkisPazymiu = 0;
let teigiamiPazymiai = [];

console.log("Visi pazymiai:", pazymaiArray, "\n");

for (const pazymys of pazymaiArray) {
  if (pazymys > 4) teigiamiPazymiai.push(pazymys);
  vidurkisPazymiu += pazymys;
}

console.log("Teigiami pazymiai:", teigiamiPazymiai);
console.log("vidurkis pazymiu:", vidurkisPazymiu / pazymaiArray.length);
console.log(
  "Neigiamu pazymiu kiekis:",
  pazymaiArray.length - teigiamiPazymiai.length
);
*/

// 5/5

// 26.
/* 
console.log(`
------------
uzduotis 26\n`);

let pazymaiPirmo = [];
let pazymaiAntro = [];

while (pazymaiPirmo.length < 20) {
  pazymaiPirmo.push(Math.floor(Math.random() * 10 + 1));
  pazymaiAntro.push(Math.floor(Math.random() * 10 + 1));
}

let vidurkisArray = [0, 0];

for (const pazymys in pazymaiPirmo) {
  vidurkisArray[0] += pazymaiPirmo[pazymys];
  vidurkisArray[1] += pazymaiAntro[pazymys];
}
vidurkisArray[0] /= pazymaiPirmo.length;
vidurkisArray[1] /= pazymaiAntro.length;

console.log("Pirmo studento pazymiai:", pazymaiPirmo);
console.log("Pirmo studento Pazymiu vidurkis: ", vidurkisArray[0]);
console.log("Antro studento pazymiai:", pazymaiAntro);
console.log("Antro studento Pazymiu vidurkis: ", vidurkisArray[1]);

if (vidurkisArray[0] == vidurkisArray[1]) {
  console.log("Vidurkiai lygus.");
} else if (vidurkisArray[0] > vidurkisArray[1]) {
  console.log("Pirmo studento vidurkis didesnis.");
} else console.log("Antro studento vidurkis didesnis.");
*/

// 27.
/* */
console.log(`
------------
uzduotis 27\n`);

let zodziuArray = [
  "lager",
  "ipa",
  "stout",
  "pilsner",
  "porter",
  "ale",
  "wheat",
  "bock",
  "saison",
  "porter",
];

let atrinktiZodziai = [];

for (const zodis of zodziuArray) {
  if (zodis.length < 5) atrinktiZodziai.push(zodis);
}

console.log("Pradiniai zodziai:\n" + zodziuArray);
console.log("Zodziai turintis maziau nei 5 raides:\n" + atrinktiZodziai);
