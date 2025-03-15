N1
//array
const numbers = [1, 2, 3, 4, 5]; /
for (const num of numbers) {
  console.log(num);
}
//String
const text = "Hello"; 
for (const char of text) {
  console.log(char);
}

//(Set)
const uniqueNumbers = new Set([10, 20, 30]); 
for (const value of uniqueNumbers) {
  console.log(value);
}

N2

// 1. ობიექტზე (Object)
const person = {
    name: "Giorgi",
    age: 12,
    city: "Tbilisi",
  }; // ეს არის ობიექტი
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
    // key არის "name", "age", "city", ხოლო მათი მნიშვნელობები: "Giorgi", 12, "Tbilisi"
  }
  
  //მასივზე (Array)
  const numbers = [10, 20, 30];
  for (const index in numbers) {
    console.log(`Index: ${index}, Value: ${numbers[index]}`);
  }
  
  //ჩაშენებული ობიექტზე (მათ შორის, String ობიექტზე)
  const str = "JavaScript";
  for (const key in str) {
    console.log(`Index: ${key}, Character: ${str[key]}`);
  }
  
N3
//1
const isEven = (number) => {
    return number % 2 === 0 ? "Even" : "Odd";
  };
  console.log(isEven(4)); //Even
  console.log(isEven(7)); //Odd
  
//2
const sumArray = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
  };
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
  console.log(sumArray([10, 20, 30]));    // Output: 60

N4
const increment = (number, step = 1) => {
    return number + step;
  };
  console.log(increment(5));      // Output: 6 
  console.log(increment(5, 3));   // Output: 8
  
N5
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    getCarInfo: function() {
        return `This car is a ${this.year} ${this.brand} ${this.model}.`;
    }
};

console.log(car.getCarInfo()); 

N6
const userPrefix = "user_";
const id = 101;

const users = {
    [userPrefix + id]: "Giorgi Kupatadze",
    [userPrefix + (id + 1)]: "Data Diasamize",
    ["sayHello"]() {
        return `Hello, ${this[userPrefix + id]}!`;
    }
};

console.log(users.user_101);
console.log(users.user_102); 
console.log(users.sayHello());

N7
const person = {
    name: "Giorgi",
    age: 12
};

const job = {
    title: "Developer",
    company: "Tech Corp"
};

const contact = {
    email: "kupatadze208@gmail.com",
    phone: "595-31-33-34"
};
const fullProfile = Object.assign({}, person, job, contact);

console.log(fullProfile);