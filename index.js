let korteles = document.querySelectorAll(".kortele");

let tekstas = document.querySelector("p");

let reiksme = document.querySelector(".reiksme");
rezultatas = 0;

let klases = ["pirmas", "antras", "trecias", "ketvirtas", "penktas", "sestas"];

let korteles_info = [];

let pasirinkti = [];
let pasirinktu_kiekis = 0;

function supildyti_korteliu_info() {
  let numeriai = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

  while (numeriai.length != 0) {
    let index = Math.floor(Math.random() * numeriai.length);

    korteles_info.push({
      numeris: numeriai[index],
      statusas: "nepasirinktas",
      klase: klases[numeriai[index] - 1],
    });
    numeriai.splice(index, 1);
  }
}

function prideti_klase() {
  for (let index = 0; index < korteles.length; index++) {
    korteles[index].classList.add(korteles_info[index].klase);
  }
}

supildyti_korteliu_info();
prideti_klase();

korteles.forEach((kortele, index) => {
  kortele.addEventListener("click", () => {
    tikrinimas(kortele, index);
  });
});

function tikrinimas(kortele, index) {
  tekstas.innerText = "";

  if (korteles_info[index].statusas === "nepasirinktas") {
    korteles_info[index].statusas = "pasirinktas";
    kortele.classList.add("pasirinktas");

    if (pasirinkti.length === 2) {
      if (korteles_info[pasirinkti[0]].statusas === "pasirinktas") {
        korteles_info[pasirinkti[0]].statusas = "nepasirinktas";
        korteles[pasirinkti[0]].classList.remove("pasirinktas");
      }
      if (korteles_info[pasirinkti[1]].statusas === "pasirinktas") {
        korteles_info[pasirinkti[1]].statusas = "nepasirinktas";
        korteles[pasirinkti[1]].classList.remove("pasirinktas");
      }
      pasirinkti = [];
    }

    pasirinkti.push(index);

    if (pasirinkti.length === 2) {
      if (
        korteles_info[pasirinkti[0]].numeris ===
        korteles_info[pasirinkti[1]].numeris
      ) {
        atspejo(pasirinkti[0], pasirinkti[1]);
      } else {
        console.log(rezultatas);
        tekstas.innerText = "Neatspejote!";
      }
    }

    slepti();
  }
}

function atspejo(pirmas, antras) {
  korteles_info[pirmas].statusas = "atspetas";
  korteles_info[antras].statusas = "atspetas";
  rezultatas += 1;

  reiksme.innerText = rezultatas;
  tekstas.innerText = "Atspejote!";

  if (ar_laimejo()) {
    tekstas.innerText = "Laimejote!";
  }
}

function ar_laimejo() {
  if (rezultatas === 6) return true;
  return false;
}

function slepti() {
  korteles_info.forEach((kortele, index) => {
    if (kortele.statusas === "atspetas")
      setTimeout(() => {
        korteles[index].classList.remove("pasirinktas");
        korteles[index].classList.add("atspetas");
      }, 500);
  });
}
