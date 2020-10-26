var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(400, 400);
        frameRate(30);

var cannonX = 191;

var blastX = [];

var blastY = [];

var bulletsFired = 0;


var invadersX = [];

var invadersY = [];


var left = "UP";

var right = "UP";

var space = "UP";


var leftX;

var rightX;


var level = 0;

var speed = 2;

var game = "on";

var bonus = "no";

var score = 0;


var newLevel = function() {

//create invaders to start

for (var i = 0; i < 5; i++) {

	var tempX = i * 50;

	invadersX[i] = tempX;

	invadersY[i] = 100;

}

for (var i = 5; i < 10; i++) {

	var tempX = (i - 5) * 50;

	invadersX[i] = tempX;

	invadersY[i] = 60;

}

for (var i = 10; i < 15; i++) {

	var tempX = (i - 10) * 50;

	invadersX[i] = tempX;

	invadersY[i] = 20;

}

for (var i = 15; i < 20; i++) {

	var tempX = (i - 15) * 50;

	invadersX[i] = tempX;

	invadersY[i] = -20;

}

level = level + 1;

bulletsFired = 0;

leftX = invadersX[0];

rightX = invadersX[4];

speed = 2 * level;

game = "on";

bonus = "no";

};

newLevel();


draw = function() {


	background(0, 0, 0);

    

	//draw invaders

 	for (var i = 0; i < invadersX.length; i++) {

     	fill(247, 255, 0);

     	rect(invadersX[i], invadersY[i], 33, 24);

     	fill(0, 0, 0);

     	noStroke();

     	rect(invadersX[i] + 0, invadersY[i] + 0, 3, 3);

     	rect(invadersX[i] + 0, invadersY[i] + 3, 3, 3);

     	rect(invadersX[i] + 0, invadersY[i] + 6, 3, 3);

     	rect(invadersX[i] + 0, invadersY[i] + 9, 3, 3);

     	rect(invadersX[i] + 0, invadersY[i] + 21, 3, 3);

     	rect(invadersX[i] + 30, invadersY[i] + 0, 3, 3);

     	rect(invadersX[i] + 30, invadersY[i] + 3, 3, 3);

     	rect(invadersX[i] + 30, invadersY[i] + 6, 3, 3);

     	rect(invadersX[i] + 30, invadersY[i] + 9, 3, 3);

     	rect(invadersX[i] + 30, invadersY[i] + 21, 3, 3);

     	rect(invadersX[i] + 3, invadersY[i] + 0, 3, 3);

     	rect(invadersX[i] + 3, invadersY[i] + 3, 3, 3);

     	rect(invadersX[i] + 3, invadersY[i] + 6, 3, 3);

     	rect(invadersX[i] + 3, invadersY[i] + 21, 3, 3);

     	rect(invadersX[i] + 3, invadersY[i] + 18, 3, 3);

     	rect(invadersX[i] + 3, invadersY[i] + 15, 3, 3);

     	rect(invadersX[i] + 27, invadersY[i] + 0, 3, 3);

     	rect(invadersX[i] + 27, invadersY[i] + 3, 3, 3);

     	rect(invadersX[i] + 27, invadersY[i] + 6, 3, 3);

     	rect(invadersX[i] + 27, invadersY[i] + 21, 3, 3);

     	rect(invadersX[i] + 27, invadersY[i] + 18, 3, 3);

     	rect(invadersX[i] + 27, invadersY[i] + 15, 3, 3);

     	rect(invadersX[i] + 6, invadersY[i] + 3, 3, 3);

     	rect(invadersX[i] + 6, invadersY[i] + 21, 3, 3);

     	rect(invadersX[i] + 24, invadersY[i] + 3, 3, 3);

     	rect(invadersX[i] + 24, invadersY[i] + 21, 3, 3);

     	rect(invadersX[i] + 9, invadersY[i] + 0, 3, 3);

     	rect(invadersX[i] + 9, invadersY[i] + 9, 3, 3);

     	rect(invadersX[i] + 9, invadersY[i] + 18, 3, 3);

     	rect(invadersX[i] + 21, invadersY[i] + 0, 3, 3);

     	rect(invadersX[i] + 21, invadersY[i] + 9, 3, 3);

     	rect(invadersX[i] + 21, invadersY[i] + 18, 3, 3);

     	rect(invadersX[i] + 12, invadersY[i] + 0, 3, 3);

     	rect(invadersX[i] + 12, invadersY[i] + 3, 3, 3);

     	rect(invadersX[i] + 12, invadersY[i] + 18, 3, 3);

     	rect(invadersX[i] + 18, invadersY[i] + 0, 3, 3);

     	rect(invadersX[i] + 18, invadersY[i] + 3, 3, 3);

     	rect(invadersX[i] + 18, invadersY[i] + 18, 3, 3);

     	rect(invadersX[i] + 15, invadersY[i] + 0, 3, 3);

     	rect(invadersX[i] + 15, invadersY[i] + 3, 3, 3);

     	rect(invadersX[i] + 15, invadersY[i] + 21, 3, 3);

     	rect(invadersX[i] + 15, invadersY[i] + 18, 3, 3);

 	}

	 

 	//draw cannon

 	fill(0, 255, 38);

 	rect(cannonX, 360, 40, 30);

 	rect(cannonX + 14, 340, 10, 20);


	//draw Score

 	fill(255, 255, 255);

 	textSize(22);

 	text("Score: ", 20, 23);

 	fill(0, 255, 9);

 	text(score, 89, 23);

 	fill(255, 255, 255);

 	text("Bullets Left: " + (50 - bulletsFired), 200, 23);

    

	if (game === "on") {


	if (keyPressed) {

	if (keyCode === 37 && cannonX > 0) {

	cannonX = cannonX - 4;

	}

	if (keyCode === 39 && cannonX < 360) {

	cannonX = cannonX + 4;

	}

	}


	keyReleased = function() {

 	if (keyCode === 32 && blastX.length < 1 && bulletsFired < 50) {

  	append(blastX, cannonX + 20);

  	append(blastY, 340);

  	bulletsFired = bulletsFired + 1;

	}

	};

    

	//move invaders

	for (i = 0; i < invadersX.length; i++) {

    	invadersX[i] = invadersX[i] + speed;

    	}

    	leftX = leftX + speed;

    	rightX = rightX + speed;

	if (rightX >= 372 || leftX <= 0) {

    	speed = -speed;

    	for(i = 0; i < invadersY.length; i++) {

        	invadersY[i] = invadersY[i] + 8;

    	}

	}

	 

 	//draw blasts

 	fill(255, 255, 255);

 	for (i = 0; i < blastX.length; i++) {

    	ellipse(blastX[i], blastY[i], 4, 6);

    	blastY[i] -= 18;

    	if (blastY[i] < -5) {

        	var bX2 = subset(blastX, 0, i);

        	var bX3 = subset(blastX, i + 1, blastX.length);

        	blastX = concat(bX2, bX3);

       	 

        	var bY2 = subset(blastY, 0, i);

        	var bY3 = subset(blastY, i + 1, blastY.length);

        	blastY = concat(bY2, bY3);

    	}

 	}

	 

	 

 	//check for collisions

 	for (i = 0; i < blastX.length; i++) {

     	for (var j = 0; j < invadersX.length; j++) {

         	if(blastX[i] > invadersX[j] -2 && blastX[i] < invadersX[j] + 35 && blastY[i] > invadersY[j] && blastY[i] < invadersY[j] + 26) {

            	 

        	var bX2 = subset(blastX, 0, i);

        	var bX3 = subset(blastX, i + 1, blastX.length);

        	blastX = concat(bX2, bX3);

       	 

        	var bY2 = subset(blastY, 0, i);

        	var bY3 = subset(blastY, i + 1, blastY.length);

        	blastY = concat(bY2, bY3);

       	 

        	var invX2 = subset(invadersX, 0, j);

        	var invX3 = subset(invadersX, j + 1, invadersX.length);

        	invadersX = concat(invX2, invX3);

       	 

        	var invY2 = subset(invadersY, 0, j);

        	var invY3 = subset(invadersY, j + 1, invadersY.length);

        	invadersY = concat(invY2, invY3);

       	 

        	score += 50 * level;

         	}

     	}

 	}

 	if (invadersY[0] > 314) {

     	game = "over";

 	}

 	if (invadersX.length === 0) {

     	game = "won";

    	}

	}

	if (game === "over") {

	fill(255, 32, 3);

 	textSize(22);

 	text("GAME OVER", 120, 54);

	}

    

	if (game === "won") {

	if (bonus === "no") {

    	score = score + (50 - bulletsFired) * 5 * level;

    	}

    	text("Level " + (level + 1), 167, 100);

    	fill(0, 136, 255);

    	text("Click to Start", 145, 140);

    	bonus = "yes";

    	mouseClicked = function() {

    	if (game === "won") {

    	newLevel();

    	}

    	};

	}

};
}};

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas");
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc);