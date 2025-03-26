let korteles = document.querySelectorAll(".kortele");

let klases = ["pirmas", "antras", "trecias", "ketvirtas", "penktas", "sestas"];

let korteliu_info = [];

let pasirinkti = [];
let pasirinktu_kiekis = 0;

function supildyti_korteliu_info() {
  let numeriai = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

  while (numeriai.length != 0) {
    let index = Math.floor(Math.random() * numeriai.length);

    korteliu_info.push({
      korteles_nr: numeriai[index],
      korteles_statusas: "nepasirinktas",
      korteles_klase: klases[numeriai[index] - 1],
    });
    numeriai.splice(index, 1);
  }

  prideti_klase();
}

function prideti_klase() {
  for (let index = 0; index < korteles.length; index++) {
    korteles[index].classList.add(korteliu_info[index].korteles_klase);
  }
}

supildyti_korteliu_info();

korteles.forEach((kortele, index) => {
  kortele.addEventListener("click", () => {
    if (korteliu_info[index].korteles_statusas != "nepasirinktas") {
      return;
    }

    if (pasirinktu_kiekis === 2) {
      pasirinktu_kiekis = 0;

      pasirinkti.forEach((pasirinktas) => {
        pasirinktas.classList.remove("pasirinktas");
      });

      pasirinkti = [];
    }
    pasirinktu_kiekis++;
    kortele.classList.add("pasirinktas");
    pasirinkti.push(kortele);

    atspejo();
  });
});

function atspejo() {
  if (pasirinkti.length === 2) {
    if (
      pasirinkti[0].classList.toString() === pasirinkti[1].classList.toString()
    ) {
      pasirinkti.forEach((pasirinktas) => {
        pasirinktas.classList.replace("pasirinktas", "atspetas");
      });
    }
  }
}
