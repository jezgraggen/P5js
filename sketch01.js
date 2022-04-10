let octahedron;

function preload() {
  octahedron = loadModel('tinker.obj');
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(200);
  scale(5); 
  //rotateX(frameCount * 0.01);
  normalMaterial();
  rotateY(frameCount * 0.01);
  model(octahedron);
  
}
