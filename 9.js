// Parašykite kodą, kuris apjungia masyvo duomenis į vieną
// tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
// Tomas,Dainius,Paulius,Jonas
// Tomas+Dainius+Paulius+Jonas

let masyvas = ["Tomas", "Dainius", "Paulius", "Jonas"];

let apjunktasMasyvas1 = masyvas.join(",");
let apjunktasMasyvas2 = masyvas.join("+");

console.log(apjunktasMasyvas1);
console.log(apjunktasMasyvas2);
