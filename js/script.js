let vartotojai = {
  user1: {
    vardas: "Vardenis",
    amzius: 27,
    el_pastas: "vardenis@pastas.el",
  },
  user2: {
    vardas: "Romas",
    amzius: 57,
    el_pastas: "romas@pastas.el",
  },
  user3: {
    vardas: "Kazimeras",
    amzius: 19,
    el_pastas: "kazimeras@pastas.el",
  },
};

let vartotoju_laukas = document.querySelector(".vartotojai");

function sukurti_lauka_vartotojui(user_ID) {
  let element = document.createElement("div");
  element.id = user_ID;
  vartotoju_laukas.appendChild(element);
}

document.querySelector("#rodyti").addEventListener("click", rodyti_vartotojus);
