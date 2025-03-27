// 5. Parašykite programą, kuri konvertuos termometro
// duomenis iš Farenheito į Celsijų, ir atvirkščiai.

let farenheitas;
let celcijus;
let temperatura;

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
  console.log("Norint išjungti įveskite betką.");
  let pasirinkimas = await uzklausa(
    "Pasirinkite pradinę temperaturą C - Celcijus arba F - Farenheitas:"
  );
  if (pasirinkimas.toLowerCase() === "c") {
    celcijus = await uzklausa("Celcijaus temperatura: ");
    console.log("Farenheito temperatura: ", (celcijus * 9) / 5 + 32);
  } else if (pasirinkimas.toLowerCase() === "f") {
    farenheitas = await uzklausa("Farenheito temperatura: ");
    console.log("Celcijaus temperatura: ", ((farenheitas - 32) * 5) / 9);
  }
  rl.close();
};

main();
