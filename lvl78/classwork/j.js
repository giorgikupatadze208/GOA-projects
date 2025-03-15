//N1
const person = { name: 'Giorgi', age: 12, city: 'Tbilisi' };
const { name, age, city } = person;

console.log(name);  // Giorgi
console.log(age);   // 12
console.log(city);  // Tbilisi

//N1-2
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);   // red
console.log(secondColor);  // green
console.log(thirdColor);   // blue

//N1-3
const user = { name: 'Giorgi', address: { city: 'Tbilisi', country: 'Georgia' } };
const { name, address: { city, country } } = user;

console.log(name);    // Giorgi
console.log(city);    // Tbilisi
console.log(country); // Georgia

//N2
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4));  // 10

//N2-2
const fruits = ['apple', 'banana', 'cherry', 'date'];
const [first, second, ...others] = fruits;

console.log(first);   // apple
console.log(second);  // banana
console.log(others);  // ['cherry', 'date']

//N2-3
const person = { name: 'Giorgi', age: 19, city: 'Tbilisi', country: 'Georgia' };
const { name, ...address } = person;

console.log(name);     // Giorgi
console.log(address);  // { age: 12, city: 'Tbilisi', country: 'Georgia' }

//N3-1
const fruits = ['apple', 'banana'];
const moreFruits = [...fruits, 'cherry', 'date'];

console.log(fruits);     // ['apple', 'banana']
console.log(moreFruits); // ['apple', 'banana', 'cherry', 'date']

//N3-2
const person = { name: 'Giorgi', age: 19 };
const updatedPerson = { ...person, city: 'Tbilisi' };

console.log(person);        // { name: 'Giorgi', age: 12 }
console.log(updatedPerson); // { name: 'Giorgi', age: 12, city: 'Tbilisi' }

//N3-3
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const allNumbers = [...numbers1, ...numbers2];

console.log(allNumbers);  // [1, 2, 3, 4, 5, 6]

//N4

//rest პროგრამა გამოიყენება როცა გინდა მიღებული მონაცემების შეკრება ან ჩაწერა მაგალითად:

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // 10
  
//Spread Operator გამოიყენება მონაცემების გაასავრცობად და ანუ ფარდოდ გამოსაყენებლად მაგალითად:
const fruits = ['apple', 'banana'];
const newFruits = [...fruits, 'cherry', 'date'];
console.log(newFruits); // ['apple', 'banana', 'cherry', 'date']
