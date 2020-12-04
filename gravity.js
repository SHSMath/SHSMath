var wide = 700;
var tall = 700;
var centerx = wide/2;
var centery = wide/2;
var partamt = 400;
var z = 100000;
var slide = 19;
var objects = [];

class particle {
  constructor() {
    this.xpos = random(-50, 50);
    this.ypos = random(-50, 50);
    this.vx = 0;
    this.vy = 0;
    this.accx = 0;
    this.accy = 0;
  }
}

function drawSlider() {
  line(20, 0, 20, tall);
  rect(10, slide, 20, 10);
  if (mouseIsPressed && mouseX < 40 && mouseX > 0) {
    slide = mouseY;
  }
  if (slide < 11) {
    slide = 11;
  }
  if (slide > tall - 30) {
    slide = tall - 30;
  }
  z = sq((slide - 10)/4);
}

function createParticles() {
  for (var i=0; i<partamt; i++) {
    objects.push(new particle());
  }
}

function setup() {
  createCanvas(wide, tall);
  createParticles();
  fill(0,0,0);
}

function computeAccel() {
  for (var i=0; i<partamt; i++) {
    objects[i].accx = 0;
    objects[i].accy = 0;
    for (var j=0; j<partamt; j++) {
      if (i != j) {
        var x = objects[j].xpos - objects[i].xpos;
        var y = objects[j].ypos - objects[i].ypos;
        var dist = sqrt((sq(x)+sq(y)));
        objects[i].accx += x/(sq(dist)*dist);
        objects[i].accy += y/(sq(dist)*dist);
      }
    }
  }
}

function moveParticles() {
  for (var i=0; i<partamt; i++) {
    objects[i].vx += objects[i].accx;
    objects[i].vy += objects[i].accy;
    objects[i].xpos += objects[i].vx/1;
    objects[i].ypos += objects[i].vy/1;
  }

}

function drawParticles() {
  for (var i=0; i<partamt; i++) {
    ellipse(objects[i].xpos/z + centerx, objects[i].ypos/z + centery, 2, 2);
  }
}

function draw() {
  background(255, 255, 255);
  computeAccel();
  moveParticles();
  drawParticles();
  drawSlider();
  
}
