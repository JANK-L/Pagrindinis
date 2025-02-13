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
/* */
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
