
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const nameValue = document.getElementById('name').value;
  const emailValue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;

  console.log('Name:', nameValue);
  console.log('Email:', emailValue);
  console.log('Password:', passwordValue);
});
