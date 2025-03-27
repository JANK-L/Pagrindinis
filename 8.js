// 8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.

let dabartineData = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);

let kaleduData = new Date(new Date().getFullYear(), 11, 25);

let likoDienu = (kaleduData - dabartineData) / (24 * 60 * 60 * 1000);

console.log("Liko dienų iki Kalėdų: ", likoDienu);
