"N1"
//ახსენით როგორ მუშაობს function hoisting, let/const hoisting
//ფუნქციების დეკლარაციები მთლიანად "ამოიწევა"
//რაც ნიშნავს რომ მათზე წვდომა შესაძლებელია მათი გამოძახების წინ მაგალითად

sayHello(); 
function sayHello() {
  console.log("Hello");
}
//var ცვლადი "ამოიწევა" და ინიციალიზირდება undefined-ით მაგალითად:

console.log(a);
var a = 5;
//let და const ცვლადები ასევე "ამოიწევა", მაგრამ მათ აქვთ Temporal Dead Zone
// და ინიციალიზაციამდე წვდომა შეუძლებელია მაგალითად:

console.log(b); 
let b = 10;

console.log(c); 
const c = 20;

"N2"
//ეს არის DOM მოვლენების (events) გავრცელების ორი ძირითადი რაღააც მათ აქვთ გადაადგილების მოვლენა
//სხვადასხვა რაღაცეებზე (ელემენტებზე)

//Event Bubbling ნიშნავს, რომ მოვლენა იწყება ყველაზე შიდა (target) ელემენტიდან და ზემოთ ვრცელდება

<div id="baro">
  <button id="baro">click me</button>
</div>

<script>
  document.getElementById("baro").addEventListener("click", () => {
    console.log("ბარო");
  });

  document.getElementById("baro").addEventListener("click", () => {
    console.log("ბარო");
  });
</script>

//Event Capturing ნიშნავს, რომ მოვლენა იწყება ყველაზე გარე (root)
// ელემენტიდან და შიგნით ვრცელდება target ელემენტამდე.

"N3"
html failsia