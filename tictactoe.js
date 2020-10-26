var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(400, 400);
        frameRate(30);

//Each square is given a title.

//each square can be in 1 of 3 states: blank, o, or x.

//each square starts in the blank state.

var grid1 = "blank";

var grid2 = "blank";

var grid3 = "blank";

var grid4 = "blank";

var grid5 = "blank";

var grid6 = "blank";

var grid7 = "blank";

var grid8 = "blank";

var grid9 = "blank";


//cpu stores the computer's square choice.

var cpu;


//selection tells the program whether or not the computer has made its choice yet.

var selection = "no";


//this is the code that will run after the user selects a square.

mouseClicked = function() {

    //set selection to no because the computer has not made a move yet.

    selection = "no";

    //if you clicked in grid 1 and that grid is blank, the state of grid 1 changes to x.

    if (mouseX > 0 && mouseX < 133 && mouseY > 0 && mouseY < 133 && grid1 === "blank"){

        grid1 = "x";

    }

    //if you click in grid 2 and that grid is blank, the state of grid 2 changes to x.

    if (mouseX > 133 && mouseX < 266 && mouseY > 0 && mouseY < 133 && grid2 === "blank"){

        grid2 = "x";

    }

    if (mouseX > 266 && mouseX < 400 && mouseY > 0 && mouseY < 133 && grid3 === "blank"){

        grid3 = "x";

    }

    if (mouseX > 0 && mouseX < 133 && mouseY > 133 && mouseY < 266 && grid4 === "blank"){

        grid4 = "x";

    }

    if (mouseX > 133 && mouseX < 266 && mouseY > 133 && mouseY < 266 && grid5 === "blank"){

        grid5 = "x";

    }

    if (mouseX > 266 && mouseX < 400 && mouseY > 133 && mouseY < 266 && grid6 === "blank"){

        grid6 = "x";

    }

    if (mouseX > 0 && mouseX < 133 && mouseY > 266 && mouseY < 400 && grid7 === "blank"){

        grid7 = "x";

    }

    if (mouseX > 133 && mouseX < 266 && mouseY > 266 && mouseY < 400 && grid8 === "blank"){

        grid8 = "x";

    }

    if (mouseX > 266 && mouseX < 400 && mouseY > 266 && mouseY < 400 && grid9 === "blank"){

        grid9 = "x";

    }

    //this code runs over and over until the computer has chosen a blank square.

    while (selection === "no") {

    //select a random number from 1 to 9

    cpu = floor(random(1, 10));

        //if the computer chose grid 1 and grid 1 is blank, the state of grid 1 becomes o.

        if (cpu === 1 && grid1 === "blank") {

            grid1 = "o";

        //selection becomes yes so the loop will end and the user can make another choice

            selection = "yes";

        }

        if (cpu === 2 && grid2 === "blank") {

            grid2 = "o";

            selection = "yes";

        }

        if (cpu === 3 && grid3 === "blank") {

            grid3 = "o";

            selection = "yes";

        }

        if (cpu === 4 && grid4 === "blank") {

            grid4 = "o";

            selection = "yes";

        }

        if (cpu === 5 && grid5 === "blank") {

            grid5 = "o";

            selection = "yes";

        }

        if (cpu === 6 && grid6 === "blank") {

            grid6 = "o";

            selection = "yes";

        }

        if (cpu === 7 && grid7 === "blank") {

            grid7 = "o";

            selection = "yes";

        }

        if (cpu === 8 && grid8 === "blank") {

            grid8 = "o";

            selection = "yes";

        }

        if (cpu === 9 && grid9 === "blank") {

            grid9 = "o";

            selection = "yes";

        }

    }

};


//this is where the game is actually drawn.

draw = function() {

//drawing the grid.

fill(255, 255, 255);

rect(0, 0, 133, 133);

rect(133, 0, 133, 133);

rect(266, 0, 132, 133);

rect(0, 133, 133, 133);

rect(133, 133, 133, 133);

rect(266, 133, 132, 133);

rect(0, 266, 133, 133);

rect(133, 266, 133, 133);

rect(266, 266, 132, 133);

fill(0, 0, 0);

//draws x's and o's when a box's state is set to x or o.

if (grid1 === "x") {

    textSize(100);

    text("X", 30, 94);

}

if (grid1 === "o") {

    textSize(100);

    text("O", 30, 94);

}

if (grid2 === "x") {

    textSize(100);

    text("X", 168, 94);

}

if (grid2 === "o") {

    textSize(100);

    text("O", 168, 94);

}

if (grid3 === "x") {

    textSize(100);

    text("X", 294, 94);

}

if (grid3 === "o") {

    textSize(100);

    text("O", 294, 94);

}

if (grid4 === "x") {

    textSize(100);

    text("X", 30, 233);

}

if (grid4 === "o") {

    textSize(100);

    text("O", 30, 233);

}

if (grid5 === "x") {

    textSize(100);

    text("X", 168, 233);

}

if (grid5 === "o") {

    textSize(100);

    text("O", 168, 233);

}

if (grid6 === "x") {

    textSize(100);

    text("X", 294, 233);

}

if (grid6 === "o") {

    textSize(100);

    text("O", 294, 233);

}

if (grid7 === "x") {

    textSize(100);

    text("X", 30, 365);

}

if (grid7 === "o") {

    textSize(100);

    text("O", 30, 365);

}

if (grid8 === "x") {

    textSize(100);

    text("X", 168, 365);

}

if (grid8 === "o") {

    textSize(100);

    text("O", 168, 365);

}

if (grid9 === "x") {

    textSize(100);

    text("X", 294, 365);

}

if (grid9 === "o") {

    textSize(100);

    text("O", 294, 365);

}



};

}};

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas");
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc);