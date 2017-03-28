//Many Random Face Sizes
var centerX = 0;
var centerY = 0;
var scaling = 3;

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
  stamp(123,123,2);
  //generates one image at 123 x & y, scaled by two
  background(color('hsb(100, 10%, 100%)')); //light green
  for(var i = 0; i < 10; i++) {
    stamp(random(width),random(height), random(0.0,1.0));
    //random(width&height:any number from 0 to 400),
    //random(scales image any number from 0 to 2)
    //generates ten images sizing from 0 to the number
    }
}

function draw() {
}

function stamp(posX, posY, scales) {
  push();
  fill(255);
  strokeWeight(1);

  translate(posX-(scales * centerX), posY-(scales * centerY));
  scale(scales);
//allows drawing to multiply

  //face
  ellipse(centerX, centerY, 100, 100);
  //nose
  ellipse(centerX, centerY + 10, 20, 20);
  //eyes
  ellipse(centerX - 10, centerY - 10, 10, 20);
  ellipse(centerX + 10, centerY - 10, 10, 20);
  rectMode(CENTER);
  rect(centerX, centerY + 30, 50, 15, 5);
  rect(centerX, centerY + 30, 50, 1, 1);

  noFill();
  strokeWeight(4);
  arc(centerX,centerY,100,100, 0,PI)
  strokeWeight(30);
  arc(centerX,centerY,100,100, PI,TWO_PI)

  pop();
  //within push and pop is all of the things that will be manipulated,
  //ie, your complete drawing
}
