var wide = 700;
var tall = 700;
var centerx = wide / 2;
var centery = wide / 2;
var partamt = 400;
var z = 100000;
var slide = 19;
var objects = [];
var play = "no";
var step = "no";


class particle {
  constructor() {
    this.xpos = random(-50, 50);
    this.ypos = random(-50, 50);
    this.vx = 0;
    this.vy = 0;
    this.fx = 0;
    this.fy = 0;
    this.charge = round(random(0, 1));
    if(this.charge === 0) {
      this.charge = -1;
    }
    if (this.charge === -1) {
      this.mass = 1;
    }
    else {
      this.mass = 1836.15;
    }
    this.accx = 0;
    this.accy = 0;
  }
}

function drawSlider() {
  line(20, 0, 20, tall);
  fill(10, 10, 10);
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
  z = sq((slide - 10) / 4);
}

function createParticles() {
  for (var i = 0; i < partamt; i++) {
    objects.push(new particle());
  }
  
}

function setup() {
  createCanvas(wide, tall);
  createParticles();
  fill(0, 0, 0);
}

function computeForce() {
  for (var i = 0; i < partamt; i++) {
    objects[i].fx = 0;
    objects[i].fy = 0;
    for (var j = 0; j < partamt; j++) {
      if (i != j) {
        var x = objects[i].xpos - objects[j].xpos;
        var y = objects[i].ypos - objects[j].ypos;
        var f = objects[j].charge * objects[i].charge
        var dist = sqrt((sq(x) + sq(y)));
        objects[i].fx += x*f / pow(dist, 3);
        objects[i].fy += y*f / pow(dist, 3);
      }
    }
    objects[i].accx = objects[i].fx / objects[i].mass;
    objects[i].accy = objects[i].fy / objects[i].mass;
  }
}


function moveParticles() {
  for (var i = 0; i < partamt; i++) {
    objects[i].vx += objects[i].accx;
    objects[i].vy += objects[i].accy;
    objects[i].xpos += objects[i].vx / 1;
    objects[i].ypos += objects[i].vy / 1;
  }

}

function drawParticles() {
  
  for (var i = 0; i < partamt; i++) {
    noStroke();
    if (objects[i].charge === 1) {
      fill(255, 0, 0);
    }
    else {
      fill(0, 0, 0);
    }
    ellipse(objects[i].xpos / z + centerx, objects[i].ypos / z + centery, 2, 2);
  }
}

function mouseReleased() {
  if(mouseX > 495 && mouseX < 530 && mouseY > 630 && mouseY < 670)     {
    if (play === "yes") {
      play = "no";
    } else {
      play = "yes";
    }
  }
  if(mouseX > 550 && mouseX < 590 && mouseY > 630 && mouseY < 670) {
    step = "yes";
  }
}

function stepButton() {
  fill(0);
  triangle(570, 630, 590, 650, 570, 670);
  rect(554, 630, 8, 40);
}

function playButton() {
  if (play === "no") {
    fill(0, 255, 0);
    triangle(500, 630, 520, 650, 500, 670);
  }
  if (play === "yes") {
    fill(255, 0, 0);
    rect(495, 635, 30, 30)
  }
}

function draw() {
  stroke(0);
  background(255, 255, 255);
  drawSlider();

  if (play === "yes" || step === "yes") {
    computeForce();
    moveParticles();
  }
  playButton();
  stepButton();
  drawParticles();
  step = "no";
}
