var a = [50, 50];
var b = [100, 100];
var slope = -1;
var approxSlope = -1;

var drawGrid = function() {
    stroke(209, 209, 209);
    for (var i = 0; i < 440; i += 20) {
        line(i, -1, i, 402);
        line(-1, i, 401, i);
    }
    stroke(0, 0, 0);
    line(200, 0, 200, 400);
    line(0, 200, 400, 200);
   
};

var drag = function() {
if (mouseIsPressed) {
    var aDist = sqrt(sq(a[0]-mouseX)+sq(a[1]-mouseY));
    var bDist = sqrt(sq(b[0]-mouseX)+sq(b[1]-mouseY));
    if (aDist < bDist && aDist < 15) {
        a = [mouseX, mouseY];
    }
    if (bDist < aDist && bDist < 15) {
        b = [mouseX, mouseY];   
    }
}
};

var findSlope = function() {
    slope = (a[1] - b[1]) / (a[0] - b[0]);
    approxSlope = round(slope * 1000) / 1000;
};

var drawLine = function() {
    stroke(0, 114, 214);
    var x1 = a[0]-1000;
    var x2 = a[0]+1000;
    var y1 = a[1]-(1000*slope);
    var y2 = a[1]+(1000*slope);
    line(x1, y1, x2, y2);
};

var draw = function() {
    background(255, 255, 255);
    drawGrid();
    drag();
    findSlope();
    fill(0, 255, 111);
    drawLine();
    stroke(0, 0, 0);
    ellipse(a[0], a[1], 10, 10);
    ellipse(b[0], b[1], 10, 10);
    fill(0, 0, 0);
    textSize(20);
    text("slope = " + approxSlope, 251, 23);
};
