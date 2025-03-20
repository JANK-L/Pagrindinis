async function fetchMovie(tekstas) {
  console.log("https://api.tvmaze.com/search/shows?q=" + tekstas);
  try {
    const response = await fetch(
      "https://api.tvmaze.com/search/shows?q=" + tekstas,
      {}
    );
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e);
  }
}

function search() {
  let tekstas = document.getElementById("paieskos_tekstas");

  fetchMovie(tekstas.value)
    .then((data) => {
      deleteDiv();
      const moviesContainer = document.createElement("div");
      moviesContainer.className = "movies-container";

      for (const item of data) {
        const title = item.show.name;
        let year;
        if (item.show.premiered != null) {
          year = item.show.premiered.slice(0, -6);
        } else {
          year = "-";
        }
        let imgLink;
        if (item.show.premiered != null) {
          imgLink = item.show.image.medium;
        } else {
          imgLink = "";
        }

        const genres = item.show.genres;
        const summary = item.show.summary;

        const movieDiv = document.createElement("div");
        movieDiv.classname = "movie";
        movieDiv.innerHTML = `
          <img src="${imgLink}" alt="${title}">
          <h3>${title} (${year})</h3>
          <p>Genres:  ${genres.join(", ")}</p>
          <p> ${summary}</p>
       `;

        moviesContainer.appendChild(movieDiv);
      }
      document.body.appendChild(moviesContainer);
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteDiv() {
  let div = document.getElementsByClassName("movies-container");
  if (div.length != 0) div[0].remove();
}
