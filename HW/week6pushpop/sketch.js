//Week 6 HW push pop

var centerX = 0;
var centerY = 0;
var scaling = 5;

function setup() {
  createCanvas(400,400);
  centerX = width/2;
  centerY = height/2;
  //stamp(123,123,2);

  background("mistyrose");
//          0-100 green  (0, 100, 100)red    (0, 0, 0) black ?? IDK
  for(var i = 0; i < 10; i++) {
    stamp(random(width), random(height), random(0.0,1.0));
  }

}

function draw()
{

}

function stamp(posX, posY, scales) {
  push();
  fill(0);
  noStroke();

  translate(posX-(scales * centerX), posY-(scales*centerY));
  scale(scales);


  //face top
  ellipse(200, 200, 171, 171);
  //face bottom(triangle)
  triangle(128,194+52.5,272,194+52.5,200,288+52.5);

  //smile
  stroke(color('hsb(80, 80%, 100%)'));
  strokeWeight(4);
  arc(176+24, 217+52.5+15, 35, 24, 0, PI)

  //eyes
  //eyeleft
  noStroke();
  fill(color('hsb(80, 80%, 100%)'));
  translate(-90,180); //this one is visible
  rotate(-PI/4)
  ellipse(165,200,24,43);
//  eyeright
  translate(410,10); //this one is hiding beneath the head
  rotate(PI/4+(PI/4))
  ellipse(235,200,24,43);
//128 x, 194 y
//272 x, 194 y
//200 x, 288 y
pop();
}
