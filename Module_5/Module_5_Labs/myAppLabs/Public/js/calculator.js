function callAdd() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  fetch(`/calculator/add?num1=${num1}&num2=${num2}`)
    .then((response) => response.text())
    .then((result) => (document.getElementById("result").innerText = result));
}

function callSubtract() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  fetch(`/calculator/subtract?num1=${num1}&num2=${num2}`)
    .then((response) => response.text())
    .then((result) => (document.getElementById("result").innerText = result));
}

function callMultiply() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  fetch(`/calculator/multiply?num1=${num1}&num2=${num2}`)
    .then((response) => response.text())
    .then((result) => (document.getElementById("result").innerText = result));
}

function callDivide() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  fetch(`/calculator/divide?num1=${num1}&num2=${num2}`)
    .then((response) => response.text())
    .then((result) => (document.getElementById("result").innerText = result));
}
