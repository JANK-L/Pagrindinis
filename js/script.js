document.querySelector("form").addEventListener("submit", naujasUzrasas);

let uzrasuKiekis = 0;

function naujasUzrasas(event) {
  event.preventDefault();

  let naujasTekstas = document.getElementById("newText").value.trim();

  if (naujasTekstas == "") {
    alert("Įrašykite tekstą.");
    return;
  }

  sukurti(naujasTekstas, "div");
}

function sukurti(tekstas, element) {
  let newDiv = document.createElement(element);

  newDiv.textContent = tekstas;
  newDiv.setAttribute("id", Date.now());

  document.getElementById("uzrasai").appendChild(newDiv);

  addButton(newDiv.id);

  uzrasuKiekis++;

  document.getElementById("tuscias").style.display = "none";
}

function addButton(id) {
  let newButton = document.createElement("button");

  newButton.textContent = "ištrinti";
  newButton.setAttribute("onclick", "istrinti(event)");

  document.getElementById(String(id)).appendChild(newButton);
}

function istrinti(event) {
  let id = String(event.target.parentElement.id);
  if (confirm("Ar tikrai norite ištrinti šį įrašą?")) {
    document.getElementById(id).remove();
    uzrasuKiekis--;
  }

  if (uzrasuKiekis == 0) {
    document.getElementById("tuscias").style.display = "block";
  }
}
