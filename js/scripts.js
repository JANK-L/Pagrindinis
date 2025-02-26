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

// 9.
console.log("\n-- 09 --\n");

let preke = {
  pavadinimas: "Valtis",
  kaina: 400,
  kaina_be_PVM: function () {
    let kainaBePVM = this.kaina * 0.79;
    return kainaBePVM;
  },
};
console.log(preke);
console.log("kaina be PVM:", preke.kaina_be_PVM());

// 10.
console.log("\n-- 10 --\n");

let reservacija = {
  restoranas: "Ale Italiano",
  kaina: 25,
  laisvu_vietu: 21,
  rezervuoti_viska: function () {
    console.log(
      "Reservavus visas vietas, kainuotu:",
      this.kaina * this.laisvu_vietu
    );
  },
};
console.log(reservacija);
reservacija.rezervuoti_viska();

// 11.
console.log("\n-- 11 --\n");

let knygos11 = [
  { pavadinimas: "Knyga be vardo", autorius: "Be autoriaus", kaina: 5 },
  { pavadinimas: "Paprasta knyga", autorius: "Nezinoma", kaina: 10 },
];

console.log(knygos11[0]);
console.log("Antros knygos autorius:", knygos11[1].autorius);

// 12.
console.log("\n-- 12 --\n");

let Prekes12 = [
  { pavadinimas: "A55 5G", gamintojas: "SAMSUNG", kaina: 350 },
  { pavadinimas: "C5", gamintojas: "POCO", kaina: 70 },
  { pavadinimas: "P40", gamintojas: "HUAWEI", kaina: 150 },
];
for (const preke of Prekes12) {
  console.log(preke.gamintojas, preke.pavadinimas, "Kaina:", preke.kaina);
}

// 13.
console.log("\n-- 13 --\n");

let automobilis12 = [
  { marke: "Ford", modelis: "Fusion", rida: 234503, gamybos_metai: 2004 },
  { marke: "Ford", modelis: "Focus", rida: 105002, gamybos_metai: 2012 },
  { marke: "Ford", modelis: "Fiesta", rida: 295034, gamybos_metai: 2000 },
];

for (const auto of automobilis12) {
  console.log("Automobilis:", auto.marke, auto.modelis);
  console.log("Pagamintas:", auto.gamybos_metai);
  console.log(
    "Amzius:",
    new Date(Date.now()).getFullYear() - auto.gamybos_metai,
    "\n"
  );
}

// 14.
console.log("\n-- 14 --\n");

let imones = [
  {
    pavadinimas: "AB Bedarbiai",
    ikurta: 1980,
    darbuotoju_skaicius: 5000,
    pelnas: 0,
  },
  {
    pavadinimas: "UAB vagys",
    ikurta: 1780,
    darbuotoju_skaicius: 35,
    pelnas: 500345,
  },
  {
    pavadinimas: "UAB Parduotuve",
    ikurta: 1960,
    darbuotoju_skaicius: 100,
    pelnas: 301000,
  },
];

for (const imone of imones) {
  console.log(
    "Imone",
    imone.pavadinimas,
    "buvo ikurta",
    imone.ikurta,
    "metais, siuo metu turi",
    imone.darbuotoju_skaicius,
    "darbuotoju ir metinis pelnas yra",
    imone.pelnas,
    "Eur."
  );
}
console.log("Vidutinis bendras imoniu amzius:");
vidurkis = 0;
for (const imone of imones) {
  vidurkis += new Date(Date.now()).getFullYear() - imone.ikurta;
}
console.log(vidurkis / imones.length);

console.log("Vidutinis bendras imoniu pelnas:");
vidurkis = 0;
for (const imone of imones) {
  vidurkis += imone.pelnas;
}
console.log(vidurkis / imones.length);

console.log("Vidutinis bendras imoniu darbuotuju kiekis:");
vidurkis = 0;
for (const imone of imones) {
  vidurkis += imone.darbuotoju_skaicius;
}
console.log(vidurkis / imones.length);

// 15.
console.log("\n-- 15 --\n");

let ligonines = [
  {
    pavadinimas: "Gariunu ligonine",
    adresas: "Gariunu g. 70, Vilnius",
    lankytoju_skaicius: 200,
    darbuotoju_skaicius: 20,
  },
  {
    pavadinimas: "Buržuazijos ligonine",
    adresas: "Turtuoliu g. 2, Turtmiestis",
    lankytoju_skaicius: 50,
    darbuotoju_skaicius: 80,
  },
  {
    pavadinimas: "Piliakalnio ligonine",
    adresas: "Pilies g. 40A, Piliamiestis",
    lankytoju_skaicius: 92,
    darbuotoju_skaicius: 15,
  },
];

for (const ligonine of ligonines) {
  console.log(ligonine.pavadinimas, ",", ligonine.adresas);
}

console.log("Bendras lankytoju skaicius:");
let suma = 0;
for (const ligonine of ligonines) {
  suma += ligonine.lankytoju_skaicius;
}
console.log(suma);

console.log("Bendras darbuotoju skaicius:");
suma = 0;
for (const ligonine of ligonines) {
  suma += ligonine.darbuotoju_skaicius;
}
console.log(suma);

// 16.
console.log("\n-- 16 --\n");

let studentai16 = [
  {
    vardas: "Vardenis",
    pavarde: "Pavardenis",
    amzius: 18,
    pazymiai: [1, 2, 3, 9, 8, 7, 5, 5],
    studiju_programa: "Teorine Fizika",
    kursas: 1,
  },
  {
    vardas: "Gutuinas",
    pavarde: "Tokorenkas",
    amzius: 26,
    pazymiai: [8, 9, 8, 9, 8, 9, 8, 9],
    studiju_programa: "Lietuvos istorija",
    kursas: 2,
  },
  {
    vardas: "Zitainas",
    pavarde: "Bepirstis",
    amzius: 24,
    pazymiai: [10, 7, 5, 5, 9, 8, 5, 9],
    studiju_programa: "Ekonomika",
    kursas: 1,
  },
];

vidurkis = 0;

for (const studentas of studentai16) {
  console.log(
    studentas.vardas,
    studentas.pavarde,
    studentas.amzius,
    "metu",
    studentas.studiju_programa,
    ", kursas",
    studentas.kursas
  );
  console.log("paazymiai:", ...studentas.pazymiai);

  studentas.vidurkis =
    studentas.pazymiai.reduce((viso, pazymis) => {
      return viso + pazymis;
    }) / studentas.pazymiai.length;

  vidurkis += studentas.vidurkis;

  console.log("vidurkis:", studentas.vidurkis);
  console.log("--------");
}

console.log("bendras vidurkis:", vidurkis / studentai16.length);

// 17.
console.log("\n-- 17 --\n");

let parduotuve = {
  pavadinimas: "Parduotuve",
  adresas: "kaimo g. 5, kaimas",
  darbuotoju_skaicius: 2,
  prekes: [
    {
      pavadinimas: "Alus",
      kodas: "OIJFE09432",
      kaina: 1.99,
      savikaina: 1.09,
      kiekis: 300,
    },
    {
      pavadinimas: "Eserys",
      kodas: "OIFFE09001",
      kaina: 10,
      savikaina: 6,
      kiekis: 50,
    },
    {
      pavadinimas: "Degtine",
      kodas: "DDINE09470",
      kaina: 20,
      savikaina: 12,
      kiekis: 500,
    },
  ],
};

console.log(parduotuve);
suma = 0;
let pavadinimas = parduotuve.prekes[0].pavadinimas;
let kiekis = parduotuve.prekes[0].kiekis;

for (const preke of parduotuve.prekes) {
  console.log(
    preke.pavadinimas,
    ", kainuoja (Eur):",
    preke.kaina,
    ",Turimas kiekis:",
    preke.kiekis
  );
  suma += preke.kiekis;

  if (preke.kiekis > kiekis) {
    kiekis = preke.kiekis;
    pavadinimas = preke.pavadinimas;
  }
}
console.log("Visu prekiu kiekis:", suma);
console.log("Daugiausiai prekiu yra", pavadinimas);
