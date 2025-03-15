N1
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}
module.exports = { add, multiply };
const { add, multiply } = require('./functions');
console.log(add(5, 3));        
console.log(multiply(4, 2));  
