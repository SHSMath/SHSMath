var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
var x = 0; //x is the x in the equation
var leftCoeff = 0; //coefficient on left side of equation
var rightCoeff = 0; //coefficient on right side of equation
var leftConst = 0; //constant on left side of equation
var rightConst = 0; //constant on right side of equation
var sign = 1; //switches from 1 to -1 randomly


function  runscale() {
    document.getElementById("solved").style.display = "none";
    generateEquation();
    drawScale();
}
    
function generateEquation() {
    x = Math.floor(Math.random() * 10 + 1);//x is rnd 1-10
    maybeNegative();
    x = x * sign;//maybe make x negative
    leftCoeff = Math.floor(Math.random() * 10);//coeff is rnd 0-9
    maybeNegative();
    leftCoeff = leftCoeff * sign;//maybe make coeff negative
    leftConst = Math.floor(Math.random() * 10);//constant is rnd 0-9
    maybeNegative();
    leftConst = leftConst * sign;//maybe make constant negative
    rightCoeff = Math.floor((x*leftCoeff + leftConst) / x);
    //rightCoeff is the biggest it can possibly be
    rightConst = (x*leftCoeff + leftConst) - (x*rightCoeff);
    //rightConst is whatever is left over to make everything equal.
    if (leftCoeff == rightCoeff) {
        generateEquation();
    }
}
    
function maybeNegative() {
    var negative = Math.floor(Math.random() * 2); //random 0 or 1
    //if "negative" is 0, make x negative
    if (negative === 0) {
        sign = -1;
    }
    if (negative == 1) {
        sign = 1;
    }
}
    
function drawScale() {
    //draws the scale backdrop
    //clear canvas
    ctx.clearRect(0, 0, 600, 300);

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(200, 270, 200, 30);//base of scale
    ctx.fillRect(288, 240, 24, 50);//vertical pole
    ctx.arc(300, 230, 20, 0, 2.1*Math.PI);//circle on top
    ctx.fill();

    ctx.fillRect(80, 225, 440, 12);//horizontal bar
        
    ctx.fillRect(30, 200, 140, 5);//left pad
    ctx.fillRect(95, 200, 10, 30);//left vertical
    
    ctx.moveTo(100, 225);
    ctx.arc(100, 230, 10, 0, 2.1*Math.PI);//circle on left end
    ctx.fill();
        
    ctx.fillRect(430, 200, 140, 5);//right pad
    ctx.fillRect(495, 200, 10, 30);//right vertical
    
    ctx.moveTo(100, 225);
    ctx.arc(500, 230, 10, 0, 2.1*Math.PI);//circle on right end
    ctx.fill();
    drawEquation();
    checkForSolution();
}

//draws boxes for the positive x's
//xloc and yloc are created in the drawEquation function
function drawX(xloc, yloc) {
    ctx.fillStyle = "#93fa9c";
    ctx.fillRect(xloc, yloc, 20, 15);
    ctx.strokeRect(xloc, yloc, 20, 15);
    ctx.fillStyle = "black";
    ctx.fillText("X", xloc + 6, yloc + 13);
}

//draws boxes for the positive 1's
//xloc and yloc are created in the drawEquation function
function draw1(xloc, yloc) {
    ctx.fillStyle = "#a5e2fa";
    ctx.fillRect(xloc, yloc, 15, 15);
    ctx.strokeRect(xloc, yloc, 15, 15);
    ctx.fillStyle = "black";
    ctx.fillText("1", xloc + 3, yloc + 13);
}

//draws balloons for the negative x's
//xloc and yloc are created in the drawEquation function
//strx is the starting position of the balloon string
function drawNegX(xloc, yloc, strX) {
    ctx.fillStyle = "#ffc05c";
    ctx.beginPath();
    ctx.moveTo(strX, 200);
    ctx.lineTo(xloc, yloc);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(xloc, yloc, 11, 0, 2*Math.PI);//circle on left end
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.fillText("-X", xloc - 9, yloc + 5);
}

//draws balloons for the negative 1's
//xloc and yloc are created in the drawEquation function
//strx is the starting position of the balloon string
function drawNeg1(xloc, yloc, strX) {
    ctx.fillStyle = "#ff6169";
    ctx.beginPath();
    ctx.moveTo(strX, 200);
    ctx.lineTo(xloc, yloc);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(xloc, yloc, 10, 0, 2*Math.PI);//circle on left end
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.fillText("-1", xloc - 7, yloc + 5);
}

function drawEquation() {
    var i; //iteration
    var x; //x pos of box or balloon
    var y; //y pos of box or balloon
    var strx; //starting postition of balloon string
    //write equation at top of canvas
    ctx.font = "20px san-serif";
    ctx.fillText(leftCoeff + "X + " + leftConst + " = " + rightCoeff + "X + " +rightConst, 225, 25);

    //loop through and create wide boxes to represent X's
    //create narrow boxes to represent ones
    //if leftCoeff is positive put boxes above the left pad of the scale
    //if leftCoeff is negative, put them under the pad
    //center of left pad is x-200, y-40
    //center of right pad is x+200, y-40
    ctx.font = "15px sans-serif";
    
    //draw boxes for x's on left pad
    if (leftCoeff > 0) {
        for (i = 0; i < Math.abs(leftCoeff); i++) {
            x = (i % 3) * 20; //stack is max 3 boxes wide
            y = Math.floor(i / 3) * 15; //subt 15 from yloc every 3 boxes
            drawX(75 - x, 185 - y);
        }
    }
    //draw balloons for neg. x's on left pad
    if (leftCoeff < 0) {
        strx = 55;
        for (i = 0; i < Math.abs(leftCoeff); i++) {
            x = (i % 3) * 22; //cluster is max 3 balloons wide
            y = Math.floor(i / 3) * 22; //subt 20 from yloc every 3 balloons
            drawNegX(40 + x, 150 - y, strx);
        }
    }

    //draw boxes for 1's on left pad
    if (leftConst > 0) {
        for (i = 0; i < Math.abs(leftConst); i++) {
            x = (i % 4) * 15; //stack is max 3 boxes wide
            y = Math.floor(i / 4) * 15; //subt 15 from yloc every 3 boxes
            draw1(100 + x, 185 - y);
        }
    }
    
    //draw balloons for neg. 1's on left pad
    if (leftConst < 0) {
        strx = 150;
        for (i = 0; i < Math.abs(leftConst); i++) {
            x = (i % 3) * 20; //stack is max 3 boxes wide
            y = Math.floor(i / 3) * 20; //subt 20 from yloc every 3 boxes
            drawNeg1(130 + x, 150 - y, strx);
        }
    }
    
    //draw boxes for x's on right pad
    if (rightCoeff > 0) {
        for (i = 0; i < Math.abs(rightCoeff); i++) {
            x = (i % 3) * 20; //stack is max 3 boxes wide
            y = Math.floor(i / 3) * 15; //subt 15 from yloc every 3 boxes
            drawX(475 - x, 185 - y);
        }
    } 
    
    //draw balloons for neg. x's on right pad
    if (rightCoeff < 0) {
        strx = 450;
        for (i = 0; i < Math.abs(rightCoeff); i++) {
            x = (i % 3) * 22; //cluster is max 3 balloons wide
            y = Math.floor(i / 3) * 22; //subt 20 from yloc every 3 balloons
            drawNegX(430 + x, 150 - y, strx);
        }
    }
  
    //draw boxes for 1's on right pad    
    if (rightConst > 0) {
        for (i = 0; i < Math.abs(rightConst); i++) {
            x = (i % 4) * 15; //stack is max 3 boxes wide
            y = Math.floor(i / 4) * 15; //subt 15 from yloc every 3 boxes
            draw1(500 + x, 185 - y);
        }
    }
  
    //draw balloons for neg. 1's on right pad
    if (rightConst < 0) {
        strx = 550;
        for (i = 0; i < Math.abs(rightConst); i++) {
            x = (i % 3) * 20; //stack is max 3 boxes wide
            y = Math.floor(i / 3) * 20; //subt 20 from yloc every 3 boxes
            drawNeg1(530 + x, 150 - y, strx);
        }
    }
}



function addX() {
    leftCoeff += 1;
    rightCoeff += 1;
    drawScale();
}

function subtractX() {
    leftCoeff -= 1;
    rightCoeff -= 1;
    drawScale();
}

function add1() {
    leftConst += 1;
    rightConst += 1;
    drawScale();
}

function subtract1() {
    leftConst -= 1;
    rightConst -= 1;
    drawScale();
}


function displayquotients() {
    document.getElementById("inputamount").style.display = "inline";
}

function divideby(div) {
    if (leftCoeff % div == 0 && leftConst % div == 0 && rightCoeff % div == 0 && rightConst % div == 0) {
        leftCoeff /= div;
        leftConst /= div;
        rightCoeff /= div;
        rightConst /= div;
        drawScale();
        document.getElementById("inputamount").style.display = "none";
    }
    else {
        document.getElementById("badinput").style.display = "inline";
    }
}

function tryagain() {
    document.getElementById("badinput").style.display = "none";
}

function canceldivision() {
    document.getElementById("inputamount").style.display = "none";
}

function checkForSolution() {
  if (leftCoeff === 0 && rightCoeff === 1 && rightConst === 0) {
    solved();
  }
  if (leftCoeff === 1 && rightCoeff === 0 && leftConst === 0) {
    solved();
  }
}

function solved() {
    document.getElementById("solved").style.display = "inline";
    document.getElementById("solution").innerHTML = "X = " + x;
}
