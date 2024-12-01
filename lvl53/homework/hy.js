
const myImage = document.getElementById('myImage');
const resizeButton = document.getElementById('resizeButton');

resizeButton.addEventListener('click', function() {
  myImage.style.width = '300px'; 
  myImage.style.height = '300px'; 
});
