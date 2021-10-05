let octahedron;

function preload() {
  octahedron = loadModel('tinker.obj');
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(256);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(octahedron);
  scale(5);
}
