let darboValandos = 8;

let kepalaiPerValanda = 7;
let darbuotojuSkaicius = 4;
let kepaloSavikaina = 0.4;
let kepaloPardavimoKainal = 1.99;
let uzsakymuSkaicius = 200;

//1.

let kepalaiPerDiena = kepalaiPerValanda * darbuotojuSkaicius * darboValandos;

console.log("Kepalai iskepti per diena:", kepalaiPerDiena, "\n");

//2.

let visuKepaluSavikaina = kepalaiPerDiena * kepaloSavikaina;
let gautosPajamos = kepalaiPerDiena * kepaloPardavimoKainal;

let pelnas = gautosPajamos - visuKepaluSavikaina;

console.log(`Savikina: ${visuKepaluSavikaina}
Galimos pajamos: ${gautosPajamos}
Galimas pelnas: ${pelnas}\n`);

//3. ir 4.

if (kepalaiPerDiena < uzsakymuSkaicius) {
  let kepaluTrukumas = uzsakymuSkaicius - kepalaiPerDiena;
  console.log("Truksta kepalu iki pilno uzsakymo:", kepaluTrukumas, "\n");
  gautosPajamos = 0;
  pelnas = 0;
  console.log(`Uzsakimas neatliktas.
Gaunamos pajamos: ${gautosPajamos}
Gaunamas pelnas: ${pelnas}\n`);
} else {
  console.log(`Uzsakimo tikslas pasiektas:
Gaunamos pajamos: ${gautosPajamos}
Gaunamas pelnas: ${pelnas}`);
}
