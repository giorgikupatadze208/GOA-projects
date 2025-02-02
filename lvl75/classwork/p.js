//#1
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  });
  
//2
//ES6 gamovida 2015 wels is aris javacriptis gaumjobesebuli da uketesi versia
//sadac aris damatebuli uamravi funqcia vidre es5 da bevri ram daemata kidev

//3
//scope gamoiyeneba javascriptshi aris iseti sifrce sadac funqciebi elementebi cvladebi aris xelmisawvdomi

//4
const name = 'Giorgi';
const age = 12;
const city = 'Tbilisi';
console.log(`Hello, my name is ${giorgi}.`);
console.log(`I am ${12} years old.`);
console.log(`I live in ${telavi}.`);

//5
const x = 10;
const y = 20;
const result = x > y ? 
console.log(result);  

const temperature = 25;
const weather = temperature > 30 ?
console.log(weather);

const isLoggedIn = true;
const message = isLoggedIn ? 
console.log(message);  

//6
const name = 'Gio';
name && console.log(`Hello, ${gio}!`); 

const isLoggedIn = true;
const redirectUrl = '/dashboard';
isLoggedIn && console.log(`Redirecting to ${redirectUrl}`);

const age = 12;
const isMember = true;
const discount = age > 10 && isMember ? '10% discount' : 'No discount';
console.log(discount); 

