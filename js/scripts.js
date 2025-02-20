// uzduotys 1/6

// 1.
console.log("\n-- 01 --\n");

let studentas = {
  vardas: "Vardenis",
  pavarde: "Pavardenis",
  amzius_m: 99,
  ugis_m: 1.11,
  kursas: 2,
  mokykla: "Krantuske",
};

console.log(studentas);

// 2.
console.log("\n-- 02 --\n");

let filmas = {};

filmas.pavadinimas = "The Matrix";
filmas.rezisierius = "Lana Wachowski";
filmas.biudzetas_Eur = 30;
filmas.uzdarbis_Eur = 50;
filmas.zanras = "Action";
filmas.trukme = "2h 16m";
filmas.isleidimo_metai = 1999;
filmas.aktoriu_sarasas = [
  "Keanu Reeves",
  "Laurence Fishburne",
  "Carrie-Anne Moss",
];

console.log(filmas);
console.log("Pelnas:", filmas.uzdarbis_Eur - filmas.biudzetas_Eur);
console.log("dalivavo aktoriu:", filmas.aktoriu_sarasas.length);
console.log(
  "filmui metu yra:",
  new Date(Date.now()).getFullYear() - filmas.isleidimo_metai
);

// 3.
console.log("\n-- 03 --\n");

let knygos = [{}, {}];

knygos[0].pavadinimas = "Nusikaltimas ir bausme";
knygos[0].autorius = "Fiodoro Dostojevskio";
knygos[0].zanras = "Psichologinis romanas";
knygos[0].kaina = 13.9;
knygos[0].puslapiu_kiekis = 576;
knygos[0].skyriu_sarasas = [
  "Pirmoji dalis",
  "Antroji dalis",
  "Trečioji dalis",
  "Ketvirtoji dalis",
  "Penktos dalis",
  "Šeštoji dalis",
  "Epilogas",
];
knygos[0].isleidimo_metai = 1866;
knygos[0].ar_yra_knygynuose = true;

knygos[1].pavadinimas = "1984";
knygos[1].autorius = "George'as Orwellas";
knygos[1].zanras = "Distopinis romanas";
knygos[1].kaina = 15;
knygos[1].puslapiu_kiekis = 328;
knygos[1].skyriu_sarasas = [
  "Pirmoji dalis",
  "Antroji dalis",
  "Trečioji dalis",
  "Epilogas",
];
knygos[1].isleidimo_metai = 1949;
knygos[1].ar_yra_knygynuose = true;

console.log(knygos);

if (knygos[0].puslapiu_kiekis > knygos[1].puslapiu_kiekis) {
  console.log("Knyga", knygos[1].pavadinimas, "yra plonesne.");
} else console.log("Knyga", knygos[0].pavadinimas, "yra plonesne.");

if (knygos[0].skyriu_sarasas.length > knygos[1].skyriu_sarasas.length) {
  console.log("Knyga", knygos[1].pavadinimas, "turi maziau skyriu.");
} else console.log("Knyga", knygos[0].pavadinimas, "turi maziau skyriu.");

if (knygos[0].kaina > knygos[1].kaina) {
  let newKaina = knygos[1].kaina * 2;
  if (newKaina > knygos[0].kaina) {
    console.log(
      "Padidinus",
      knygos[1].pavadinimas,
      " kaina 2 katus, butu brangesne uz kita knyga"
    );
  } else {
    console.log(
      "Padidinus",
      knygos[1].pavadinimas,
      " kaina 2 katus, nebutu brangesne uz kita knyga"
    );
  }
} else {
  let newKaina = knygos[0].kaina * 2;
  if (newKaina > knygos[1].kaina) {
    console.log(
      "Padidinus",
      knygos[0].pavadinimas,
      "kaina 2 katus, butu brangesne uz kita knyga"
    );
  } else {
    console.log(
      "Padidinus",
      knygos[0].pavadinimas,
      "kaina 2 katus, nebutu brangesne uz kita knyga"
    );
  }
}

// 4.
console.log("\n-- 04 --\n");

let prekes = [{}, {}, {}];

{
  prekes[0].pavadinimas = "Anglys";
  prekes[0].kaina_Eur = 30;
  prekes[0].savikaina_Eur = 10;
  prekes[0].kodas = "0001";
  prekes[0].kiekis_sandelyje = 500;
  prekes[0].siuntimui_dezes_matmenys_cm = { x: 40, y: 40, z: 60 };
}

{
  prekes[1].pavadinimas = "Lagaminas";
  prekes[1].kaina_Eur = 249;
  prekes[1].savikaina_Eur = 220;
  prekes[1].kodas = "0110";
  prekes[1].kiekis_sandelyje = 14;
  prekes[1].siuntimui_dezes_matmenys_cm = { x: 80, y: 60, z: 90 };
}

{
  prekes[2].pavadinimas = "Lygintuvas";
  prekes[2].kaina_Eur = 79;
  prekes[2].savikaina_Eur = 60;
  prekes[2].kodas = "1000";
  prekes[2].kiekis_sandelyje = 38;
  prekes[2].siuntimui_dezes_matmenys_cm = { x: 20, y: 20, z: 20 };
}

console.log(prekes);

console.log(
  "pirma prekė kainuoja:",
  prekes[0].kaina_Eur,
  "Eur, Antra prekė kainuoja:",
  prekes[1].kaina_Eur,
  "Eur, trecia prekė kainuoja:",
  prekes[2].kaina_Eur,
  "Eur\n"
);

let didKaina = 0;
if (prekes[0].kaina_Eur > didKaina) {
  didKaina = prekes[0].kaina_Eur;
}
if (prekes[1].kaina_Eur > didKaina) {
  didKaina = prekes[1].kaina_Eur;
}
if (prekes[2].kaina_Eur > didKaina) {
  didKaina = prekes[2].kaina_Eur;
}
didKaina = prekes.findIndex((preke) => preke.kaina_Eur === didKaina);

console.log("Brangiause preke:", prekes[didKaina], "\n");

console.log(
  "pirmos prekės dezes turis:",
  prekes[0].siuntimui_dezes_matmenys_cm.x *
    prekes[0].siuntimui_dezes_matmenys_cm.y *
    prekes[0].siuntimui_dezes_matmenys_cm.z,
  "cm^3\nantra prekės dezes turis:",
  prekes[1].siuntimui_dezes_matmenys_cm.x *
    prekes[1].siuntimui_dezes_matmenys_cm.y *
    prekes[1].siuntimui_dezes_matmenys_cm.z,
  "cm^3\ntrecios prekės dezes turis:",
  prekes[2].siuntimui_dezes_matmenys_cm.x *
    prekes[2].siuntimui_dezes_matmenys_cm.y *
    prekes[2].siuntimui_dezes_matmenys_cm.z,
  "cm^3\n"
);
console.log(
  "pirmos prekės pelningumas:",
  (prekes[0].kaina_Eur - prekes[0].savikaina_Eur) * prekes[0].kiekis_sandelyje,
  "Eur, antros prekės pelningumas:",
  (prekes[1].kaina_Eur - prekes[1].savikaina_Eur) * prekes[1].kiekis_sandelyje,
  "Eur, trecios prekės pelningumas:",
  (prekes[2].kaina_Eur - prekes[2].savikaina_Eur) * prekes[2].kiekis_sandelyje,
  "Eur\n"
);

// 5.
console.log("\n-- 05 --\n");

let automobilis = {};

automobilis.marke = "Ford";
automobilis.modelis = "Fusion";
automobilis.rida = 234503;
automobilis.gamybos_metai = 2004;
automobilis.spalva = "Ochrine";
automobilis.darbinis_turis = 1.4;
automobilis.ar_dauzta = true;
automobilis.ar_parduodama = false;

console.log(automobilis);

let amzius = new Date(Date.now()).getFullYear() - automobilis.gamybos_metai;
console.log("\nAutomobilio amzius:", amzius, "m");
console.log(
  "Vidutiniskai per metus nuvaziuoja:",
  parseInt(automobilis.rida / amzius),
  "Km"
);

// 6.
console.log("\n-- 06 --\n");

let kruopos = [
  {
    pavadinimas: "ryziai",
    pagaminta: 1998,
    galiojimas: 1,
    kaina: 1.19,
    kiekis: 300,
  },
  {
    pavadinimas: "grikiai",
    pagaminta: 2025,
    galiojimas: 1,
    kaina: 28.99,
    kiekis: 33,
  },
];

console.log(kruopos);

console.log("Baigs galioti:");
console.log(
  kruopos[0].pavadinimas,
  "baigs galioti",
  kruopos[0].pagaminta + kruopos[0].galiojimas
);
console.log(
  kruopos[1].pavadinimas,
  "baigs galioti",
  kruopos[1].pagaminta + kruopos[1].galiojimas
);

let data = new Date(Date.now()).getFullYear();

console.log("\nAr dar galioja:");
let galioja =
  kruopos[0].pagaminta + kruopos[0].galiojimas - data > 0
    ? "Galioja"
    : "Negalioja";

console.log(kruopos[0].pavadinimas, galioja);
galioja =
  kruopos[1].pagaminta + kruopos[1].galiojimas - data > 0
    ? "Galioja"
    : "Negalioja";

console.log(kruopos[1].pavadinimas, galioja);

// uzduotys 1/2

// 7.
console.log("\n-- 07 --\n");

let knygynas = {};

knygynas.pavadinimas = "Pegasas";
knygynas.adresas = "Prastoji g. 1, Vilnius";
knygynas.plotas_m2 = 28;
knygynas.knygu_kiekis = 200;
knygynas.darbo_valandos = 8;
knygynas.ar_atidarytas = false;

for (raktas in knygynas) {
  console.log(raktas, ":", knygynas[raktas]);
}

console.log();

for (raktas in knygynas) {
  if (typeof knygynas[raktas] != "string")
    console.log(raktas, ":", knygynas[raktas]);
}

// 8.
console.log("\n-- 08 --\n");

let studentai = [
  {
    vardas: "Vardenis",
    pavarde: "Pavardenis",
    studiju_programa: "Banginiu prieziura",
    pazymiai: [6, 6, 6, 7, 6, 5, 5],
  },
  {
    vardas: "Genadijus",
    pavarde: "Stucman",
    studiju_programa: "Pramogu industrija",
    pazymiai: [5, 10, 6, 7, 7, 5, 5],
  },
];

let vidurkis = [0, 0];

for (let i = 0; i < studentai.length; i++) {
  for (const pazymys of studentai[i].pazymiai) {
    vidurkis[i] += pazymys;
  }
  vidurkis[i] /= studentai[i].pazymiai.length;
  vidurkis[i] = Number(vidurkis[i].toFixed(2));
}

console.log(studentai);
console.log("vidurkiai:", vidurkis);
