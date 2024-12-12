// declared variables to empty array & 0
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let totalAmount = 0;

// reference to the HTML using their ID
const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addButton = document.getElementById("add-button");
const expensesTableBody = document.getElementById("expenses-table");
const totalAmountCell = document.getElementById("total-amount");

// Load transactions from localStorage on page load
document.addEventListener("DOMContentLoaded", loadTransactions);

addButton.addEventListener("click", function (event) {
  event.preventDefault();

  const category = categorySelect.value;
  const amount = Number(amountInput.value);
  const date = new Date(dateInput.value).toLocaleDateString("en-GB");

  // validate variables
  if (category === "") {
    alert("You're Missing Something");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("this is invalid");
    return;
  }
  if (date === "") {
    alert("the date selected does not exist");
    return;
  }

  // add transaction
  const transaction = { category, amount, date };
  expenses.push(transaction);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  // create row for transaction
  const newRow = expensesTableBody.insertRow();
  addExpense(newRow, category);
  addExpense(newRow, amount.toFixed(2));
  addExpense(newRow, date);

  // delete button
  const deleteCell = newRow.insertCell();
  deleteCell.appendChild(deleteTransaction(newRow, transaction, amount));

  // adjust total amount
  totalAmount += amount;
  totalAmountCell.textContent = totalAmount.toFixed(2);
});

function addExpense(row, text) {
  const cell = row.insertCell();
  cell.textContent = text;
  return cell;
}

function deleteTransaction(row, transaction, amount) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // remove the exp & adjust the amounts
  deleteButton.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(transaction), 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    totalAmount -= amount;
    totalAmountCell.textContent = totalAmount.toFixed(2);
    expensesTableBody.removeChild(row);
  });
  return deleteButton;
}

function loadTransactions() {
  expenses.forEach((transaction) => {
    totalAmount += transaction.amount;

    // adds new row for transaction
    const newRow = expensesTableBody.insertRow();

    // adds new cells
    addExpense(newRow, transaction.category);
    addExpense(newRow, transaction.amount.toFixed(2));
    addExpense(newRow, transaction.date);

    // delete button
    const deleteCell = newRow.insertCell();
    deleteCell.appendChild(
      deleteTransaction(newRow, transaction, transaction.amount)
    );
  });

  totalAmountCell.textContent = totalAmount.toFixed(2);
}
