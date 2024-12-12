// _____________________________________________________________________QUESTION 2__________________________________________________________________
// ________________________________________________________________________A._______________________________________________________________________
// function addCard() {
//   // clone the template
//   const template = document
//     .getElementById("card-template")
//     .content.cloneNode(true);
//   // populate the template
//   template.querySelector(".card-title").innerText = "My Card Title";
//   template.querySelector(".card-text").innerText = "lorem ipsum ble bla";
//   // include the populated template into the page
//   document.querySelector("#card-list").appendChild(template);
// }
// addCard();

function addCard(title, text) {
  // clone the template
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);

  // populate the template with dynamic content
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;

  // include the populated template into the page
  document.querySelector("#card-list").appendChild(template);
}

// Example usage:
addCard("'Dynamic Card Title", "This is dynamic content for the card.'");

// _____________________________________________________________________QUESTION 2__________________________________________________________________
// ________________________________________________________________________B._______________________________________________________________________
// For exercise 2 use the following array :
// const data = [{name: 'bob', age: 23},
// {name: 'alice', age: 39}]

const data = [
  { name: "bob", age: 23 },
  { name: "alice", age: 39 },
];

function addCard(title, text) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;
  document.querySelector("#card-list").appendChild(template);
}

data.forEach((person) => {
  addCard(person.name, `Age: ${person.age}`);
});

// _____________________________________________________________________QUESTION 2__________________________________________________________________
// ________________________________________________________________________C._______________________________________________________________________
