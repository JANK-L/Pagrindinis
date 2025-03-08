// 1.
console.log("\n-- 01 --\n");
{
  function spausdinti_varda() {
    console.log("Vardenis Pavardenis \nPasirinktas progrmavimas siaip sau\n");
  }

  spausdinti_varda();
  spausdinti_varda();
  spausdinti_varda();
}
// 2.
console.log("\n-- 02 --\n");

{
  function eilerastis() {
    console.log(
      `Švelniai vėjas neša svajones,
Toli matosi mėlynas dangus.
Tyliai šnabžda medžiai paslaptis,
Ir širdyje gieda paukščiai rytą.
Pasaulis kupinas stebuklų ir tylos.\n`
    );
  }

  eilerastis();
  eilerastis();
  eilerastis();
  eilerastis();
  eilerastis();
}

// 3.
console.log("\n-- 03 --\n");

{
  function spausdinti_teksta1() {
    console.log("vienos funkcijos tekstas.");
  }
  function spausdinti_teksta2() {
    console.log("kitos funkcijos tekstas.");
  }
  function spausdinti_teksta3() {
    console.log("trecio funkcijos tekstas.");
  }

  spausdinti_teksta1();
  spausdinti_teksta2();
  spausdinti_teksta3();
}

// 4.
console.log("\n-- 04 --\n");

{
  function teksto_eile1() {
    console.log("kazkokia teksto eilute.");
  }
  function teksto_eile2() {
    console.log("kazkokia kitokia tekso eilute.");
  }

  function teksto_kvietimas() {
    teksto_eile1();
    teksto_eile2();
  }

  teksto_kvietimas();
}

// 5.
console.log("\n-- 05 --\n");

{
  function random_suma() {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    console.log(a, "+", b, "=", a + b);
  }

  random_suma();
}

// 6.
console.log("\n-- 06 --\n");

{
  function pateikti_informacija() {
    console.log(
      policinikas.vardas,
      policinikas.pavarde,
      "gauna",
      policinikas.alga,
      "Eur atligi. Dirba",
      policinikas.etatas,
      "ateta ir yra",
      policinikas.amzius,
      "metu"
    );
  }

  let policinikas = {
    vardas: "Vardenis",
    pavarde: "Pavardenis",
    amzius: 99,
    alga: 800,
    etatas: 0.75,
  };

  pateikti_informacija();
}

// 7.
console.log("\n-- 07 --\n");

{
  function random_skaiciu_eile() {
    let a = [];

    while (a.length != 10) {
      a.push(Math.floor(Math.random() * 100));
    }

    console.log(...a);
  }

  random_skaiciu_eile();
  random_skaiciu_eile();
  random_skaiciu_eile();
  random_skaiciu_eile();
  random_skaiciu_eile();
}

// 8.
console.log("\n-- 08 --\n");

{
  function random_sveikas_print() {
    console.log(Math.floor(Math.random() * 100));
  }

  for (let i = 0; i < 10; i++) {
    random_sveikas_print();
  }
}

// 9.
console.log("\n-- 09 --\n");

{
  function pasisveikinimas(vardas) {
    console.log("Labas,", vardas);
  }
  function atsisveikinimas(vardas) {
    console.log("Viso gero,", vardas);
  }

  let vardas = "Vardenis";

  pasisveikinimas(vardas);
  atsisveikinimas(vardas);
}

// 10.
console.log("\n-- 10 --\n");

{
  function didesnis(a, b) {
    if (a === b) console.log("skaiciai", a, "ir", b, "yra lygus");
    else if (a > b) console.log("didesnis a:", a);
    else console.log("didesnis b:", b);
  }

  didesnis(432, 64);
  didesnis(2, 2);
  didesnis(642, 9532);
  didesnis(2, 43);
  didesnis(-1, -64);
}

// 11.
console.log("\n-- 11 --\n");

{
  function autombilio_info(marke, modelis, metai, turis) {
    console.log(
      marke,
      modelis,
      "yra pagamintas",
      metai,
      "metais ir turi",
      turis,
      "L varykli."
    );
  }

  autombilio_info("Ford", "Fusion", 2004, 1.4);
  autombilio_info("Toyota", "corola verso", 2007, 2.2);
}

// 12.
console.log("\n-- 12 --\n");

{
  function suma(a, b) {
    console.log(a, "+", b, "=", a + b);
  }
  function skirtumas(a, b) {
    console.log(a, "-", b, "=", a - b);
  }
  function sandauga(a, b) {
    console.log(a, "*", b, "=", a * b);
  }
  function dalmuo(a, b) {
    console.log(a, "/", b, "=", a / b);
  }

  function random_skaiciu_veiksmai() {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    suma(a, b);
    skirtumas(a, b);
    sandauga(a, b);
    dalmuo(a, b);
    console.log();
  }

  random_skaiciu_veiksmai();
  random_skaiciu_veiksmai();
  random_skaiciu_veiksmai();
  random_skaiciu_veiksmai();
}

// 13.
console.log("\n-- 13 --\n");

{
  function masyvo_info(masyvas) {
    masyvas.forEach((elementas) => {
      console.log(elementas, elementas.length);
    });
  }

  let zodziai = ["klasdsa", "dsagsag", "asfsaf", "asdas", "asgsaf", "ads"];

  masyvo_info(zodziai);
}

// 14.
console.log("\n-- 14 --\n");

{
  function skaicius_kvadratas(masyvas) {
    masyvas.forEach((elementas) => {
      console.log(elementas, elementas ** 2, elementas / 2);
    });
  }

  let skacius_masyvas1 = [23, 532, 532, 8, 76, 856];
  let skacius_masyvas2 = [23532, 5, 21, 5, 6, 0, 8, 1];

  skaicius_kvadratas(skacius_masyvas1);
  skaicius_kvadratas(skacius_masyvas2);
}

// 15.
console.log("\n-- 15 --\n");

{
  function studento_info(pazymiai, vardas, pavarde) {
    console.log(vardas, pavarde);
    console.log("Pazymiai:", ...pazymiai);

    let vidurkis =
      pazymiai.reduce((a, b) => {
        return a + b;
      }) / pazymiai.length;
    console.log("Vidurkis:", vidurkis);
  }

  let studentas = {
    vardas: "Vardenis",
    pavarde: "Pavardenis",
    pazymiai: [10, 4, 6, 3, 2, 6, 9, 9, 6],
  };

  studento_info(studentas.pazymiai, studentas.vardas, studentas.pavarde);
}

// 16.
console.log("\n-- 16 --\n");

{
  function didziausias(masyvas) {
    let didziausias = masyvas[0];
    masyvas.forEach((skaicius) => {
      if (skaicius > didziausias) didziausias = skaicius;
    });
    console.log("Didziausias", didziausias);
  }

  function uzpildyti(masyvas, kiek) {
    for (let i = 0; i < kiek; i++) {
      masyvas.push(Math.floor(Math.random() * 100));
    }
  }

  let skaiciuMasyvai = [[], [], []];
  uzpildyti(skaiciuMasyvai[0], 10);
  uzpildyti(skaiciuMasyvai[1], 12);
  uzpildyti(skaiciuMasyvai[2], 5);

  console.log(skaiciuMasyvai);
  didziausias(skaiciuMasyvai[0]);
  didziausias(skaiciuMasyvai[1]);
  didziausias(skaiciuMasyvai[2]);
}

// 17.
console.log("\n-- 17 --\n");

{
  function sakinys() {
    return "mano sakinys yra sitas.";
  }

  console.log(sakinys());
}

// 18.
console.log("\n-- 18 --\n");

{
  function random_sveikas(max_dydis) {
    if (isNaN(max_dydis)) return Math.floor(Math.random() * 100);
    else return Math.floor(Math.random() * max_dydis);
  }
  console.log(random_sveikas(10));
  console.log(random_sveikas());
  console.log(random_sveikas(10000));
}

// 19.
console.log("\n-- 19 --\n");

{
  function studento_info2(vardas, vidurkis) {
    return `Studentas ${vardas} turi vidurki ${vidurkis}`;
  }

  console.log(studento_info2("Vardenis", 9.3));
  console.log(studento_info2("Kazimeras", 5));
}

// 20.
console.log("\n-- 20 --\n");

{
  function maziausias_dalyklis(skaicius) {
    let i = 2;
    while (true) {
      if (skaicius % i === 0) return i;
      i++;
    }
  }

  for (let i = 10; i <= 30; i++) {
    console.log(i, ";", maziausias_dalyklis(i));
  }
}

// 21.
console.log("\n-- 21 --\n");

{
  function ar_pirminis(skaicius) {
    let i = 2;

    while (true) {
      if (skaicius % i === 0 && skaicius != i) return false;
      if (i === skaicius) return true;
      i++;
    }
  }

  for (let i = 2; i <= 15; i++) {
    console.log(i, ar_pirminis(i));
  }
}

// 22.
console.log("\n-- 22 --\n");

{
  function suma_is_dvieju(skaiciai) {
    console.log(skaiciai[0], "+", skaiciai[1], "=", skaiciai[0] + skaiciai[1]);
  }
  function suma_is_triju(skaiciai) {
    console.log(
      skaiciai[0],
      "+",
      skaiciai[1],
      "+",
      skaiciai[2],
      "=",
      skaiciai[0] + skaiciai[1] + skaiciai[2]
    );
  }
  function dalyba(skaiciai) {
    console.log(skaiciai[0], "/", skaiciai[1], "=", skaiciai[0] / skaiciai[1]);
  }

  function sukurti_numerius(kiekis) {
    let a = [];
    for (let i = 0; i < kiekis; i++) {
      a.push(random_sveikas(10));
    }
    return a;
  }

  function isvedimas() {
    dalyba(sukurti_numerius(2));
    suma_is_dvieju(sukurti_numerius(2));
    suma_is_triju(sukurti_numerius(3));
  }
  isvedimas();
}

// 23.
console.log("\n-- 23 --\n");

{
  function visu_suma(skaiciai) {
    return skaiciai.reduce((a, b) => a + b);
  }

  let skaiciai1 = sukurti_numerius(3);
  let skaiciai2 = sukurti_numerius(3);

  console.log("Masyvai:\n", skaiciai1, skaiciai2);
  console.log(visu_suma(skaiciai1));
  console.log(visu_suma(skaiciai2));
}

// 24.
console.log("\n-- 24 --\n");

{
  function ilgiausias_zodis(zodziai) {
    let ilgiausias = zodziai[0];

    zodziai.forEach((zodis) => {
      if (zodis.length > ilgiausias.length) ilgiausias = zodis;
    });

    return ilgiausias;
  }

  let zodziai = [
    "sd",
    "afdsgdf",
    "pasikiskekopusteliaudamiesi",
    "ilgas",
    "trumpas",
  ];
  console.log(ilgiausias_zodis(zodziai), ilgiausias_zodis(zodziai).length);
}

// 25.
console.log("\n-- 25 --\n");

{
  function visi_teigiami(pazymiai) {
    for (const pazymys of pazymiai) {
      if (pazymys < 5) return false;
    }
    return true;
  }

  function atsakimas(masyvas) {
    console.log(masyvas);
    if (visi_teigiami(masyvas))
      console.log("Visi studento paymiai yra teigiami.");
    else console.log("Studentas turi bnt viena neigiama pazymi.");
  }

  let pazymiai = [[], []];
  pazymiai[0] = sukurti_numerius(10);
  pazymiai[1] = sukurti_numerius(10);

  atsakimas(pazymiai[0]);
  atsakimas(pazymiai[1]);
}
