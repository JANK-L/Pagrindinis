window.addEventListener("DOMContentLoaded", () => renderPosts());

const container = document.querySelector(".information");

const renderPosts = async (term) => {
  if (!term) return;
  let uri =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=0aa8679f7f4cfb9af5b36c2935c1a05d";
  uri += `&q=${term}`;

  const res = await fetch(uri);
  const data = await res.json();
  console.log(data);
  let template = "";
  container.innerHTML = template;

  //tikrąją temperatūrą, debesuotumą, drėgnumą ir vėjo greitį.
  let name = data.name;
  let temp = String(data.main.temp) + " &deg;C";
  let weather = data.weather[0].description;
  let humidity = data.main.humidity + " %";
  let wind = data.wind.speed + " m/s";

  template = `
  <h2>${name}</h2>
  <p>Temperatūra: ${temp}</p>
  <p>${weather} </p>
  <p>Oro drėgnis: ${humidity} </p>
  <p>Vėjo greitis: ${wind}</p>`;

  container.innerHTML = template;
  setBackground(name);
};

const searchForm = document.querySelector(".search");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  renderPosts(searchForm.term.value.trim());
});

function setBackground(name) {
  let backgroundImg = document.body;
  if (
    name === "Vilnius" ||
    name === "Barcelona" ||
    name === "Panevezys" ||
    name === "Klaipėda" ||
    name === "New York" ||
    name === "Sydney"
  ) {
    name = name.split(" ").join("");

    backgroundImg.style.backgroundImage = `url('images/${name}.jpg')`;
  } else backgroundImg.style.backgroundImage = `url('images/random.jpg')`;
}
