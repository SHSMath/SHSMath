function setup() {
  createCanvas(600, 600);
}

var a = [120, 240];
var b = [300, 120];
var slope = -1;
var approxSlope = -1;
var yintercept;
var xintercept;

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


function drawDots() {
    fill(0, 255, 111);
    stroke(0, 0, 0);
    ellipse(a[0], a[1], 10, 10);
    ellipse(b[0], b[1], 10, 10);
}

function drawXInt() {
  var xInt = (300-a[1])/slope + a[0];
  fill(0, 0, 255);
  stroke(0, 0, 0);
  ellipse(xInt, 300, 10, 10);
  xintercept = (300 - xInt) / 30;
  xintercept = round(xintercept*100)/100;
  text("(" + xintercept + ", 0)", xInt, 285);
}

function drawYInt() {
  var yInt = slope*(300-a[0])+a[1];
  fill(0, 0, 255);
  stroke(0, 0, 0);
  ellipse(300, yInt, 10, 10);
  yintercept = (300 - yInt) / 30;
  yintercept = round(yintercept*100)/100;
  text("(0, " + yintercept + ")", 308, yInt);
}

function writeSlope() {
  fill(0, 0, 0);
  textSize(20);
  text("slope = " + approxSlope, 390, 23);
}

function draw() {
    background(255, 255, 255);
    drawGrid();
    drag();
    findSlope();
    drawLine();
    drawYInt();
    drawXInt();
    drawDots();
    writeSlope();
}
