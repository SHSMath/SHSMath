var wide = 700;
var tall = 700;
var centerx = wide/2;
var centery = wide/2;
var partamt = 100;
var objects = [];

class particle {
  constructor() {
    this.xpos = random(-50, 50) + centerx;
    this.ypos = random(-50, 50) + centery;
    this.accx = 0;
    this.accy = 0;
  }
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
    for (var j=0; j<partamt; j++) {
      if (i != j) {
        var x = objects[i].xpos - objects[j].xpos;
        var y = objects[i].ypos - objects[j].ypos;
        objects[i].accx -= x/((sq(x)+sq(y))*sqrt((sq(x)+sq(y))));
        objects[i].accy -= y/((sq(x)+sq(y))*sqrt((sq(x)+sq(y))));
      }
    }
  }
}

function moveParticles() {
  for (var i=0; i<partamt; i++) {
    objects[i].xpos += objects[i].accx;
    objects[i].ypos += objects[i].accy;
  }
}

function drawParticles() {
  for (var i=0; i<partamt; i++) {
    ellipse(objects[i].xpos, objects[i].ypos, 2, 2);
  }
}

function draw() {
  background(255, 255, 255);
  computeAccel();
  moveParticles();
  drawParticles();
}
