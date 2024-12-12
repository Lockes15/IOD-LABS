// __________________________________________________________QUESTION 1_________________________________________________________________________
// What are the results of these expressions?

// "" + 1 + 0 - an empty string converts to 0 - the '+'(addition) operator concatenates the string
// therefore the result is: 10.

// "" - 1 + 0 - an empty string converts to 0 - the '-'(subtract) operator reacts as normal
// therefore the result is: -1

// true + false; -  true = 1 & false = 0
// the result is: 1

// !true; '!' = NOT operator - if somthing is not true - ie !true:
// it's: flase

// 6 / "3"; - string are converted to numbers where possible - the '/' (divide) operator works as normal
// therefore the result is: 2

// "2" * "3"; - string are converted to numbers - the '*' operator works as normal
// therefore the result is: 6

// 4 + 5 + "px"; - the numbers are added together as per the operation - then is concatenated with the string 'px'
// therefore the result is: 9px

// "$" + 4 + 5; the '+' operator concatenates the strings together and does not add them - staying true to the normal order of operation
// its first  '$ + 4' creating the first string then + 5 - (joinging the first and second string)
// therefore the result is: $45

// "4" - 2; - the string in converted to a number - the '-' operator works as normal
// therefore the result is: 2

// "4px" - 2; this string will not be converted to a number, due to having a numeric and letter value - the operation wont be performed
// the result is: NaN

// " -9 " + 5; - the string will be converted to a number -9,  b/c it is a string the end space will remian. The '+' operator
// joins the 2 string together - the result is:  -9 5

// " -9 " - 5; the same as above with the string conversion and spaces. The '-' operators works as normal
// therefore the result is: -14

// null + 1; null is converted to a number = 0 - then the '+' operator works as normal
// therefore the result is: 1

// undefined + 1; undefined cannot be converted to a number.
// the result is NaN.

// undefined == null; '==' determines the equivalence of each value. both undefind and null spresent the absence of a value or value = 0
// so this is: true.

// undefined === null; '===' (strict equality) undefind and null do not share the ssame type or value, and so are not strictly equal
// so the is: false

// " \t \n" - 2; this string will convert to a number, due to the white space (originally i thought it wuld be considered NaN. But no.)
// converted to a number it is = to 0
// therefore the result is: -2

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(!true);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null);
console.log(undefined === null);
console.log(" \t \n" - 2);
// __________________________________________________________QUESTION 2._________________________________________________________________________
// Which of the below are not giving the right result? Why are they not correct? How can we fix them?
// convert string to number

let three = "3";
let four = "4";
let thirty = "30";
// these values have been decalred as strings, trying to perfom the below expressions as if they are numerical may not always yeild the desired result
let numThree = Number(three);
let numFour = Number(four);
let numThirty = Number(thirty);

three = numThree;
four = numFour;
thirty = numThirty;

// //what is the value of the following expressions?
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;

// using the string format the results are:
// 34, 12, 0.75, -1

// channging the values from string to numbers the results are:
// Output: 123
// 7, 12, 0.75, -1

let lessThan1 = three < four;
let lessThan2 = thirty < four;
// using the string format these will be compared alphabetically. the results are:
// true, true
// channging the values from string to numbers the results are:
// true, false

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

// __________________________________________________________QUESTION 3._________________________________________________________________________
// Which of the following console.log messages will print? Why?

if (0) console.log("#1 zero is true"); //will not print - the 0 as a number is = zero value and therefore false.
if ("0") console.log("#2 zero is true"); // will print - the 0 as a string is = a string with a value and therefore true
if (null) console.log("null is true"); // will not print - null is = zero value therefore false
if (-1) console.log("negative is true"); // will print - -1 is a number value, not 0 and therefore true
if (1) console.log("positive is true"); // will print 1 is a number value not - & therefore true

// __________________________________________________________QUESTION 4._________________________________________________________________________
// Rewrite this if using the ternary/conditional operator '?'.

// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }

let a = 2,
  b = -1;
let result = `${a} + ${b} is `;

// condition ? expressionIfTrue : expression IfFlase - is how to convert the expression - remembering to place the variable at the front so -
result += a + b < 10 ? "less than 10" : "greater than 10";
console.log(result);

// Test it with different values for a and b.
// if a = 7, b = 5. Console: 7 + 5 is greater than 10.
// is a = 2, b = -0. Console: 2 + -1 is less than 10.

//  What does the ‘+=’ do?
// it adds a variable and a value together. It then assigns the result to the vairable.
// for exammple if x = 7
// x += 3 is the same as x = x + 3 which is the same as x = 7 + 3 and now x = 10.

// __________________________________________________________QUESTION 5._________________________________________________________________________

// Rewrite the following function using:  Test each version to make sure they work the same.

//  a) function expression syntax,

const getGreeting = function (name) {
  return "Hello " + name + "!";
};
console.log(getGreeting("Lockes"));

// and b) arrow function syntax.
const getGreeting1 = (name) => "Hello " + name + "!";
console.log(getGreeting1("Lockes"));

// __________________________________________________________QUESTION 6._________________________________________________________________________
// a) Complete the inigo object by adding a lastName property and including it in the
// greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo ",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${
      this.firstName + this.lastName
    }. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.",
};

inigo.greeting(westley);
inigo.greeting(rugen);

// __________________________________________________________QUESTION 7._________________________________________________________________________
// The following object represents a basketball game and keeps track of the score as the
// game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
  score: 0,
  fouls: 0,
  foulScore() {
    this.fouls++;
    return this;
  },
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log(
      "Halftime score is:" + this.score + " Total fouls:" + this.fouls
    );
    return this;
  },
  fullTime() {
    console.log("The Score is " + this.score + " Total fouls:" + this.fouls);
    return this;
  },
};
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .foulScore()
  .basket()
  .threePointer()
  .halfTime()
  .fullTime();

// __________________________________________________________QUESTION 8._________________________________________________________________________
//The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for…in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function
// again with the new object.

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const newYork = {
  name: "New York",
  population: 8_800_000,
  state: "NY",
  founded: "1624",
  timezone: "EDT",
};

function viewCity(city) {
  for (let key in city) {
    console.log("key: " + key);
    console.log("value: " + city[key]);
  }
}

function viewCity(city) {
  for (const viewCity in city) {
    console.log(viewCity + ": " + city[viewCity]);
  }
}
viewCity(sydney);

// __________________________________________________________QUESTION 9._________________________________________________________________________
// Use the following variables to understand how JavaScript stores objects by reference.

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
const moreSports = [...teamSports];
teamSports.push("Football");
teamSports.unshift("Basketball");
console.log(moreSports);

// b) Create a new dog2 variable equal to dog1 and give it a new value
let dog2 = dog1;
dog2 = "Olivier";

console.log(dog2);

// c) Create a new cat2 variable equal to cat1 and change its name property
const cat2 = { ...cat1 };
cat2.name = "Momo";

console.log(cat2);

// d) Print the original teamSports, dog1 and cat1 variables to the console.
console.log(teamSports);
console.log(dog1);
console.log(cat1);

// Have they changed? Why?

// teamSports & cat1 variable have both changed - arrays & objects are stored  by reference - any changes made to the array or object affect the original variable
// dog1 remains unchanged - string are stored by value, when the new dog2 variable was declared it made an independent copy & os no longer refrencing the orginal variable.

// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

// making shallow copies of the variable using the spread operator - allows me to change the values without affecting the original variables

// __________________________________________________________QUESTION 10._________________________________________________________________________.
// The following constructor function creates a new Person object with the given name and age values.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate variable
// c) Print out the properties of each person object to the console

const person1 = new Person("Lockes", 27);
const person2 = new Person("Arsenal", 31);

console.log(person1);
console.log(person2);

// d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values.
// Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.

class PersonClass {
  constructor(name, age, human) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  canDrive() {
    return this.age >= 18;
  }
}

const person3 = new PersonClass("India", 30);
console.log(person3);

if (person3.canDrive()) {
  console.log(`${person3.name} is ${person3.age} and they can drive.`);
} else {
  console.log(`${person3.name} is ${person3.age} and they cannot drive.`);
}
