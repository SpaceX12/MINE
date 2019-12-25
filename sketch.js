var sun, planet

function setup() {
  createCanvas(600, 500); 
  
  sun = ellipseMode(RADIUS);
  planet = ellipseMode(RADIUS);
  
  sun.shapeColor= 'yellow';
  planet.shapeColor = 'green';
}

function draw() {
  background(0);
  
  planet.velocityX = 1;
  
  
  ellipse(280,250,55);
  ellipse(100,250,10);
  
  sun.scale = Math.round(frameCount/2);
  
}