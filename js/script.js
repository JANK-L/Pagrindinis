let lenteles = document.querySelectorAll(".blokas .lentele");

lenteles.forEach((lentele) => {
  lentele.addEventListener("click", () => pasirinktas(lentele));
});

function pasirinktas(elementas) {
  if (elementas.id === "") {
    let aktivus = document.querySelector("#aktivus");

    elementas.id = aktivus.id;
    aktivus.id = "";
  }
}
