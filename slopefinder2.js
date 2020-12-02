function setup() {
  createCanvas(600, 600);
}

var a = [120, 240];
var b = [300, 120];
var slope = -1;
var approxSlope = -1;

function drawGrid() {
    stroke(209, 209, 209);
    for (var i = 0; i < 640; i += 30) {
        line(i, -1, i, 602);
        line(-1, i, 601, i);
    }
    stroke(0, 0, 0);
    line(300, 0, 300, 600);
    line(0, 300, 600, 300);
   
}

function drag() {
if (mouseIsPressed) {
    var aDist = sqrt(sq(a[0]-mouseX)+sq(a[1]-mouseY));
    var bDist = sqrt(sq(b[0]-mouseX)+sq(b[1]-mouseY));
    if (aDist < bDist && aDist < 30) {
        a = [mouseX, mouseY];
    }
    if (bDist < aDist && bDist < 30) {
        b = [mouseX, mouseY];   
    }
}
}

function findSlope() {
    slope = (a[1] - b[1]) / (a[0] - b[0]);
    approxSlope = round(-slope * 1000) / 1000;
    
}

function drawLine() {
    stroke(0, 0, 0);
    var x1 = a[0]-1000;
    var x2 = a[0]+1000;
    var y1 = a[1]-(1000*slope);
    var y2 = a[1]+(1000*slope);
    line(x1, y1, x2, y2);
}

function drawRise() {
    stroke(255,0,0);
    line(a[0], a[1], a[0], b[1]);
    var dy = a[1]-b[1];
    if (a[0]>b[0]) {
      dy = -dy;
    }
    fill(255,0,0);
    textSize(15);
    text(round(10*dy/3)/100, a[0]+6, (a[1]+b[1])/2);
    
}

function drawRun() {
    var dx = a[0]-b[0];
    if (a[0] > b[0]) {
      dx = -dx;
    }
    stroke(0,0,255);
    fill(0,0,255);
    line(b[0], b[1], a[0], b[1]);
    text(round(-10*dx/3)/100, (a[0]+b[0])/2, b[1]+20);
}

function draw() {
    background(255, 255, 255);
    drawGrid();
    drag();
    findSlope();
    drawLine();
    drawRise();
    drawRun();
    fill(0, 255, 111);
    stroke(0, 0, 0);
    ellipse(a[0], a[1], 10, 10);
    ellipse(b[0], b[1], 10, 10);
    fill(0, 0, 0);
    textSize(20);
    text("slope = " + approxSlope, 390, 23);
}
