let cube = document.getElementById('cube'); 
let x = 0, y = 0; 
let width = 400; 
let height = 400; 
let cubeSize = 50; 
let speed = 4; 

function moveCube() {
  if (x >= width - cubeSize) {
    x = width - cubeSize;
  }
  if (y >= height - cubeSize) {
    y = height - cubeSize;
  }

  
  cube.style.left = `${x}px`;
  cube.style.top = `${y}px`;

 
  x += speed; 

  if (x >= width - cubeSize) {
    x = width - cubeSize;
    y += speed; 
  }

  if (y >= height - cubeSize) {
    y = height - cubeSize;
    x -= speed; 
  }

  if (x <= 0) {
    x = 0;
    y -= speed; 
  }

  if (y <= 0) {
    y = 0;
  }

  requestAnimationFrame(moveCube); 

moveCube();
