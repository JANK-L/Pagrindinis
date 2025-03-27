// 4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
// pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
// dienomis.

let amzius;
let dienos = 365;
let valandos = 24;
let minutes = 60;
let sekundes = 60;

function konvertuotiAmziu(matavimoVienetas) {
  amzius *= matavimoVienetas;
}

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
  amzius = await uzklausa("Žmogaus amžius (metais): ");

  konvertuotiAmziu(dienos);
  console.log("Amžius dienomis:", amzius);
  konvertuotiAmziu(valandos);
  console.log("Amžius valandomis:", amzius);
  konvertuotiAmziu(minutes);
  console.log("Amžius minutemis:", amzius);
  konvertuotiAmziu(sekundes);
  console.log("Amžius sekundemis:", amzius);

  rl.close();
};

main();
