function calculate() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const operator = document.getElementById("operator").value;
  let result;

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      result = "Invalid operator";
  }

  document.getElementById("result").innerText = `Result: ${result}`;
}

function reset() {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("operator").value = "+";
  document.getElementById("result").innerText = "";
}
