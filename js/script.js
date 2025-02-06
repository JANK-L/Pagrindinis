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
/*
// 1.

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
/*
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
*/

// 2/2

/*
// 2.
let amzius = 40;

if (amzius >= 18) {
  console.log("jūs galite balsuoti");
}

// 3.

let pazimys1 = 6;
let pazimys2 = 1;
let pazimys3 = 10;
let pazimys4 = 3;
let pazimys5 = 9;

let vidurkis = pazimys1 + pazimys2 + pazimys3 + pazimys4 + pazimys5;
vidurkis /= 5;

if (vidurkis >= 5) {
  console.log("vidurkis teigiamas");
}

// 4.

let x = 30;

if (x % 5 === 0) {
  for (let i = 1; i <= 5; i++) {
    console.log(x, "*", i, "=", x * i);
  }
}

if (x % 2 === 0) {
  console.log(x, ";", x * x, ";", x / 2);
}

if (x % 7 !== 0) {
  let y = 7;
  console.log(x + y, ";", x - y, ";", x * y, ";", x / y);
}
*/
// else if

// 1/2
/*
// 5.

let a = -11;
let b = 0;
let c = -1;

if (a > b) {
  console.log("pirmas skaičius didesnis už antrą");
} else if (b > c) {
  console.log("antras skaičius didesnis už trečią");
} else if (c > a) {
  console.log("trečias skaičius didesnis už pirmą");
}
if (a == b) {
  console.log("pirmi du skaičiai yra lygūs");
} else if (b == c) {
  console.log("paskutiniai du skaičiai yra lygūs");
} else if (a == 0) {
  console.log("pirmas skaičius yra lygus 0");
} else if (b < 0) {
  console.log("antras skaičius neigiamas");
} else if (c < 0) {
  console.log("trečias skaičius neigiamas");
}

// 2/2

// 6.

let pazimys = 5;

if (pazimys == 10) {
  console.log("puiku");
} else if (pazimys >= 9 && pazimys < 11) {
  console.log("labai gerai");
} else if (pazimys >= 7 && pazimys < 11) {
  console.log("gerai");
} else if (pazimys >= 5 && pazimys < 11) {
  console.log("patenkinamai");
} else {
  console.log("egzaminas neišlaikytas");
}
*/

// 7.

/*
let g = 3;

if (g % 2 == 0) {
  console.log("lyginis");
} else {
  console.log("nelyginis");
}

// 8.

let y = 98327;

if (y % 7 == 0) {
  console.log("dalinasi iš 7");
} else {
  console.log("nesidalinasi iš 7");
}

// 9.

let failas = "js/dir1/dir2/dir3/dir56/failas.js";

if (failas.endsWith(".js")) {
  console.log("failas yra javascript typo");
} else {
  console.log("failas nėra javascript typo");
}

// 10.

let kintamasis = 5;

if (kintamasis % 2 == 0 || kintamasis % 5 == 0 || kintamasis % 3 == 0) {
  if (kintamasis % 2 == 0) {
    console.log("skaičius yra lyginis");
  }
  if (kintamasis % 5 == 0) {
    console.log("skaičius dalinasi iš 5");
  }
  if (kintamasis % 3 == 0) {
    console.log("skaičius dalinasi iš 3");
  }
} else {
  console.log("KLAIDA!");
}

// 11.

let a = 1;
let b = 2;
let c = -1;

if (a === b || a === c || c >= a || b === c * 2 || a % 3 === 0) {
  if (a === b) {
    console.log("pirmi du skaičiai lygūs");
  }
  if (a === c) {
    console.log("pirmas ir trečias skaičiai lygūs");
  }
  if (c >= a) {
    console.log("trečias skaičius didesnis už pirmą");
  }
  if (b === c * 2) {
    console.log("antras skaičius lygus dvigubai trečio skaičiaus reikšmei");
  }
  if (a % 3 === 0) {
    console.log("pirmas skaičius dalinasi iš 3");
  }
} else {
  console.log("KLAIDA!");
}
*/
/*
// 12.
let a = 3;
let b = 3;
let c = 2;

if (a > b && a > c) {
  console.log("a didziausias");
} else if (b > c && b > a) {
  console.log("b didziausias");
} else if (c > a && c > b) {
  console.log("c didziausias");
} else {
  console.log("Nera vieno didziausio skaiciaus");
}

// 13.

let x = 4;
let y = 2;
let z = 3;

if (x < y && x < z) {
  console.log("x maziausias");
} else if (y < z && y < x) {
  console.log("y maziausias");
} else if (z < x && z < y) {
  console.log("z maziausias");
} else {
  console.log("Nera vieno maziausio skaiciaus");
}

// 14.

let paz1 = 5;
let paz2 = 10;
let paz3 = 9;
let vidurkis = (paz1 + paz2 + paz3) / 3;

if (
  vidurkis < 0 ||
  vidurkis > 10 ||
  paz1 < 0 ||
  paz1 > 10 ||
  paz2 < 0 ||
  paz2 > 10 ||
  paz3 < 0 ||
  paz3 > 10
) {
  console.log("klaida");
} else if (vidurkis > 7) {
  console.log("[8-10)");
} else if (vidurkis > 4) {
  console.log("[5-8)");
} else {
  console.log("<5");
}

// 15.

let j = 20;
let i = 5;
if (j > i || j === 0) {
  console.log("pirmas skaičius yra didesnis už antrąjį arba yra lygus 0;");
}
if (i > j || i === 5) {
  console.log("antras skaičius yra didesnis už pirmąjį arba yra lygus 5;");
}
if (j > i && j === 20) {
  console.log("pirmas skaičius yra didesnis už antrąjį ir yra lygus 20;");
}
if (i > j && i < 100) {
  console.log(
    "antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100;"
  );
}

false;
true;
false;
true;
*/

const figuros = document.querySelectorAll(".figura");

const riba = 200;

console.log(figuros);

figuros.forEach((figura) => {
  let figurosPlotis = figura.clientWidth;
  let figurosAukstis = figura.clientHeight;

  const radius = window.getComputedStyle(figura).borderRadius;

  if (figurosPlotis === figurosAukstis && radius === "0px") {
    if (figurosPlotis >= riba) {
      console.log("didelis kvadratas");
      figura.style.backgroundColor = "red";
    } else {
      console.log("mazas kvadratas");
      figura.style.backgroundColor = "blue";
    }
  } else if (radius >= "50%") {
    figura.style.backgroundColor = "violet";
    console.log("yra apskritimas");
  } else {
    console.log("nera kvadratas ar apskritimas", radius, figura);
  }
});
