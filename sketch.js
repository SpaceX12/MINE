var click 

function setup() {
  createCanvas(692, 540);
  click = ellipseMode(RADIUS);
  click.shapeColor = 'red';
}

function draw() {
  background(255);
  
  ellipse(300, 200, 10, 10);
  
  click.x = mouseX;
  click.y = mouseY;
  
  if(click.y>200){
    canvas.shapeColor = 'black';
  }
  
  if(click.x>300){
    canvas.shapeColor = 'purple';
  }
}