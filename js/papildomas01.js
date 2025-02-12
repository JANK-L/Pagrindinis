// 01.
/*
let vardas = "vardenis";
let pavarde = "pavardenis";
let gimimoMetai = 1999;
let dabartiniaiMetai = 2025;

console.log(
  `Aš esu ${vardas} ${pavarde}. Man yra ${
    dabartiniaiMetai - gimimoMetai
  } metai(-ų)`
);

// 02.

let a = Math.floor(Math.random() * 5);
let b = Math.floor(Math.random() * 5);

if (a > b) {
  console.log((a / b).toFixed(2));
} else {
  console.log((b / a).toFixed(2));
}

// 03.

let kint1 = Math.floor(Math.random() * 25);
let kint2 = Math.floor(Math.random() * 25);
let kint3 = Math.floor(Math.random() * 25);

if ((kint1 > kint2 && kint2 > kint3) || (kint1 < kint2 && kint2 < kint3)) {
  console.log(kint2);
} else if (
  (kint2 > kint1 && kint1 > kint3) ||
  (kint2 < kint1 && kint1 < kint3)
) {
  console.log(kint1);
} else if (
  (kint2 > kint3 && kint3 > kint1) ||
  (kint2 < kint3 && kint3 < kint1)
) {
  console.log(kint3);
} else {
  console.log("nera vidutinio");
}

console.log(kint1, kint2, kint3);

// 04.

let kr1 = Math.floor(Math.random() * 10) + 1;
let kr2 = Math.floor(Math.random() * 10) + 1;
let kr3 = Math.floor(Math.random() * 10) + 1;

if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr3 + kr2 > kr1) {
  console.log(`galima padaryti trikampi (${kr1} ${kr2} ${kr3})`);
} else {
  console.log(`Negalima padaryti trikampi (${kr1} ${kr2} ${kr3})`);
}

// 05.

let k1 = Math.floor(Math.random() * 3);
let k2 = Math.floor(Math.random() * 3);
let k3 = Math.floor(Math.random() * 3);
let k4 = Math.floor(Math.random() * 3);

let nulis = 0;
let vienas = 0;
let du = 0;

if (k1 == 0) {
  nulis++;
} else if (k1 == 1) {
  vienas++;
} else du++;

if (k2 == 0) {
  nulis++;
} else if (k2 == 1) {
  vienas++;
} else du++;

if (k3 == 0) {
  nulis++;
} else if (k3 == 1) {
  vienas++;
} else du++;

if (k4 == 0) {
  nulis++;
} else if (k4 == 1) {
  vienas++;
} else du++;

console.log("kintamieji:", k1, k2, k3, k4);
console.log("Nuliai: ", nulis);
console.log("Vienatai:", vienas);
console.log("dvejatai:", du);

// 06.

let ran1 = Math.floor(Math.random() * 21) - 10;
let ran2 = Math.floor(Math.random() * 21) - 10;
let ran3 = Math.floor(Math.random() * 21) - 10;

if (ran1 == 0) {
  console.log("(" + ran1 + ")");
} else if (ran1 < 0) {
  console.log("[" + ran1 + "]");
} else console.log("{" + ran1 + "}");

if (ran2 == 0) {
  console.log("(" + ran2 + ")");
} else if (ran2 < 0) {
  console.log("[" + ran2 + "]");
} else console.log("{" + ran2 + "}");

if (ran3 == 0) {
  console.log("(" + ran3 + ")");
} else if (ran3 < 0) {
  console.log("[" + ran3 + "]");
} else console.log("{" + ran3 + "}");

// 07.

let perka = Math.floor(Math.random() * 2995) + 5;
let kaina = 1;

if (perka <= 1000) {
  console.log("perka:", perka, "kaina:", kaina * perka, "Eur");
} else if (perka <= 2000) {
  console.log("perka:", perka, "kaina:", kaina * perka * 0.97, "Eur");
} else {
  console.log("perka:", perka, "kaina:", kaina * perka * 0.96, "Eur");
}

// 08.

let rand1 = Math.floor(Math.random() * 100);
let rand2 = Math.floor(Math.random() * 100);
let rand3 = Math.floor(Math.random() * 100);

let kiekis = 3;
let vid = (rand1 + rand2 + rand3) / kiekis;
console.log("kintamieji:", rand1, rand2, rand3);
console.log("visu 3 vidurkis:", Math.round(vid));

if (rand1 > 90 || rand1 < 10) {
  kiekis--;
  rand1 = 0;
}
if (rand2 > 90 || rand2 < 10) {
  kiekis--;
  rand2 = 0;
}
if (rand3 > 90 || rand3 < 10) {
  kiekis--;
  rand3 = 0;
}
vid = (rand1 + rand2 + rand3) / kiekis;
console.log("vidurkis skaiciu tarp [10-90]:", Math.round(vid));
*/
// 09.
/*
let val = Math.floor(Math.random() * 24);
let min = Math.floor(Math.random() * 60);
let sec = Math.floor(Math.random() * 60);

console.log(val, ":", min, ":", sec);

let extra = Math.floor(Math.random() * 300);
console.log("papildomas laikas:", extra);

extra += sec;
if (extra > 59) {
  sec = extra % 60;
  extra -= sec;
  extra /= 60;
} else {
  sec = extra;
  extra = 0;
}

extra += min;
if (extra > 59) {
  min = extra % 60;
  extra -= min;
  extra /= 60;
} else {
  min = extra;
  extra = 0;
}

val += extra;
if (val > 23) {
  val = val % 24;
}

console.log(val, ":", min, ":", sec);
*/
// 10.

let rand1 = Math.floor(Math.random() * 9000) + 1000;
let rand2 = Math.floor(Math.random() * 9000) + 1000;
let rand3 = Math.floor(Math.random() * 9000) + 1000;
let rand4 = Math.floor(Math.random() * 9000) + 1000;
let rand5 = Math.floor(Math.random() * 9000) + 1000;
let rand6 = Math.floor(Math.random() * 9000) + 1000;

console.log(rand1, rand2, rand3, rand4, rand5, rand6);

if (rand1 > rand2) {
  let x = rand2;
  rand2 = rand1;
  rand1 = x;
}
if (rand1 > rand3) {
  let x = rand3;
  rand3 = rand1;
  rand1 = x;
}
if (rand1 > rand4) {
  let x = rand4;
  rand4 = rand1;
  rand1 = x;
}
if (rand1 > rand5) {
  let x = rand5;
  rand5 = rand1;
  rand1 = x;
}
if (rand1 > rand6) {
  let x = rand6;
  rand6 = rand1;
  rand1 = x;
}

if (rand2 > rand3) {
  let x = rand3;
  rand3 = rand2;
  rand2 = x;
}
if (rand2 > rand4) {
  let x = rand4;
  rand4 = rand2;
  rand2 = x;
}
if (rand2 > rand5) {
  let x = rand5;
  rand5 = rand2;
  rand2 = x;
}
if (rand2 > rand6) {
  let x = rand6;
  rand6 = rand2;
  rand2 = x;
}

if (rand3 > rand4) {
  let x = rand4;
  rand4 = rand3;
  rand3 = x;
}
if (rand3 > rand5) {
  let x = rand5;
  rand5 = rand3;
  rand3 = x;
}
if (rand3 > rand6) {
  let x = rand6;
  rand6 = rand3;
  rand3 = x;
}

if (rand4 > rand5) {
  let x = rand5;
  rand5 = rand4;
  rand4 = x;
}
if (rand4 > rand6) {
  let x = rand6;
  rand6 = rand4;
  rand4 = x;
}

if (rand5 > rand6) {
  let x = rand6;
  rand6 = rand5;
  rand5 = x;
}
let ans = `${rand1} ${rand2} ${rand3} ${rand4} ${rand5} ${rand6}`;
console.log(ans);
