let tekstoLaukas = document.getElementById("tekstas");

let isvalytiButton = document.querySelector("#išvalyti");

let klaida = document.querySelector(".klaida");

let zodziaiDiv = document.querySelector(".zodziai");
let zodziai = document.querySelector(".zodziai .kiekis");

let simboliaiDiv = document.querySelector(".simboliai ");
let simboliai = document.querySelector(".simboliai .kiekis");

document.querySelector("#Analizuoti").addEventListener("click", analizuoti);
isvalytiButton.addEventListener("click", išvalyti);
tekstoLaukas.addEventListener("input", rodyti);

function analizuoti() {
  let newTekstas = tekstoLaukas.value.trim();

  if (newTekstas === "") {
    zodziaiDiv.classList.add("slepti");
    simboliaiDiv.classList.add("slepti");
    klaida.classList.remove("slepti");
    isvalytiButton.classList.add("slepti");
  } else {
    zodziai.textContent = zodziu_kiekis(newTekstas);
    zodziaiDiv.classList.remove("slepti");

    simboliai.textContent = simboliu_kiekis(newTekstas);
    simboliaiDiv.classList.remove("slepti");

    klaida.classList.add("slepti");
    isvalytiButton.classList.remove("slepti");
  }
}
function išvalyti() {
  tekstoLaukas.value = "";
  zodziaiDiv.classList.add("slepti");
  simboliaiDiv.classList.add("slepti");
  klaida.classList.add("slepti");
  isvalytiButton.classList.add("slepti");
}

function zodziu_kiekis(tekstas) {
  let kiekis = tekstas.split(" ");
  return kiekis.length;
}
function simboliu_kiekis(tekstas) {
  let kiekis = tekstas.split("");
  return kiekis.length;
}

function rodyti() {
  if (tekstoLaukas.value === "") {
    isvalytiButton.classList.add("slepti");
  } else isvalytiButton.classList.remove("slepti");
}
