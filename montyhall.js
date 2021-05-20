var win;

var choice = 0;
var stage = 1;

var door1 = "closed";
var door2 = "closed";
var door3 = "closed";

function setup() {
  createCanvas(800, 800);
  win = floor(random(1, 4));
}

function draw1() {
    if(door1 === "closed") {
    fill(199, 143, 40);
    rect(52, 176, 200, 400);
    }
}

function draw2() {
    if(door2 === "closed") {
    fill(199, 143, 40);
    rect(308, 176, 200, 400);
    }
}

function draw3() {
    if (door3 === "closed") {
    fill(199, 143, 40);
    rect(558, 176, 200, 400);
    }
}

function drawCheck() {
    var x = -200;
    if (choice === 1) {
        x = 100;
    }
    if (choice === 2) {
        x = 360;
    }
    if (choice === 3) {
        x = 610;
    }

    stroke(230, 215, 3);
    strokeWeight(10);
    line(x, 300, x + 60, 360);
    line(x + 60, 360, x + 120, 240);
    stroke(0, 0, 0);
    strokeWeight(1);
}

function stage1(){
  if(stage === 1) {
     fill(255, 3, 3);
     textSize(66);
     text("Choose a door.", 174, 98);
     mouseClicked = function() {
    if(mouseX > 52 && mouseX < 252 && mouseY > 176 && mouseY < 576) {
    choice = 1;
    stage = 2;
    }
    if(mouseX > 308 && mouseX < 508 && mouseY > 176 && mouseY < 576) {
    choice = 2;
    stage = 2;
    }
    if(mouseX > 558 && mouseX < 758 && mouseY > 176 && mouseY < 576) {
    choice = 3;
    stage = 2;
    }
    };
    }
}

function stage2() {
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
       t = floor(random(1,3));
       if (t === 1) {
           door1 = "open";
        }
       if (t === 2) {
           door3 = "open";
        }
   }

    if(win === 3 && choice === 3) {
       t = floor(random(1,3));
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
}

function stage3() {
    if(stage === 3) {
    fill(255, 3, 3);
    textSize(66);
    text("Stay or Switch?", 174, 98);

     mouseClicked = function() {
    if(mouseX > 52 && mouseX < 252 && mouseY > 176 && mouseY < 576 && door1 === "closed" && stage === 3) {
    choice = 1;
    stage = 4;
    }

    if(mouseX > 308 && mouseX < 508 && mouseY > 176 && mouseY < 576 && door2 === "closed" && stage === 3) {
    choice = 2;
    stage = 4;
    }

    if(mouseX > 558 && mouseX < 758 && mouseY > 176 && mouseY < 576 && door3 === "closed" && stage === 3)  {
    choice = 3;
    stage = 4;
    }
    };
    }
}


function stage4() {
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
    textSize(66);
    text("You have chosen " + str, 32, 98);
  }
}


function draw() {
    background(110, 201, 240);
    fill(255, 255, 255);
    rect(52, 176, 200, 400);
    rect(308, 176, 200, 400);
    rect(558, 176, 200, 400);
    fill(237, 125, 50);
    text("1", 130, 638);
    text("2", 398, 638);
    text("3", 646, 638);
    fill(8, 150, 65);

    if(win === 1){
        textSize(112);
        text("$$$", 60, 464);
    }

    if(win === 2){
        textSize(112);
        text("$$$", 318, 464);
    }

    if(win === 3){
        textSize(112);
        text("$$$", 566, 464);
    }

    draw1();
    draw2();
    draw3();
    stage1();
    stage2();
    stage3();
    stage4();
    drawCheck();

}
