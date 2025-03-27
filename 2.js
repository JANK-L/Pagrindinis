// 2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
// Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
// Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
// eurais.

let doleriai = Math.floor(Math.random() * 1000) + 1;
let eurai;
let valiutosKursas = 0.93; //1 doleris = 0.93 euro

function valiutosKeitimas(kursas, pradineValiuta) {
  return Number((pradineValiuta * kursas).toFixed(2));
}

eurai = valiutosKeitimas(valiutosKursas, doleriai);

console.log("Doleriai:", doleriai);
console.log("1 Doloris =", valiutosKursas, "euro");
console.log("Eurai:", eurai);
