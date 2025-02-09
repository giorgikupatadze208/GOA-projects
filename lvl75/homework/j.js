







N5
//Ternary ოპერატორი მოკლე გზა არის if else პჩასაწერად
let age = 19;
let access = age >= 18 ? "sheizleba" : "arsheizleba";
console.log(access); 

//&& ოპერატორი — შეიძლება გამოვიყენოთ მხოლოდ მაშინ, როცა გვინდა,
//რომ პირობის შესრულებისას რაღაც მოხდეს (console.log ან რამე).
let isLoggedIn = true;
isLoggedIn && console.log("daregistrirebulia momxmarebeli"); 
// თუ `isLoggedIn` true-ა, გამოიტანს ანუ გაიარა რეგისტრაფცცია

N6

function testScope() {
    if (true) {
        var varVariable = "es ari var";
        let letVariable = " es let";
        const constVariable = "es const";
    }

    console.log(varVariable);  
}
testScope();
