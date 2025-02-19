// JS masyvai 2 Uzduotys

// 01.
/* 
console.log(`
------------
uzduotis 01\n`);

let valgiai = ["Šaltibarščiai", "Keptos bulvės", "Kraujiniai vėdarai", "Pica"];

valgiai.push("Kebabas");

valgiai.unshift("Sushi");

valgiai.splice(valgiai.length / 2, 0, "Kibinas");
valgiai.splice(2, 0, "Lasanija");
console.log(valgiai);
*/

// 02.
/* 
console.log(`
------------
uzduotis 02\n`);

let skaiciai = [2, 5, 43, 32, 32, 432, 45, 67, 5, 4, 3, 276, 22, 2];

console.log("Ar yra 5:", skaiciai.includes(5));
*/

// 03.
/* 
console.log(`
------------
uzduotis 03\n`);

let zodziai = ["Šaltibarščiai", "Keptos bulvės", "Kraujiniai vėdarai", "Pica"];

console.log(zodziai.join(","));
console.log(zodziai.join(", kitas: "));
console.log(zodziai.join("\n"));
*/

// 04.
/* 
console.log(`
------------
uzduotis 04\n`);

let sakinys =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores incidunt impedit architecto, id rem quisquam similique suscipit exercitationem amet nostrum";

let isskaidyti = sakinys.split(" ");

console.log(isskaidyti.length);
*/

// 05.
/* 
console.log(`
------------
uzduotis 05\n`);

let pazymiai = [2, 6, 4, 3, 3, 5, 6, 7, 10];

console.log("Nerikiuoti:", ...pazymiai);
pazymiai.sort((a, b) => b - a);
console.log("surikiuoti:", ...pazymiai);
console.log("3 dydziausi:", pazymiai[0], pazymiai[1], pazymiai[2]);
*/

// 06.
/* 
console.log(`
------------
uzduotis 06\n`);

let biologijosStudentai = [
  "Aidas",
  "Ema",
  "Matas",
  "Ieva",
  "Lukas",
  "Karolina",
  "Andrius",
  "Simona",
  "Povilas",
  "Monika",
];

let matematikosStudentai = [
  "Karolina",
  "Andrius",
  "Simona",
  "Dainius",
  "Aistė",
  "Vytautas",
  "Simona",
  "Paulius",
  "Rūtas",
  "Jurgita",
];

let visiVardai = [...biologijosStudentai, ...matematikosStudentai];
let visiUnikalusVardai = new Set(visiVardai);
console.log("Visi bendrai vardai:", visiVardai);
console.log("Visi bendrai unikalus vardai:", [...visiUnikalusVardai]);
*/

// 07.
/* 
console.log(`
------------
uzduotis 07\n`);

let temos1 = [
  "Matematikos analizė",
  "Genetika",
  "Ekonomika",
  "Programavimo kalbos",
  "Makroekonomika",
  "Fizikos principai",
  "Mikrobiologija",
];
let temos2 = [
  "Filosofija",
  "Istorija",
  "Pasaulio literatūra",
  "Inžinerija",
  "Klimato kaita",
  "Dirbtinis intelektas",
];

let sujungtas = [...temos1, ...temos2];
console.log("sujungtos temos:", sujungtas);
*/

// 08.
/* 
console.log(`
------------
uzduotis 08/n`);

let spalvos = ["raudona", "zalia", "melina", "geltona", "orangine"];
let kopijaSpalvu = [...spalvos];

spalvos = [];

console.log("orginalus masyvas:", spalvos);
console.log("masyvo kopija:", kopijaSpalvu);
*/

// 09.
/* 
console.log(`
------------
uzduotis 09/n`);

let miestai = [
  "Vilnius",
  "Kaunas",
  "Klaipėda",
  "Šiauliai",
  "Panevėžys",
  "Alytus",
  "Marijampolė",
];
console.log("miestu sarasas: ", miestai);
console.log(
  "Pasirinkto miesto (Panevėžys) indexas:",
  miestai.indexOf("Panevėžys")
);
*/

// 10.
/* 
console.log(`
------------
uzduotis 10/n`);

let skaiciuRinkinis = [321, 43, 60, 64, 7, 6403, 5, 643, 60, 60, 60, 432];
let kopijaMasyvo = [...skaiciuRinkinis];
let dublikatai = [];

for (const skaicius of skaiciuRinkinis) {
  let kiekis = 0;
  while (kopijaMasyvo.indexOf(skaicius) >= 0) {
    kiekis++;
    kopijaMasyvo.splice(kopijaMasyvo.indexOf(skaicius), 1);
  }
  if (kiekis > 1) dublikatai.push(skaicius);
}

if (dublikatai.length == 0) {
  console.log("Masyve:[" + skaiciuRinkinis + "] nera dublikatu");
} else
  console.log(
    "Masyve:" + skaiciuRinkinis,
    "] yra dublikatu (skaiciai " + dublikatai,
    ")"
  );
*/

// 11.
/* 
console.log(`
------------
uzduotis 11/n`);

let masyvas = [321, 43, 60, 64, 7, 432];
let isskaidyti = [];
let iKiek = 2;

while (masyvas.length > 0) {
  isskaidyti.push(masyvas.splice(0, iKiek));
}
console.log(isskaidyti);
*/

// 12.
/* 
console.log(`
------------
uzduotis 12/n`);

let skaicius = "1234321";
let atvirkscias = skaicius.split("").reverse().join("");

if (skaicius === atvirkscias)
  console.log("Skaicius", skaicius, "yra palindrominis");
else console.log("Skaicius", skaicius, "nera palindrominis");
*/

// 13.
/* 
console.log(`
------------
uzduotis 13/n`);

let pirmasM = [1, 2, 3, 4];
let antrasM = [3, 4, 5, 6, 7];
let treciasM = [];

for (const skaicius of pirmasM) {
  if (treciasM.indexOf(skaicius) === -1) {
    treciasM.push(skaicius);
  }
}
for (const skaicius of antrasM) {
  if (treciasM.indexOf(skaicius) === -1) {
    treciasM.push(skaicius);
  }
}
console.log("Pirmas masyvas:\n", pirmasM);
console.log("Antras masyvas:\n", antrasM);
console.log("Sujungtas masyvas be pasikartojimu:\n", treciasM);
*/

// 14.
/* 
console.log(`
------------
uzduotis 14/n`);

let masyvas1 = [21, 45, 76, 87, 43, 432];
let masyvas2 = [84, 643, 532, 76, 785, 21];

let atsikartoja = [];

for (const item of masyvas1) {
  if (masyvas2.indexOf(item) != -1 && atsikartoja.indexOf(item) === -1) {
    atsikartoja.push(item);
  }
}
console.log("Pirmas masyvas:\n", masyvas1);
console.log("Antras masyvas:\n", masyvas2);
console.log("atsikartoja:\n", atsikartoja);
*/

// 15.
/* 
console.log(`
------------
uzduotis 15/n`);

let masyvasSkaiciu = [324, 6, 7, 43, 32, 21, 1, 2, 3, 4, 5, 56, 7, 8, 0];

for (let i = 1; i > 0; i++) {
  if (masyvasSkaiciu.indexOf(i) === -1) {
    console.log("Masyvas:\n", masyvasSkaiciu);
    console.log("Maziausias teigiamas, kuris neegzituoje masyve:", i);
    break;
  }
}
*/

// 16.
/* 
console.log(`
------------
uzduotis 16/n`);

let masyvas = [1, 2, 3, 4, 65];

console.log("Orginalus:\n", masyvas);

masyvas.reverse();

console.log("Apverstas:\n", masyvas);
*/

// JS masyvai 3 Uzduotys

// 01.
/*
console.log(`
------------
uzduotis 01\n`);

let skaiciai = [7, 5, 9, 3, 4, 2, 3, 4, 6, 7, 8, 9];

let lyginis = skaiciai.find((skaicius) => skaicius % 2 === 0);

console.log(lyginis);
 */

// 02.
/*
console.log(`
------------
uzduotis 02\n`);

let skaiciai = [-7, -5, -9, 0, 5, 2, 3, 4, -6, -7, 8, 9];

let teigiamas = skaiciai.find((skaicius) => skaicius > 0);

console.log(teigiamas);
*/

// 03.
/* 
console.log(`
------------
uzduotis 03\n`);

let skaiciai = [7, 5, 9, 0, 4, -6, -7, 8, 9];

let neigiamoIndex = skaiciai.findIndex((skaicius) => skaicius < 0);

console.log(neigiamoIndex);
*/

// 04.
/* 
console.log(`
------------
uzduotis 04\n`);

let skaiciai = [7, 5, 9, 0, 4, -60, -7, 19, 9];

let skaiciausIndex = skaiciai.findIndex((skaicius) => skaicius >= 10);

console.log(skaiciausIndex);
*/

// 05.
/* 
console.log(`
------------
uzduotis 05\n`);

let skaiciai = [7, 5, 9, 0, 21, -60, -7, 19, 9];

let pirmasis = skaiciai.find((skaicius) => skaicius % 3 === 0 && skaicius > 10);

console.log(pirmasis);
*/

// 06.
/* 
console.log(`
------------
uzduotis 06\n`);

let skaiciai = [7, 5, 9, 0, 21, -60, -7, 19, 9];

let pirmasis = skaiciai.find((skaicius) => skaicius % 2 === 0 && skaicius < 0);

console.log(pirmasis);
*/

// 07.
/* 
console.log(`
------------
uzduotis 07\n`);

let skaiciai = [6, 4, 4, 10, 210, 60, 707, -190, 90];

let teigiami = skaiciai.every((skaicius) => skaicius > 0);

console.log("Visi teigiami:", teigiami);
*/

// 08.
/* 
console.log(`
------------
uzduotis 08\n`);

let skaiciai = [632, 432, 432, 1032, 21032, 6032, 707, 1902, 9032];

let lyginiai = skaiciai.every((skaicius) => skaicius % 2 == 0);

console.log("Visi lyginiai:", lyginiai);
*/

// 09.
/* 
console.log(`
------------
uzduotis 09\n`);

let skaiciai = [63, 43, 47, 103, 2103, 603, 707, 190, 903];

let mazesni5 = skaiciai.some((skaicius) => skaicius < 5);

console.log("Yra mazesniu uz 5:", mazesni5);
*/

// 10.
/* 
console.log(`
------------
uzduotis 10\n`);

let skaiciai = [0, 0, 47, -103, -2103, -3, -7, -190, -903];

let teigiami = skaiciai.some((skaicius) => skaicius > 0);

console.log("Yra teigiamu:", teigiami);
*/

// 11.
/* 
console.log(`
------------
uzduotis 11\n`);

let zodiai = ["asrt", "adsf", "sd", "dsas"];

let daugiau2 = zodiai.every((zodis) => zodis.length > 2);

console.log("visi turi 3 arba daugiau simboliu:", daugiau2);
*/

// 12.
/* 
console.log(`
------------
uzduotis 12\n`);
let zodiai = ["bsrt", "Abdsf", "sd", "sas"];

let prasidedaA = zodiai.some((zodis) => zodis.toLowerCase().startsWith("a"));

console.log("visi turi 3 arba daugiau simboliu:", prasidedaA);
*/

// 13.
/* 
console.log(`
------------
uzduotis 13\n`);

let skaiciai = [47, 34, 2103, 3, 7, 190, 903];

let teigiamiIrLyginiai =
  skaiciai.every((skaicius) => skaicius > 0) &&
  skaiciai.some((skaicius) => skaicius % 2 === 0);

console.log("Yra teigiamu ir lyginiu:", teigiamiIrLyginiai);
*/

// 14.
/* 
console.log(`
------------
uzduotis 14\n`);

let skaiciai = [47, 0, -2103, -3, -7, 190, 903];

let teigiami = skaiciai.filter((skaicius) => skaicius > 0);

console.log("teigiami:", teigiami);
*/

// 15.
/* 
console.log(`
------------
uzduotis 15\n`);

let reitingai = [5, 1, 4, 5, 1, 3, 4, 5, 2];

let filtruoti = reitingai.filter((skaicius) => skaicius < 3);

console.log("filtruoti 1-2:", filtruoti);
*/

// 16.
/* 
console.log(`
------------
uzduotis 16\n`);

let skaiciai = [47, 0, 44, -3, -7, 190, 903];

let teigiamiIrLyginiai = skaiciai.filter(
  (skaicius) => skaicius > 0 && skaicius % 2 === 0
);

console.log("teigiami:", teigiamiIrLyginiai);
*/

// 17.
/* 
console.log(`
------------
uzduotis 17\n`);

let salys = ["Belgija", "Lietuva", "Graikija", "Bulgarija"];

let prasidedaB = salys.filter((salis) => salis.toLowerCase().includes("b"));

console.log("turi b raide:", prasidedaB);
*/

// 18.
/* 
console.log(`
------------
uzduotis 18\n`);

let skaiciai = [3, 7, 2, 9, 6, 4];

let lyginiaiX2 = skaiciai
  .filter((skaicius) => skaicius % 2 === 0)
  .map((skaicius) => skaicius * 2);

console.log("lyginiai *2:", lyginiaiX2);
*/

// 19.
/* 
console.log(`
------------
uzduotis 19\n`);

let skaiciai = [3, 7, 2, 9, 6, 4];

let onePlius = skaiciai.map((skaicius) => skaicius + 1);

console.log("vienu padidinti:", onePlius);
*/

// 20.
/* 
console.log(`
------------
uzduotis 20\n`);

let zodziai = ["bananas", "baba", "klėtis"];

let upercasesai = zodziai.map((zodis) => zodis.toUpperCase());

console.log("did=iosiomis raidemis:", upercasesai);
*/

// 21.
/* 
console.log(`
------------
uzduotis 21\n`);

let skaiciai = [3, 7, -2, 9, 6, 4];

let suma = skaiciai.reduce((laikina_suma, skaicius) => laikina_suma + skaicius);

console.log("suma:", suma);
*/

// 22.
/* 
console.log(`
------------
uzduotis 22\n`);

let skaiciai = [3, 7, 2, 9, 6, 4];

let suma = skaiciai
  .filter((skaicius) => skaicius % 2 === 0)
  .reduce((laikina_suma, skaicius) => laikina_suma + skaicius);

console.log("liginiu suma:", suma);
*/

// 23.
/* 
console.log(`
------------
uzduotis 23\n`);

let zodziai = ["bananas", "baba", "klėtis"];

let upercasesai = zodziai.map((zodis) => zodis[0].toUpperCase());

console.log("pirma raide upercase:", upercasesai);
*/

// 24.
/* 
console.log(`
------------
uzduotis 24\n`);

let zodziai = ["bananas", "baba", "klėtis", "bananas", "du"];

let upercasesai = zodziai.filter((zodis) => zodis.length > 4);

console.log("zodziu kiekis is >=5 raidziu:", upercasesai.length);
*/

// 25.
/* 
console.log(`
------------
uzduotis 25\n`);

let zodziai = ["bananas", "baba", "klėtis", "bananas", "du"];

let ilgiai = zodziai.map((zodis) => zodis.length);

console.log("zodziu ilgiai:", ilgiai);
*/

// 26.
/* 
console.log(`
------------
uzduotis 26\n`);

let vardaiIrAmzius = ["Tomas 34", "Jonas 20", "Gintare 40", "inga 24"];

let vardai = vardaiIrAmzius.map((zodis) => zodis.split(" ")[0]);

console.log("tik vardai:", vardai);
*/

// 27.
/* 
console.log(`
------------
uzduotis 27\n`);

let vardaiIrAmzius = ["Tomas 34", "Jonas 20", "Gintare 40", "inga 24"];

let amziaiSuma = vardaiIrAmzius
  .map((zodis) => Number(zodis.split(" ")[1]))
  .reduce((laikina_suma, amzius) => laikina_suma + amzius);

console.log("amziu suma:", amziaiSuma);
*/

// 28.
/* 
console.log(`
------------
uzduotis 28\n`);

let likuciai = [3, 7, 2, 9, 6, 4];

let truksta = likuciai
  .filter((likutis) => likutis < 5)
  .map((likutis) => 5 - likutis);

console.log("truksta iki 5:", truksta);
*/

// 29.
/* 
console.log(`
------------
uzduotis 29\n`);

let pazymiai = [3, 7, 10, 9, 6, 4];

let geriPazymiai = pazymiai.filter((pazymys) => pazymys > 7);

console.log("geru pazymiu kiekis (>=8)", geriPazymiai.length);
*/

// 30.
/* */
console.log(`
------------
uzduotis 30\n`);

let zodziai = ["bananas", "baba", "Aklėtis", "bananas", "du"];

let aKiekis = zodziai
  .filter((zodis) => zodis.toLowerCase().includes("a"))
  .join("")
  .split("")
  .filter((raide) => raide.toLowerCase().includes("a"));

console.log("a raidziu:", aKiekis.length);
