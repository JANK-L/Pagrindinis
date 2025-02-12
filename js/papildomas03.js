/* LENGVESNI */

// 01.
/* 
for (let i = 0; i < 10; i++) {
  console.log("labas");
}
*/

// 02.
/* 
for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/

// 03.
/*
for (let i = 10; i <= 50; i += 2) {
  console.log(i);
}
*/

// 04.
/* 
for (let i = 10; i <= 50; i += 2) {
  if (i % 10 == 0) continue;
  console.log(i);
}
*/

// 05.
/* 

let count = 0;

for (let i = 0; i <= 20; i += 2) {
  if (i % 2 == 0) count++;
}
console.log(`i turėjo porinę reikšmę ${count} kartą(-ų).`);
*/

/* SUNKESNI */

// 01.
/*

let skaiciai = [];
let count = 0;
let ans = "";

for (let i = 0; i < 300; i++) {
  skaiciai[i] = Math.floor(Math.random() * 300);
}

for (let i = 0; i < skaiciai.length; i++) {
  if (skaiciai[i] > 150) {
    count++;
    if (skaiciai[i] > 275) {
      ans += `[${skaiciai[i]}] `;
      continue;
    }
  }
  ans += `${skaiciai[i]} `;
}
console.log(ans);
console.log("Didesniu nei 150 skaiciu kiekis:", count);
*/

// 02.
/*
let ans = "";

for (let i = 1; i < 3000; i++) {
  if (i % 77 == 0) {
    if (ans === "") {
      ans += i;
    } else ans += `, ${i}`;
  }
}
console.log(ans);
*/

// 03.
/**/

let krastine1 = 10;
let krastine2 = krastine1;

for (let i = 0; i < krastine1; i++) {
  let eile = "";
  for (let j = 0; j < krastine2; j++) {
    eile += "*";
    if (j != krastine2 - 1) eile += " ";
  }
  console.log(eile);
}
