// uzduotis 1

async function getData(url) {
  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    console.log(data.joke);
    return data.joke;
  } catch (e) {
    throw new Error(e);
  }
}

function GautiJuoka() {
  getData("https://icanhazdadjoke.com/")
    .then((joke) => (juokelis.innerText = joke))
    .catch((klaida) => {
      console.log(klaida);
      juokelis.innerText = "Nepavyko";
    });
}

let button = document.querySelector("button");
let juokelis = document.getElementById("Juokelis");

button.addEventListener("click", GautiJuoka);
