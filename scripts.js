let firstNumber = 0;
let secondNumber = 0;
let action = "+";
let answer = 0;

let input = document.getElementById("calc-input");
let calculationSpan = document.getElementById("calculation");

let history = [];

let hideButton = document.getElementById("hide-history");
let showButton = document.getElementById("show-history");

function onNumberClick(number) {
  input.value += number;

  let splitted = input.value.split(" ");

  if (splitted.length > 2) {
    splitted[0] = parseFloat(splitted[0]);
    if (splitted[2].includes(".") && number != 0)
      splitted[2] = parseFloat(splitted[2]);
    else splitted[2] = parseFloat(splitted[2]);
  } else if (splitted[0].includes(".") && number != 0)
    splitted[0] = parseFloat(splitted[0]);
  else splitted[0] = parseFloat(splitted[0]);

  input.value = splitted.join(" ");
}

function onDotClick() {
  let splitted = input.value.split(" ");

  if (splitted.length > 2) {
    if (!splitted[2].includes(".")) splitted[2] += ".";
    if (splitted[2] == ".") splitted[2] = "0.";
  } else if (!splitted[0].includes(".")) {
    splitted[0] += ".";
    if (splitted[0] == ".") splitted[0] = "0.";
  }

  input.value = splitted.join(" ");
}

function onActionClick(clickedAction) {
  let splitted = input.value.split(" ");

  if (splitted.length >= 2) {
    splitted[1] = clickedAction;
    input.value = splitted.join(" ");
    return;
  }

  input.value += " " + clickedAction + " ";
  action = clickedAction;
}

function onCountClick() {
  let splitted = input.value.split(" ");
  firstNumber = parseFloat(splitted[0]);
  action = splitted[1];
  secondNumber = parseFloat(splitted[2]);

  calcucalteAnswer();
  input.value = answer;

  calculationSpan.innerText = `${firstNumber} ${action} ${secondNumber}`;
  addToHistory();
}

function calcucalteAnswer() {
  switch (action) {
    case "+":
      answer = parseFloat((firstNumber + secondNumber).toFixed(10));
      break;
    case "-":
      answer = parseFloat((firstNumber - secondNumber).toFixed(10));
      break;
    case "/":
      answer = parseFloat((firstNumber / secondNumber).toFixed(10));
      break;
    case "x":
      answer = parseFloat((firstNumber * secondNumber).toFixed(10));
      break;
  }
}

function onCleanClick() {
  firstNumber = 0;
  secondNumber = 0;
  action = "+";
  answer = 0;
  input.value = "";
  calculationSpan.innerText = "";
}

function onDeleteClick() {
  let text = input.value;
  text = text.trim(" ").slice(0, -1).trim(" ");
  input.value = text;
}

function addToHistory() {
  let historyItem = {
    firstNumber,
    action,
    secondNumber,
    answer,
  };

  history.push(historyItem);

  if (history.length > 5) history.shift();

  updateHistory();
}

showButton.onclick = function () {
  this.style.display = "none";
  hideButton.style.display = "block";
  document.querySelector(".calculator .history-items").style.display = "block";

  updateHistory();
};

hideButton.onclick = function () {
  this.style.display = "none";
  document.querySelector(".calculator .history-items").style.display = "none";
  showButton.style.display = "block";
};

document.getElementById("clean-history").onclick = function () {
  history = [];
  document.querySelector(".calculator .history-items").innerHTML = "";
};

function updateHistory() {
  let formatted = history.map(
    (x) => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`
  );
  let historyBlock = document.querySelector(".calculator .history-items");
  historyBlock.style.display = "block";
  historyBlock.innerHTML = formatted.join(" ");
}
