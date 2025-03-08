//pirmas div

document.getElementById("pirma-antraste").innerHTML =
  "Naujas pirmos antrastes tekstas";
document.getElementById("pirmas-paragrafas").innerHTML =
  "Naujas pakeistas pirmo paragrafo tekstas";

//antras div

console.log("ANTRAS DIV");

let tekstasIsParagrafo = document.getElementById("paragrafo-tekstas").innerHTML;
console.log("paimtas su innerHTML tekstas:", tekstasIsParagrafo);

let tekstasIsParagrafo2 =
  document.getElementById("paragrafo-tekstas").innerText;
console.log("paimtas su innerText tekstas:", tekstasIsParagrafo2);

console.log();

//trecias div

console.log("TRECIAS DIV");

console.log("innerHTML:", document.getElementById("trecias").innerHTML);
console.log("innerText:", document.getElementById("trecias").innerText);

console.log();

//septintas div

function pakeisti() {
  document.getElementById("septinto-tekstas").innerHTML = "naujas tekstas";
}

//astuntas div
function pakeisti2(elementas, tekstas) {
  document.getElementById(elementas).innerHTML = tekstas;
}

//devintas div

function pakeisti3(elementas, tekstas) {
  document.getElementById(elementas).innerHTML = tekstas;
}

function kitaSpalva(elementas, spalva) {
  document.getElementById(elementas).style.color = spalva;
}

//desimtas div

let pirmas = 8;
let antras = 9;

let suma = pirmas + antras;
let skirtumas = pirmas - antras;
let sandauga = pirmas * antras;
let dalmuo = pirmas / antras;

document.getElementById("suma").innerHTML = pirmas + "+" + antras + "=" + suma;
document.getElementById("skirtumas").innerHTML =
  pirmas + "-" + antras + "=" + skirtumas;
document.getElementById("sandauga").innerHTML =
  pirmas + "*" + antras + "=" + sandauga;
document.getElementById("dalmuo").innerHTML =
  pirmas + "/" + antras + "=" + dalmuo;

//vienuoliktas div
pirmas = 7;
antras = 5;

let isvedimui = `<p>${pirmas} + ${antras} = ${pirmas + antras}</p>
<p>${pirmas} - ${antras} = ${pirmas - antras}</p>
<p>${pirmas} * ${antras} = ${pirmas * antras}</p>
<p>${pirmas} / ${antras} = ${pirmas / antras}</p>`;

document.getElementById("vienuolikto-turinys").innerHTML = isvedimui;

//dvyliktas div

function keistiSpalva(elementas, spalva) {
  document.getElementById(elementas).style.color = spalva;
}

function keistiDydi(elementas, dydis) {
  document.getElementById(elementas).style.fontSize = dydis + "px";
}

//tryliktas div

let divKeitimui = document.getElementById("div-keitimui");

let plocioSlider = document.getElementById("plocio-slider");
let aukscioSlider = document.getElementById("aukscio-slider");

plocioSlider.oninput = function () {
  divKeitimui.style.width = this.value + "px";
};

aukscioSlider.oninput = function () {
  divKeitimui.style.height = this.value + "px";
};

let spalvosPasirinkimas = document.getElementById("spalvos-pasirinkimas");

spalvosPasirinkimas.oninput = function () {
  divKeitimui.style.backgroundColor = this.value;
};

let tekstoSpalvosPasirinkimas = document.getElementById(
  "teksto-spalvos-pasirinkimas"
);
tekstoSpalvosPasirinkimas.oninput = function () {
  divKeitimui.style.color = this.value;
};

let tekstasDivui = document.getElementById("tekstas-divui");

tekstasDivui.oninput = function () {
  divKeitimui.innerHTML = this.value;
};

//keturioliktas div

function pridetiZodi(elementas, zodis) {
  document.getElementById(elementas).value += zodis + " ";
}

//penkioliktas div
let penkioliktoTekstas = document.getElementById("penkiolikto-tekstas");

function zodziuKiekis() {
  let tekstas = penkioliktoTekstas.value;
  let zodziai = tekstas.trim().split(" ");
  document.getElementById(
    "penkiolikto-atsakymai"
  ).innerHTML = `<p>Zodziu kiekis: ${zodziai.length}</p>`;
}

function ilgiausiasZodis() {
  let tekstas = penkioliktoTekstas.value;
  let zodziai = tekstas.trim().split(" ");

  let ilgiausias = "";

  for (let zodis of zodziai) {
    if (zodis.length > ilgiausias.length) {
      ilgiausias = zodis;
    }
  }

  document.getElementById(
    "penkiolikto-atsakymai"
  ).innerHTML = `<p>Ilgiausias zodis: ${ilgiausias}</p>
  <p>Jo ilgis: ${ilgiausias.length} simboliu</p>`;
}

function trumpiausiasZodis() {
  let tekstas = penkioliktoTekstas.value;
  let zodziai = tekstas.trim().split(" ");

  let trumpiausias = zodziai[0];

  for (let zodis of zodziai) {
    if (zodis.length < trumpiausias.length && zodis.length > 0) {
      trumpiausias = zodis;
    }
  }

  document.getElementById(
    "penkiolikto-atsakymai"
  ).innerHTML = `<p>Trumpiausias zodis: ${trumpiausias}</p>
    <p>Jo ilgis: ${trumpiausias.length} simboliu</p>`;
}

//sesioliktas div

let pirmoSkirtukoTurinys = document.getElementById("pirmas-skirtukas");
let antroSkirtukoTurinys = document.getElementById("antras-skirtukas");

function pirmasSkirtukas() {
  pirmoSkirtukoTurinys.style.display = "block";
  antroSkirtukoTurinys.style.display = "none";
}

function antrasSkirtukas() {
  pirmoSkirtukoTurinys.style.display = "none";
  antroSkirtukoTurinys.style.display = "block";
}

//septinioliktas div

let perjungtiMygtukas = document.getElementById("perjungti-mygtukas");
let perjungtiTekstas = document.getElementById("perjungti-tekstas");

perjungtiMygtukas.onclick = function () {
  if (this.innerText == "Rodyti") {
    this.innerText = "Nerodyti";
    perjungtiTekstas.style.display = "block";
  } else {
    this.innerText = "Rodyti";
    perjungtiTekstas.style.display = "none";
  }
};

//astuonioliktas div

let kitasPerjungtiekstas = document.getElementById("kitas-perjungti-tekstas");

document.getElementById("kitas-perjungti-mygtukas").onclick = function () {
  if (kitasPerjungtiekstas.style.display == "block") {
    this.innerText = "Rodyti";
    kitasPerjungtiekstas.style.display = "none";
  } else {
    this.innerText = "Nerodyti";
    kitasPerjungtiekstas.style.display = "block";
  }
};

//devynioliktas div

document.getElementById("devyniolikto-tekstas").onclick = function () {
  this.style.display = "none";
};

//papildomas 3

let blokeliai = document.querySelectorAll(".blokelis");

blokeliai.forEach((blokelis) => {
  blokelis.onclick = function () {
    if (this.innerText.trim().length > 100) this.style.color = "green";
    else this.style.color = "red";
  };
});

//papildomas 4

let pirmasSkaicius = document.getElementById("pirmas-skaicius");
let antrasSkaicius = document.getElementById("antras-skaicius");

let veiksmai = document.getElementById("aritmetiniai-veiksmai");

function aritmetiniaiVeiksmai() {
  veiksmai.innerHTML = `<p>${pirmasSkaicius.value} + ${
    antrasSkaicius.value
  } = ${Number(pirmasSkaicius.value) + Number(antrasSkaicius.value)}</p>
<p>${pirmasSkaicius.value} - ${antrasSkaicius.value} = ${
    Number(pirmasSkaicius.value) - Number(antrasSkaicius.value)
  }</p>
<p>${pirmasSkaicius.value} * ${antrasSkaicius.value} = ${
    Number(pirmasSkaicius.value) * Number(antrasSkaicius.value)
  }</p>
<p>${pirmasSkaicius.value} / ${antrasSkaicius.value} = ${
    Number(pirmasSkaicius.value) / Number(antrasSkaicius.value)
  }</p>`;
}

//papildomas 5

let modalas = document.getElementById("modal");

let rodytiModala = document.getElementById("rodyti-modala");
let sleptiModala = document.getElementById("slepti-modala");

rodytiModala.onclick = function () {
  modalas.style.display = "flex";
};
sleptiModala.onclick = function () {
  modalas.style.display = "none";
};
