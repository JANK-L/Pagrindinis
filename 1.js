// 1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
// Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
// Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
// doleriais.

let eurai = Math.floor(Math.random() * 1000) + 1;
let doleriai;
let valiutosKursas = 1.08; //1 euras = 1.08 doleris

function valiutosKeitimas(kursas, pradineValiuta) {
  return Number((pradineValiuta * kursas).toFixed(2));
}

doleriai = valiutosKeitimas(valiutosKursas, eurai);

console.log("Eurai:", eurai);
console.log("1 Euras =", valiutosKursas, "Dolorio");
console.log("Doleriai:", doleriai);
