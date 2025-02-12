function ar_lyginis(x) {
  if (x % 2 == 0) {
    newP.style.backgroundColor = "green";
    newP.textContent = `Skaičius ${x} yra lyginis!`;
  } else {
    newP.style.backgroundColor = "red";
    newP.textContent = `Skaičius ${x} yra nelyginis!`;
  }
}

function atsakymas() {
  let skaicius = document.getElementById("skaicius").value;

  ar_lyginis(skaicius);
  newP.style.color = "white";
  document.body.appendChild(newP);
}

let newP = document.createElement("p");

document.querySelector("button").addEventListener("click", atsakymas);
