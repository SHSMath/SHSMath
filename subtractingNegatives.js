var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");

//store the amount of negatives
var negAmt = 1;
//store the amount of positives
var posAmt = 1;
//the vertical position of the balloons
var y = 300;

var run = setInterval(animate, 50);


//adds 1 to the negative amount
function addNeg() {
  if (negAmt < 6) {
    negAmt += 1;
  }
}
//subtracts 1 from the negative amount
function subtNeg() {
  if (negAmt > 1) {
    negAmt -= 1;
  }
}
//adds 1 to the positive amount
function addPos() {
  if (posAmt < 6) {
    posAmt += 1;
  }
}
//subtracts 1 from the positive amount
function subtPos() {
  if (posAmt > 1) {
    posAmt -= 1;
  }
}
//calculates the new position of the balloons
function moveBalloons() {
  y += 2*(negAmt - posAmt);
  if (y > 450) {y = 450;}
  if (y < 201) {y = 201;}
}
//draws a balloon at a specific x position
function drawBalloon(x) {
  ctx.fillStyle = "lightgreen";
  ctx.beginPath();
  //draws the string
  ctx.moveTo(x, y - 100);
  ctx.lineTo(500, y);
  ctx.stroke();
  //draws the circle
  ctx.beginPath();
  ctx.arc(x, y - 150, 50, 0, 2*Math.PI);
  //draws the knot
  ctx.moveTo(x, y - 100);
  ctx.lineTo(x - 10, y - 90);
  ctx.lineTo(x + 10, y - 90);
  ctx.lineTo(x, y - 100);
  //fill and outline balloon and knot
  ctx.fill();
  ctx.stroke();
  //draws the plus sign
  ctx.fillStyle = "black";
  ctx.font = "60px sans-serif";
  ctx.fillText("+", x - 17, y - 128);
}
//draws a box at a specific x position
function drawWeight(x) {
  ctx.fillStyle = "#ffb042";
  ctx.beginPath();
  //draws the rectangle
  ctx.fillRect(x, y + 100, 50, 50);
  ctx.strokeRect(x, y + 100, 50, 50);
  //draws the string
  ctx.moveTo(x + 25, y + 100);
  ctx.lineTo(500, y);
  ctx.stroke();
  //draws the minus sign
  ctx.fillStyle = "black";
  ctx.font = "60px sans-serif";
  ctx.fillText("-", x + 14, y + 140);
}
//calculates the positions of the balloons
//calculates the postions of the boxes
function drawLocations() {
  ctx.clearRect(0, 0, 1000, 600);
  for (var i = 0; i < posAmt; i++) {
    var x = 450 - (((posAmt / 2) - (i + 1)) * 100);
    drawBalloon(x);
  }
  
  for (i = 0; i < negAmt; i++) {
    x = 450 - (((negAmt / 2) - (i + 1)) * 50);
    drawWeight(x);
  }
}

function sum() {
  var sum = posAmt - negAmt;
  ctx.font = "50px sans-serif";
  ctx.fillText("Sum: " + sum, 800, 200);
}
//one function that calls moveBalloons and drawLocations.
function animate() {
  moveBalloons();
  drawLocations();
  sum();
}