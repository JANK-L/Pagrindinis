// 01.
/*
let x = 10;
while (x > 0) {
  console.log(x);
  x--;
}
*/

// 02.
/* 
for (let i = 10; i > 0; i--) {
  console.log(i);
}
*/

// 03.
/* 
let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

while (numMenuo <= kiekMenSpausdinti) {
  numAvys *= 4;
  console.log(`Po ${numMenuo} mėnesio(-ių) bus ${numAvys} avių!`);
  numMenuo++;
}
*/

// 04.
/*
let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

for (let i = numMenuo; i <= kiekMenSpausdinti; i++) {
  numAvys *= 4;
  console.log(`Po ${i} mėnesio(-ių) bus ${numAvys} avių!`);
}
*/

// 05.
/* 
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;

while (currentGen <= 4) {
  totalMW += 62;
  console.log(
    `Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW} MW!`
  );
  currentGen++;
}

for (let i = currentGen; i < totalGen; i++) {
  totalMW += 124;
  console.log(
    `Generatorius #${i} įjungtas, pridėjo 124 MW, viso generuojama ${totalMW} MW!`
  );
}
*/

// 06.
/* 
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;

for (currentGen; currentGen < totalGen; currentGen++) {
  if (currentGen % 2 == 0) {
    if (currentGen > 4) {
      totalMW += 124;
      console.log(
        `Generatorius #${currentGen} įjungtas, pridėjo 124 MW, viso generuojama ${totalMW} MW!`
      );
    } else {
      totalMW += 62;
      console.log(
        `Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW} MW!`
      );
    }
  } else {
    console.log(`Generatorius #${currentGen} išjungtas.`);
  }
}
*/

// 07.
/* 
let num = 10;
while (num > 0) {
  if (num % 2 == 0) console.log(num);

  num--;
}
*/

// 08.
/* */

function maxOf2(a, b) {
  if (a > b) return a;
  return b;
}

console.log(maxOf2(123, 1234));
