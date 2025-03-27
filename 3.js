// 3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
// mass index), kai yra žinomas žmogaus ūgis ir svoris.

// BMI = mase / aukstis^2

let aukstis;
let svoris;
let BMI;

function skaiciutiBMI() {
  return Number((svoris / aukstis ** 2).toFixed(2));
}

BMI = skaiciutiBMI();

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const uzklausa = (klausimas) => {
  return new Promise((resolve) => {
    rl.question(klausimas, (atsakimas) => {
      resolve(atsakimas);
    });
  });
};

const main = async () => {
  aukstis = await uzklausa("Žmogaus ūgis (m): ");
  svoris = await uzklausa("Žmogaus svoris (kg): ");

  rl.close();

  BMI = skaiciutiBMI();

  console.log("BMI (kg/m^2):", BMI);
};

main();
