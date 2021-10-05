let teapot;

function preload() {
  // Load model with normalise parameter set to true
  teapot = loadModel('tinker.obj', true);
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(200);
  scale(3); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(teapot);
}
