var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
var x = 0; //x is the x in the equation
var leftCoeff = 0; //coefficient on left side of equation
var rightCoeff = 0; //coefficient on right side of equation
var leftConst = 0; //constant on left side of equation
var rightConst = 0; //constant on right side of equation
var sign = 1; //switches from 1 to -1 randomly


function  runscale() {

    generateEquation();
    //console.log(x, leftCoeff, leftConst, rightCoeff, rightConst);
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
    //clear canvas
    ctx.clearRect(0, 0, 600, 300);

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(200, 270, 200, 30);//base of scale
    ctx.fillRect(288, 85, 24, 190);//vertical pole
    ctx.arc(299, 75, 20, 0, 2.1*Math.PI);//circle on top
    ctx.fill();
       
    ctx.moveTo(100, 80);//left side of horizontal bar
    ctx.lineTo(500, 80);//right side of horizontal bar
        
    ctx.moveTo(30, 200);//start left pad
    ctx.lineTo(170, 200);//end left pad
        
    ctx.moveTo (170, 200);
    ctx.lineTo(100, 80);//line from end left pad to left side of horizontal bar
    ctx.lineTo(30, 200);//line from left side of horizontal bar to start left pad
        
    ctx.moveTo(570, 200);//start right pad
    ctx.lineTo(430, 200);//end right pad
        
    ctx.lineTo(500, 80);//line from end right pad to right side of horizontal bar
    ctx.lineTo(570, 200);//line from right side of horizontal bar to start right pad
    ctx.stroke();
    
    drawEquation();
}

function drawX(positive, adjust, xloc, yloc, i) {
    var yOffset = -45 + positive * i * 15 + adjust + positive * 10;
    ctx.fillStyle = "white";
    ctx.fillRect(xloc, yloc + yOffset, 20, 15);
    ctx.strokeRect(xloc, yloc + yOffset, 20, 15);
    ctx.fillStyle = "black";
    ctx.fillText("X", xloc + 4, yloc + 13 + yOffset);
  }
function draw1(positive, adjust, xloc, yloc, i) {
    yOffset = -45 + positive * i * 15 + adjust + positive * 10;
    ctx.fillStyle = "white";
    ctx.fillRect(xloc, yloc + yOffset, 10, 15);
    ctx.strokeRect(xloc, yloc + yOffset, 10, 15);
    ctx.fillStyle = "black";
    ctx.fillText("1", xloc, yloc + 13 + yOffset);
}
function drawEquation() {
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
    ctx.fillStyle = "white";
    var positive = -1;
    var adjust = 0; //accounts for the box's height
    
    //if there are less than 5 boxes there is only 1 stack
    if (Math.abs(leftCoeff) <= 5) {
        if (leftCoeff < 0) {positive = 1; adjust = -5;}
        for (var i = 0; i < Math.abs(leftCoeff); i++) {
            drawX(positive, adjust, 70, 240, i);
        }
        }
  
    //if there are more than 5 boxes split them into two stacks
    if (Math.abs(leftCoeff) > 5) {
        var copy = leftCoeff;
        if (leftCoeff < 0) {
            positive = 1;
            adjust = -5;
            copy += 5;
        }
        if (leftCoeff > 0) {
            copy -= 5;
        }
        //stack for the first 5 boxes
        for (i = 0; i < 5; i++) {
            yOffset = -45 + positive * i * 15 + adjust + positive * 10;
            drawX(positive, adjust, 68, 240, i);
        }
        //stack for the leftover boxes
        for (i = 0; i < Math.abs(copy); i++) {
            yOffset = -45 + positive * i * 15 + adjust + positive * 10;
            drawX(positive, adjust, 90, 240, i);
        }
    }
    

    //create positions for the left ones
    positive = -1;
    adjust = 0;
    //if there are less than 5 ones put them in one stack
    if(Math.abs(leftConst) <= 5) {
        if (leftConst < 0) {positive = 1; adjust = -5;}
        for (i = 0; i < Math.abs(leftConst); i++) {
            draw1(positive, adjust, 120, 240, i);
        }
        }
    //if there are more than 5 ones split them into two stacks
    if(Math.abs(leftConst) > 5) {
        copy = leftConst;
        if (leftConst < 0) {
            positive = 1;
            adjust = -5;
            copy += 5;
        }
        if (leftConst > 0) {
            copy -= 5;
        }
        for (i = 0; i < 5; i++) {
            draw1(positive, adjust, 120, 240, i);
            }
        for (i = 0; i < Math.abs(copy); i++) {
            draw1(positive, adjust, 132, 240, i);
            }
    }
    
    //create positions for Right Xs
    positive = -1;
    adjust = 0;
    
    if (Math.abs(rightCoeff) <= 5) {
        if (rightCoeff < 0) {positive = 1; adjust = -5;}
        for (i = 0; i < Math.abs(rightCoeff); i++) {
            yOffset = -45 + positive * i * 15 + adjust + positive * 10;
                drawX(positive, adjust, 470, 240, i);
        }
    }
    if (Math.abs(rightCoeff) > 5) {
        copy = rightCoeff;
        if (rightCoeff < 0) {
            positive = 1;
            adjust = -5;
            copy += 5;
        }
        if (rightCoeff > 0) {
            copy -= 5;
        }
        for (i = 0; i < 5; i++) {
            yOffset = -45 + positive * i * 15 + adjust + positive * 10;
              drawX(positive, adjust, 468, 240, i);
        }
        for (i = 0; i < Math.abs(copy); i++) {
            yOffset = -45 + positive * i * 15 + adjust + positive * 10;
            drawX(positive, adjust, 490, 240, i);
        }
    }
    
    
    
    //create positions for Right ones
    positive = -1;
    adjust = 0;
    
    if (Math.abs(rightConst) <= 5) {
        if (rightConst < 0) {positive = 1; adjust = -5;}
        for (i = 0; i < Math.abs(rightConst); i++) {
            draw1(positive, adjust, 520, 240, i);
        }
    }
    if (Math.abs(rightConst) > 5) {
        copy = rightConst
        if (rightConst < 0) {
            positive = 1;
            adjust = -5;
            copy += 5;
        }
        if (rightConst > 0) {
            copy -= 5;
        }
        for (i = 0; i < 5; i++) {
            draw1(positive, adjust, 520, 240, i);
        }
        for (i = 0; i < Math.abs(copy); i++) {
            draw1(positive, adjust, 532, 240, i);
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





