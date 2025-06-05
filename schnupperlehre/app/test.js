let a = 5;
let b = 10;
let summe = a + b;
console.log("Summe:", summe);

console.log(1 + 1); // Aufgabe: 2

function greet(name) {
  console.log("Hallo, " + name + "!");
}
greet("john");

class Person {
  constructor(first, hobbbby, age, eye) {
    this.firstName = first;
    this.hobby = hobbbby;
    this.age = age;
    this.eyeColor = eye;
  }
}

const user = new Person( "john", "basketball", "25", "blue");
console.log("Name: " + user.firstName);
console.log("Alter: " + user.age);

const readline = require("readline-sync");

let person = readline.question("Wie alt bist du");
console.log("super schon " + person);

let username = readline.question("Wie heisst du? ");
console.log("Hallo " + username);
if (user === "18") {
  console.log("du bist sehr alt");
}
let hobbbby = readline.question("Was ist dein hobby? ");
console.log("Ich liebe " + hobbbby);
if (user === "Basketball!") {
  console.log("Ich liebe Basketball!");
}

let eye = readline.question("Was ist deine Augenfarbe?");
console.log("Okay, sie sind " + eye);

const boy = new Person (username,hobbbby,eye)
console.log(boy.firstName+ " name")
console.log(hobbbby + " hobby");
console.log(eye + " eye");
console.log(person + " alter");
