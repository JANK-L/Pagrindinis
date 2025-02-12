function ar_lyginis(x) {
  if (x % 2 != 0 || x === "") {
    newP.style.backgroundColor = "red";
    newP.textContent = `Skaičius ${x} yra nelyginis!`;
  } else {
    newP.style.backgroundColor = "green";
    newP.textContent = `Skaičius ${x} yra lyginis!`;
  }
}

function atsakymas() {
  let skaicius = document.getElementById("skaicius").value;
  console.log(skaicius);
  ar_lyginis(skaicius);
  newP.style.color = "white";
  document.body.appendChild(newP);
}

let newP = document.createElement("p");

document.querySelector("button").addEventListener("click", atsakymas);
