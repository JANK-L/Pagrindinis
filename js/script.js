// 07

// 1/2

// 1.
/*
let kintamasis = 213;

switch (kintamasis) {
  case 1:
    console.log("Vartotojas laimejo vandeni");
    break;
  case 2:
    console.log("Vartotojas laimejo limonada");
    break;
  case 3:
    console.log("Vartotojas laimejo arbata");
    break;
  case 4:
    console.log("Vartotojas laimejo kava");
    break;
  default:
    console.log("klaida");
}

// 2/2

// 2.

let a = 4;
let b = 10;
let c = 20;

switch (a) {
  case 1:
    console.log(a + b + c);
    break;
  case 2:
    console.log(b * c);
    break;
  case 3:
    console.log(a * a);
    break;
  default:
    console.log("klaida");
}

// 3.

let klaidosKodas = "not_fasdound";

switch (klaidosKodas) {
  case "unavailable":
    console.log("File is unavailable. Grant acces to drive.");
    break;
  case "not_found":
    console.log("File is not found. Searching from root directory.");
    break;
  case "empty":
    console.log("File is empty. Populating information.");
  default:
    console.log("Unknow error. Canceling process.");
}
*/

// Papildomas

/*
let menesis = 10;

switch (menesis) {
  case 12:
  case 1:
  case 2:
    console.log("Ziema");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Pavasaris");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Vasara");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Ruduo");
    break;
  default:
    console.log("Tokio menesio nera");
}
*/

// 08.

// 1/2

// 1.
/*
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 2.

for (let i = 0; i <= 15; i++) {
  if (i % 2 == 1) console.log(i);
}

// 3.

for (let i = 1; i <= 20; i += 3) {
  console.log("[" + i + "]");
}

// 4.

for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0) console.log(i);
}
*/

// 2/2

/*
// 5.

let pradazia = 3;
let pabaiga = 33;

if (pradazia < pabaiga)
  for (let i = pradazia; i <= pabaiga; i++) {
    console.log(i, i * i);
  }

// 6.

let pradazia2 = 3;
let pabaiga2 = 33;
if (pradazia < pabaiga)
  for (let i = pradazia; i <= pabaiga; i++) {
    if (i % 2 != 0 || i % 8 == 0) console.log(i);
  }

// 7.

let x = 5;
let y = 5;
let answer = 0;

for (let i = 0; i < y; i++) {
  answer += x;
}
console.log(answer);
*/

// 1/3
/*
// 8.
let x = 0;
for (let i = 1; i < 100; i++) {
  x += i;
}
console.log(x);

// 9.
let y = 0;
for (let i = 20; i < 50; i++) {
  if (i % 2 == 0) y += i;
}
console.log(y);

// 10.
let z = 0;
for (let i = 30; i < 60; i++) {
  if (i % 2 != 0) z += i;
}
console.log(z);

// 11.

let ans = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) ans += i;
}
console.log(ans);
*/
// 2/3

// 12.
/*
for (let i = 1; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else console.log(i);
}

// 3/3

// 13.

let a = 1;
let b = 1;
let c;
console.log(a, "\n" + b);

for (let i = 2; i < 102; i++) {
  let c = a + b;
  a = b;
  b = c;
  console.log(c);
}
*/

// 1/2

// 1.
/*
let y = 1;

while (y < 20) {
  console.log(y);
  y++;
}

// 2.

let x = 1;

while (x < 50) {
  if (x % 2 == 0) {
    console.log(x, "Lyginis");
  } else {
    console.log(x, "Nelyginis");
  }
  x++;
}

// 3.

let a = 25;

while (a < 50) {
  if (a % 3 == 0) {
    console.log(`skaicius ${a} dalinasi is 3`);
    a++;
    continue;
  }
  console.log(a);
  a++;
}

// 4.

let b = 1;

while (b % 3 != 0 || b % 5 != 0) {
  console.log(b);
  b++;
}

// 5.

let kint1 = 1;
let suma = 0;

while (kint1 < 100) {
  if (kint1 % 2 == 0) {
    suma += kint1;
  }
  kint1++;
}
console.log("suma:", suma);
*/
// 2/2

// 6.
/*
let skaicius = 1;

while (skaicius < 5) {
  console.log(skaicius, skaicius ** 2);
  skaicius++;
}

// 7.
let rand = Math.ceil(Math.random() * 10);

while (rand > 0) {
  console.log(Math.ceil(Math.random() * 10));
  rand--;
}

// 8.

let rand2 = Math.ceil(Math.random() * 10);
suma = 0;

while (rand2 > 0) {
  let i = Math.ceil(Math.random() * 10);
  suma += i;
  console.log(i);
  rand2--;
}

console.log("suma:", suma);
*/
