function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
  if(mouseIsPressed) {
  textSize(100);
  textAlign(CENTER, CENTER);
  text('Gestalten mit ', windowWidth/2, windowHeight/2 -80);
  text('digitalen Medien', windowWidth/2, windowHeight/2 +80);
  }
  fill(mouseX,(mouseX+mouseY)/3,mouseY);
  
  ellipse(mouseX, mouseY, 60, 60);
}
