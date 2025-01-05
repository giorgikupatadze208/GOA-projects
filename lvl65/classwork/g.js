"N1"
let array = new Array(1, 2, 3, 4, 5);
console.log(array); 

"N2"
let array = new Array(1, 2, 3, 4, 5);
console.log(array); 

"N3"
let array = new Array(5);
array[0] = 10;
array[1] = 20;
array[2] = 30;
array[3] = 40;
array[4] = 50;

console.log(array);

"N4"
let array = new Array(5);
array[0] = 10;
array[1] = 20;
array[2] = 30;
array[3] = 40;
array[4] = 50;
console.log(array[0]); 
console.log(array[2]); 
console.log(array[4]); 

"N5"
let array = new Array(5);
array[0] = 10;
array[1] = 20;
array[2] = 30;
array[3] = 40;
array[4] = 50;

let slicedArray = array.slice(1, 4);
console.log(slicedArray);

"N6"
function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}
console.log(getRandomNumber(10));

"N7"

let count = 0;

const interval = setInterval(() => {
    console.log(count);
    count++;
    if (count > 30) {
        clearInterval(interval);
    }
}, 1000);

"N8"
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

console.log(`${day}/${month}/${year}`); // მაგალითად: 29/12/2024
