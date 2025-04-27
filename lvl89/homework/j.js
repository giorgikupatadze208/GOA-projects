"N1"
const add = (a, b) => a + b;

const square = n => n * n;

const sayHello = () => console.log("Hello!");

"N2"
const name = "Giorgi";
console.log(`Hello, ${name}!`);

const age = 19;
console.log(`I am ${age} years old.`);

const sum = (a, b) => `${a} + ${b} = ${a + b}`;

"N3"
const name = "Luka";
const user = { name };

const age = 25;
const person = { name, age };

function createUser(username, email) {
  return { username, email };
}
"N4"
function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
  }
  
  const multiply = (a, b = 1) => a * b;
  
  function createUser(name = "Anonymous", age = 18) {
    return { name, age };
  }

"N5"
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }
  const arr1 = [1, 2];
  const arr2 = [...arr1, 3, 4];
  const user = { name: "Anna" };
  const fullUser = { ...user, age: 20 };
  