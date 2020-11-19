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
    ctx.clearRect(0, 0, 1200, 600);

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(400, 540, 400, 60);//base of scale
    ctx.fillRect(576, 480, 48, 100);//vertical pole
    ctx.arc(600, 460, 40, 0, 2.1*Math.PI);//circle on top
    ctx.fill();

    ctx.fillRect(160, 450, 880, 24);//horizontal bar
        
    ctx.fillRect(60, 400, 280, 10);//left pad
    ctx.fillRect(190, 400, 20, 60);//left vertical
    
    ctx.moveTo(200, 450);
    ctx.arc(200, 460, 20, 0, 2.1*Math.PI);//circle on left end
    ctx.fill();
        
    ctx.fillRect(860, 400, 280, 10);//right pad
    ctx.fillRect(990, 400, 20, 60);//right vertical
    
    ctx.moveTo(200, 450);
    ctx.arc(1000, 460, 20, 0, 2.1*Math.PI);//circle on right end
    ctx.fill();
    drawEquation();
    checkForSolution();
}

//draws boxes for the positive x's
//xloc and yloc are created in the drawEquation function
function drawX(xloc, yloc) {
    ctx.fillStyle = "#93fa9c";
    ctx.fillRect(xloc, yloc, 40, 30);
    ctx.strokeRect(xloc, yloc, 40, 30);
    ctx.fillStyle = "black";
    ctx.fillText("X", xloc + 12, yloc + 26);
}

//draws boxes for the positive 1's
//xloc and yloc are created in the drawEquation function
function draw1(xloc, yloc) {
    ctx.fillStyle = "#a5e2fa";
    ctx.fillRect(xloc, yloc, 30, 30);
    ctx.strokeRect(xloc, yloc, 30, 30);
    ctx.fillStyle = "black";
    ctx.fillText("1", xloc + 6, yloc + 26);
}

//draws balloons for the negative x's
//xloc and yloc are created in the drawEquation function
//strx is the starting position of the balloon string
function drawNegX(xloc, yloc, strX) {
    ctx.fillStyle = "#ffc05c";
    ctx.beginPath();
    ctx.moveTo(strX, 400);
    ctx.lineTo(xloc, yloc);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(xloc, yloc, 22, 0, 2*Math.PI);//circle on left end
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.fillText("-X", xloc - 18, yloc + 10);
}

//draws balloons for the negative 1's
//xloc and yloc are created in the drawEquation function
//strx is the starting position of the balloon string
function drawNeg1(xloc, yloc, strX) {
    ctx.fillStyle = "#ff6169";
    ctx.beginPath();
    ctx.moveTo(strX, 400);
    ctx.lineTo(xloc, yloc);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(xloc, yloc, 20, 0, 2*Math.PI);//circle on left end
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.fillText("-1", xloc - 14, yloc + 10);
}

function drawEquation() {
    var i; //iteration
    var x; //x pos of box or balloon
    var y; //y pos of box or balloon
    var strx; //starting postition of balloon string
    //write equation at top of canvas
    ctx.font = "40px san-serif";
    ctx.fillText(leftCoeff + "X + " + leftConst + " = " + rightCoeff + "X + " +rightConst, 450, 50);

    //loop through and create wide boxes to represent X's
    //create narrow boxes to represent ones
    //if leftCoeff is positive put boxes above the left pad of the scale
    //if leftCoeff is negative, put them under the pad
    //center of left pad is x-200, y-40
    //center of right pad is x+200, y-40
    ctx.font = "30px sans-serif";
    
    //draw boxes for x's on left pad
    if (leftCoeff > 0) {
        for (i = 0; i < Math.abs(leftCoeff); i++) {
            x = (i % 3) * 40; //stack is max 3 boxes wide
            y = Math.floor(i / 3) * 30; //subt 15 from yloc every 3 boxes
            drawX(150 - x, 370 - y);
        }
    }
    //draw balloons for neg. x's on left pad
    if (leftCoeff < 0) {
        strx = 110;
        for (i = 0; i < Math.abs(leftCoeff); i++) {
            x = (i % 3) * 44; //cluster is max 3 balloons wide
            y = Math.floor(i / 3) * 44; //subt 20 from yloc every 3 balloons
            drawNegX(80 + x, 300 - y, strx);
        }
    }

    //draw boxes for 1's on left pad
    if (leftConst > 0) {
        for (i = 0; i < Math.abs(leftConst); i++) {
            x = (i % 4) * 30; //stack is max 3 boxes wide
            y = Math.floor(i / 4) * 30; //subt 15 from yloc every 3 boxes
            draw1(200 + x, 370 - y);
        }
    }
    
    //draw balloons for neg. 1's on left pad
    if (leftConst < 0) {
        strx = 300;
        for (i = 0; i < Math.abs(leftConst); i++) {
            x = (i % 3) * 40; //stack is max 3 boxes wide
            y = Math.floor(i / 3) * 40; //subt 20 from yloc every 3 boxes
            drawNeg1(260 + x, 300 - y, strx);
        }
    }
    
    //draw boxes for x's on right pad
    if (rightCoeff > 0) {
        for (i = 0; i < Math.abs(rightCoeff); i++) {
            x = (i % 3) * 40; //stack is max 3 boxes wide
            y = Math.floor(i / 3) * 30; //subt 15 from yloc every 3 boxes
            drawX(950 - x, 370 - y);
        }
    } 
    
    //draw balloons for neg. x's on right pad
    if (rightCoeff < 0) {
        strx = 900;
        for (i = 0; i < Math.abs(rightCoeff); i++) {
            x = (i % 3) * 44; //cluster is max 3 balloons wide
            y = Math.floor(i / 3) * 44; //subt 20 from yloc every 3 balloons
            drawNegX(860 + x, 300 - y, strx);
        }
    }
  
    //draw boxes for 1's on right pad    
    if (rightConst > 0) {
        for (i = 0; i < Math.abs(rightConst); i++) {
            x = (i % 4) * 30; //stack is max 3 boxes wide
            y = Math.floor(i / 4) * 30; //subt 15 from yloc every 3 boxes
            draw1(1000 + x, 370 - y);
        }
    }
  
    //draw balloons for neg. 1's on right pad
    if (rightConst < 0) {
        strx = 1100;
        for (i = 0; i < Math.abs(rightConst); i++) {
            x = (i % 3) * 40; //stack is max 3 boxes wide
            y = Math.floor(i / 3) * 40; //subt 20 from yloc every 3 boxes
            drawNeg1(1060 + x, 300 - y, strx);
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
