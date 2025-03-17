const getData = async (url) => {
  const response = await fetch(url);
  if (response.status === 200) {
    return response.json();
  } else {
    throw "Ivyko klaida";
  }
};

// 1

function pirmaFunckija(callback) {
  setTimeout(callback(), 20000);
}

pirmaFunckija(() => {
  console.log("praejo laikas");
});

// 2

function antraFunkcija(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve({ message: "viskas ok", data });
      } else if (request.readyState === 4) {
        reject("viskas blogai");
      }
    });

    request.open("GET", url);
    request.send();
  });
}

antraFunkcija("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => {
    console.log(result.message, result.data);
  })
  .catch((data) => {
    console.log(data);
  });

// 3

//let skaiciu_masyvas = [34, 7, 3, 21, 2, 5, 75, 75, 53, 2, 42, 45];

function funckija_1(masyvas, callback) {
  for (let i = 0; i < masyvas.length; i++) {
    callback(masyvas[i]);
  }
}

function funckija_2(skaicius) {
  if (skaicius % 2 === 0) console.log(`${skaicius} yra  lyginis`);
  else console.log(`${skaicius} yra  nelyginis`);
}

let skaiciu_masyvas = fetch("./skaiciai.json")
  .then((res) => res.json())
  .then((res) => funckija_1(res, funckija_2));

// 4

let zodziu_masyvas = [
  "asfasfas",
  "asd",
  "sd",
  "sdfdsfdsfsdfdsfds",
  "ss",
  "sdf",
  "sdfdfd",
  "sdfsdfsdf",
];

function patikrinkZodzioIlgi(masyvas, callback) {
  for (let i = 0; i < masyvas.length; i++) {
    callback(masyvas[i]);
  }
}

function koksIlgis(zodis) {
  console.log(zodis.length);
}
patikrinkZodzioIlgi(zodziu_masyvas, koksIlgis);

// 5{

let objektu_masyvas = [
  { rida: 200000, marke: "Volvo", kaina: 3000 },
  { rida: 100000, marke: "Ford", kaina: 17000 },
  { rida: 500000, marke: "BMW", kaina: 300 },
];

function funckija_5(masyvas, callback) {
  for (let i = 0; i < masyvas.length; i++) {
    callback(masyvas[i]);
  }
}

function callback5(objektas) {
  console.log({ marke: objektas.marke, kaina: objektas.kaina });
}

funckija_5(objektu_masyvas, callback5);

// 6

function UserStatus(isUserLogedIn) {
  return new Promise((resolve, reject) => {
    if (isUserLogedIn === true) {
      resolve("Prisijunges");
    } else reject("NEprisijunges");
  });
}

UserStatus(false)
  .then((info) => {
    console.log(info);
  })
  .catch((info) => {
    console.log(info);
  });

// 7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje
// padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu
// atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18,
// jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu
// atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau
// nei 18". Iškvieskite šią funkciją naudojantis then ir catch.

async function patikra(age) {
  if (typeof age != "number") {
    throw new Error("Neskaicius");
  }
  if (age > 18) {
    return "vartotojas gali laikyti vairuotojo egzaminą";
  } else throw new Error("Jūsų amžius turi būti daugiau nei 18");
}

patikra(4)
  .then((info) => console.log(info))
  .catch((err) => console.log(err));
