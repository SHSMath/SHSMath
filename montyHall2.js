var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(400, 400);
        frameRate(30);
        
        // ProgramCodeGoesHere
        var win = floor(random(1, 4));

var choice = 0;
var stage = 1;

var door1 = "closed";
var door2 = "closed";
var door3 = "closed";

var draw1 = function() {
    if(door1 === "closed") {
    fill(92, 66, 2);
    rect(26, 88, 100, 200);
    }
};

var draw2 = function() {
    if(door2 === "closed") {
    fill(92, 66, 2);
    rect(154, 88, 100, 200);
    }
};

var draw3 = function() {
    if (door3 === "closed") {
    fill(92, 66, 2);
    rect(279, 88, 100, 200);
    }
};

var drawCheck = function() {
    var x = -100;
    if (choice === 1) {
        x = 50;
    }
    if (choice === 2) {
        x = 180;
    }
    if (choice === 3) {
        x = 305;
    }

    stroke(230, 215, 3);
    strokeWeight(10);
    line(x, 150, x + 30, 180);
    line(x + 30, 180, x + 60, 120);
    stroke(0, 0, 0);
    strokeWeight(1);
};

var stage1 = function(){
  if(stage === 1) {
     fill(255, 3, 3);
     textSize(33);
     text("Choose a door.", 87, 49);
     mouseClicked = function() {
    if(mouseX > 26 && mouseX < 126 && mouseY > 88 && mouseY < 288) {
    choice = 1;
    stage = 2;
    }
    if(mouseX > 154 && mouseX < 254 && mouseY > 88 && mouseY < 288) {
    choice = 2;
    stage = 2;
    }
    if(mouseX > 279 && mouseX < 379 && mouseY > 88 && mouseY < 288) {
    choice = 3;
    stage = 2;
    }
    };
    }
};

var stage2 = function() {
  if(stage === 2) {
      stage = 3;
    if(win === 1 && choice === 1) {
       var t = floor(random(1,3));
       if (t === 1) {
           door2 = "open";
        }
       if (t === 2) {
           door3 = "open";
        }
   }
    if(win === 2 && choice === 2) {
       var t = floor(random(1,3));
       if (t === 1) {
           door1 = "open";
        }
       if (t === 2) {
           door3 = "open";
        }
   }

    if(win === 3 && choice === 3) {
       var t = floor(random(1,3));
       if (t === 1) {
           door1 = "open";
       }
       if (t === 2) {
           door2 = "open";
       }
   }

    if(win === 1 && choice === 2) {
       door3 = "open";
   }

   if(win === 1 && choice === 3) {
       door2 = "open";
   }

   if(win === 2 && choice === 1) {
       door3 = "open";
   }

   if(win === 2 && choice === 3) {
       door1 = "open";
   }

   if(win === 3 && choice === 2) {
       door1 = "open";
   }

   if(win === 3 && choice === 1) {
       door2 = "open";
   }
}
};

var stage3 = function() {
    if(stage === 3) {
    fill(255, 3, 3);
    textSize(33);
    text("Stay or Switch?", 87, 49);

     mouseClicked = function() {
    if(mouseX > 26 && mouseX < 126 && mouseY > 88 && mouseY < 288 && door1 === "closed" && stage === 3) {
    choice = 1;
    stage = 4;
    }

    if(mouseX > 154 && mouseX < 254 && mouseY > 88 && mouseY < 288 && door2 === "closed" && stage === 3) {
    choice = 2;
    stage = 4;
    }

    if(mouseX > 279 && mouseX < 379 && mouseY > 88 && mouseY < 288 && door3 === "closed" && stage === 3)  {
    choice = 3;
    stage = 4;
    }
    };
    }
};


var stage4 = function() {
  if (stage === 4) {
   door1 = "open";
   door2 = "open";
   door3 = "open";

   var str;
   if (choice === win) {
       str = "wisely!";
   }

   if (choice !== win) {
       str = "poorly!";
   }

   fill(255, 3, 3);
    textSize(33);
    text("You have chosen " + str, 16, 49);
  }
};


draw = function() {
    background(0, 28, 168);
    fill(255, 255, 255);
    rect(26, 88, 100, 200);
    rect(154, 88, 100, 200);
    rect(279, 88, 100, 200);
    fill(237, 125, 50);
    text("1", 65, 319);
    text("2", 199, 319);
    text("3", 323, 319);
    fill(8, 150, 65);

    if(win === 1){
        textSize(56);
        text("$$$", 30, 232);
    }

    if(win === 2){
        textSize(56);
        text("$$$", 159, 232);
    }

    if(win === 3){
        textSize(56);
        text("$$$", 283, 232);
    }

    draw1();
    draw2();
    draw3();
    stage1();
    stage2();
    stage3();
    stage4();
    drawCheck();

};
    }};

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas");
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc);
