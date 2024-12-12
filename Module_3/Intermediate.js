// __________________________________________________________QUESTION 1._________________________________________________________________________
// Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

function ucFirstLetters(str) {
  const justWords = str.split(" ");
  for (let i = 0; i < justWords.length; i++) {
    justWords[i] = justWords[i][0].toUpperCase() + justWords[i].substring(1);
  }
  return justWords.join(" ");
}

console.log(ucFirstLetters("did it work"));
// __________________________________________________________QUESTION 2._________________________________________________________________________

// Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (…) added to the end if it was too long, or the original text otherwise.

function truncate(str, max) {
  if (str.length > max) {
    let truncatedStr = str.substring(0, max - 3);
    return truncatedStr + "...";
  } else {
    return str;
  }
}

// b) Write another variant of the truncate function that uses a conditional operator
function truncateCon(str, max) {
  return str.length > max ? str.substring(0, max - 3) + "..." : str;
}

console.log(truncate("This text will be truncated if it is too long", 25));
console.log(truncateCon("This text will be truncated if it is too long", 25));

// __________________________________________________________QUESTION 3._________________________________________________________________________

//  Use the following animals array for the below tasks. Test each one by printing the result to
// the console.
const animals = ["Tiger", "Giraffe"];

// a) Add 2 new values to the end
animals.push("Lion", "Bear");

// b) Add 2 new values to the beginning
animals.unshift("Hippo", "Axolotl");

// c) Sort the values alphabetically
animals.sort();

console.log(animals);

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue

function replaceMiddleAnimal(newValue) {
  const halfway = Math.floor(animals.length / 2);
  animals[halfway] = newValue;
}
replaceMiddleAnimal("Mermaid");
console.log(animals);

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array

function findMatchingAnimals(beginsWith) {
  const beginAnimals = animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLocaleLowerCase())
  );
  return beginAnimals;
}
console.log(findMatchingAnimals("M"));

// __________________________________________________________QUESTION 4._________________________________________________________________________

// // Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// // 'margin-left' into camel-cased 'marginLeft'.
// // The function should remove all dashes, and uppercase the first letter of each word after a dash.

function camelCase(cssProp) {
  const rmvDash = cssProp.split("-");
  for (let i = 1; i < rmvDash.length; i++) {
    rmvDash[i] = rmvDash[i][0].toUpperCase() + rmvDash[i].substring(1);
  }
  return rmvDash.join("");
}
// // b) Create variants of the camelCase function that use different types of for loops, and
// // c) with and without the conditional operator.

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

// __________________________________________________________QUESTION 5._________________________________________________________________________

//Decimal number operations in JavaScript can lead to unexpected results, as in the following:
// We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful:

let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);

// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?

// a) Explain why the above code returns the wrong answer
//  toFixed coverts the number to a string - adding them together concats them instead or  performing the additon operator.

// b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2
// and returns the correct float result.

function currencyAddition(float1, float2) {
  const sumFloats = float1 + float2;
  return Number(sumFloats.toFixed(2));
}

let sumFloats = currencyAddition(0.2, 0.1);
console.log(sumFloats);

// c) Create a function currencyOperation(float1, float2, operation)
// which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result.

function currencyOperation(float1, float2, operation) {
  let floatResult;
  switch (operation) {
    case "+":
      floatResult = float1 + float2;
      break;
    case "-":
      floatResult = float1 - float2;
      break;
    case "*":
      floatResult = float1 * float2;
      break;
    case "/":
      floatResult = float1 / float2;
      break;
  }
  return Number(floatResult.toFixed(2));
}

console.log(currencyOperation(0.2, 0.1, "+"));
console.log(currencyOperation(0.2, 0.1, "-"));
console.log(currencyOperation(0.2, 0.1, "*"));
console.log(currencyOperation(0.2, 0.1, "/"));

// d) (Extension) Extend the above function to include a fourth argument numDecimals
//  which allows the operation to support different amounts of decimal places from 1 to 10

function currencyOperationDecimals(float1, float2, operation, numDecimals = 4) {
  let floatResult;
  switch (operation) {
    case "+":
      floatResult = float1 + float2;
      break;
    case "-":
      floatResult = float1 - float2;
      break;
    case "*":
      floatResult = float1 * float2;
      break;
    case "/":
      floatResult = float1 / float2;
      break;
  }
  return Number(floatResult.toFixed(numDecimals));
}

console.log(currencyOperationDecimals(0.2545, 0.1657, "+"));
console.log(currencyOperationDecimals(0.2545, 0.1657, "-"));
console.log(currencyOperationDecimals(0.2545, 0.1657, "*"));
console.log(currencyOperationDecimals(0.2545, 0.1657, "/"));

// __________________________________________________________QUESTION 6._________________________________________________________________________

// Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.

function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];

const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

const diet = ["vape", "redbull", "brat", "magnet", "brat", "martinis", "vape"];

console.log(unique(colours));
console.log(unique(testScores));
console.log(unique(diet));

// __________________________________________________________QUESTION 7._________________________________________________________________________
// Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.

function getBookTitle(bookId) {
  const book = books.find((book) => book.id === bookId);
  return book ? book.title : "Book has not been written";
}
console.log(getBookTitle(3));

// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.

function getOldBooks() {
  return books.filter((book) => book.year < 1950);
}
console.log(getOldBooks());

// c) Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.

function addGenre() {
  return books.map((book) => ({
    ...book,
    genre: "classic",
  }));
}
// console.log(addGenre());

// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.

function getTitles(authorInitial) {
  return books
    .filter((book) =>
      book.author.toLowerCase().startsWith(authorInitial.toLowerCase())
    )
    .map((book) => book.title);
}
console.log(getTitles("GE"));

// e) (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.

function latestBook() {
  let latestYear = 1910;
  books.forEach((book) => {
    latestYear = book.year > latestYear ? book.year : latestYear;
  });
  return books.find((book) => book.year === latestYear);
}

console.log(latestBook());
// __________________________________________________________QUESTION 8._________________________________________________________________________
// The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.

const phoneBookABC = new Map();
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

const arrayDEF = [
  ["Dennis", "0411555123"],
  ["Eveie", "0422555123"],
  ["Frank", "0433555123"],
];
const phoneBookDEF = new Map(arrayDEF);

console.log(arrayDEF);

// c) Update the phone number for Caroline
phoneBookABC.set("Caroline", "0444555123");

// d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map

function printPhoneBook(contacts) {
  for (let [name, numbers] of contacts) {
    console.log(`${name}: ${numbers}`);
  }
}
printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

// e) Combine the contents of the two individual Maps into a single phoneBook Map
const combinePhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

console.log(combinePhoneBook);

// f) Print out the full list of names in the combined phone book

function printCombineBook(contacts) {
  for (let [name, numbers] of contacts) {
    console.log(`${name}: ${numbers}`);
  }
}
printCombineBook(combinePhoneBook);

// __________________________________________________________QUESTION 9._________________________________________________________________________

// Given the below salaries object, perform the following tasks.
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(salaries) {
  let totalSal = 0;
  for (let key in salaries) {
    totalSal += salaries[key];
  }
  return totalSal;
}
console.log(sumSalaries(salaries));

function topEarner(salaries) {
  let topEarnerIs = " ";
  let topDollar = 0;
  for (let name in salaries) {
    if (salaries[name] > topDollar) {
      topDollar = salaries[name];
      topEarnerIs = name;
    }
  }
  return topEarnerIs;
}
console.log(topEarner(salaries));

// __________________________________________________________QUESTION 10._________________________________________________________________________
// The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// a) Print the total number of minutes that have passed so far today
// b) Print the total number of seconds that have passed so far today

const hours = today.getHours();
const minutes = today.getMinutes();
const totalMinutes = hours * 60 + minutes;
console.log("Total minutes that have passed today: " + totalMinutes);

const seconds = today.getSeconds();
const totalSeconds = totalMinutes * 60 + seconds;
console.log("Total seconds that have passed today: " + totalSeconds);

// c) Calculate and print your age as: 'I am x years, y months and z days old'

function calculateAge(birthDate) {
  const today2 = new Date();
  let years = today2.getFullYear() - birthDate.getFullYear();
  let months = today2.getMonth() - birthDate.getMonth();
  let days = today2.getDate() - birthDate.getDate();
  if (days < 0) {
    months--;
    days += new Date(today2.getFullYear(), today2.getMonth(), 0).getDate;
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  console.log(`I am ${years} years, ${months} months and ${days} days old`);
}

const birthDate = new Date("1996-11-19");
calculateAge(birthDate);

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates

function daysInBetween(date1, date2) {
  const msDay = date2 - date1;
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor(msDay / oneDay);
  return Math.abs(diffDays);
}
console.log(
  `The amount of days between my birthday, ${birthDate.toLocaleDateString()} and todays date ${today.toLocaleDateString()} is: ${daysInBetween(
    birthDate,
    today
  )}`
);
