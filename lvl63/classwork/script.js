"davaleba 1"
const gio = {
    name: "Gio",
    age: 25,
    profession: "Software Developer",
    hobbies: ["coding", "reading", "playing football"]
  };

  const nino = {
    name: "Nino",
    age: 22,
    profession: "Graphic Designer",
    hobbies: ["drawing", "painting", "photography"]
  };

  const luka = {
    name: "Luka",
    age: 28,
    profession: "Civil Engineer",
    hobbies: ["cycling", "traveling", "hiking"]
  };
  
  "davaleba 2"
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  const car1 = new Car("Toyota", "Corolla", 2020);
  const car2 = new Car("Tesla", "Model 3", 2022);
  const car3 = new Car("BMW", "X5", 2018);
  
  console.log(car1);
  console.log(car2); 
  console.log(car3);
  
"davaleba 3"
function Person(name, age, gender, occupation) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.occupation = occupation;
  }
  const person1 = new Person('გიორგი', 25, 'მამრობითი', 'მომხმარებელი');
  const person2 = new Person('ანა', 30, 'ქალი', 'დიზაინერი');
  const person3 = new Person('დათა', 22, 'მამრობითი', 'სტუდენტი');
  
  console.log(person1);
  console.log(person2);
  console.log(person3);
  
  "davaleba 4"

function Animal(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
  const animal1 = new Animal('ირემი', 'ძაღლი', 3);
  const animal2 = new Animal('ზღარბი', 'კატა', 5);
  const animal3 = new Animal('ჩიტი', 'ლომი', 2);

  console.log(animal1);
  console.log(animal2);
  console.log(animal3);
  
  "davaleba 5"
 "constructor function გამოიყენება ობიექტი რომ შეიქმნას ჯავასკრიპტში ის ამარტივებს იმას რომ მარტივად" 
 "გავიმეოროთ ობიექტების შექმნის პროცესი და თითოეულს სხვადასხვა მონაცემები და ინფორმაცია მივანიჭოთ."