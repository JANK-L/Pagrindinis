let slider_kiekis = document.getElementById("slider_kiekis");
let pasirinktas_kiekis = document.getElementById("pasirinktas_kiekis");
let receptai = document.querySelectorAll(".receptas");
let ingridientai = document.querySelectorAll(".ingridientu_kiekiai");

const ingridientu_kiekiai = [];
ingridientai.forEach((kiekis) => {
  ingridientu_kiekiai.push(parseInt(kiekis.innerText));
});

slider_kiekis.addEventListener("input", (e) => {
  pasirinktas_kiekis.innerText = slider_kiekis.value;

  pasirinktas_kiekis.style.marginLeft =
    String(
      ((slider_kiekis.value - slider_kiekis.min) /
        (slider_kiekis.max - slider_kiekis.min)) *
        (slider_kiekis.offsetWidth + 1 - parseInt(slider_kiekis.value))
    ) + "px";

  atnaujinti_kiekius(parseInt(slider_kiekis.value));
});

receptai.forEach(function (receptas) {
  receptas.addEventListener("click", function () {
    slepti_visus();

    let visi = document.querySelectorAll(".pasirinktas");

    rodyti_pasirinkta(visi, receptas);
  });
});

function atnaujinti_kiekius(kartu) {
  for (let index = 0; index < ingridientai.length; index++) {
    ingridientai[index].innerText = kartu * ingridientu_kiekiai[index];
  }
}

function slepti_visus() {
  let visi = document.querySelectorAll(".pasirinktas");
  visi.forEach((item) => {
    item.classList.replace("rodyti", "slepti");
  });
}

function rodyti_pasirinkta(visi, pasirinktas) {
  visi.forEach((item) => {
    if (item.id == pasirinktas.id) {
      item.classList.replace("slepti", "rodyti");
    }
  });

  pasirinktas
    .querySelector(".pasirinktas")
    .classList.replace("slepti", "rodyti");
}
