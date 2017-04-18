//Moving No Flash Ball
var counter = 0; //declare counter to be 0
var balldir = false; //declaring balldir as a variable. can set to true or false.
var bgColor = "pink";
var eColor = 0;                    //will change in if statement
function setup() {
  createCanvas(381,400);
  eColor = color(235, 100, 15); }

function draw() {
//STYLES
  //noStroke();
  strokeWeight(2);
    //stroke("indigo")
  background(bgColor);
  fill(eColor);
  console.log(counter);

  var mapX = map(mouseX, 0, width, 0, 381);
  var mapY = map(mouseY, 0, height, 0, 400);


if(mouseY > 0 && mouseY < 200){ background("seashell");}
if(mouseY > 200 && mouseY < 400) { background("darksalmon");}

line(0, 200, 400, 200);

fill("navy");
ellipse(190, mapY, 100, 100);
//ellipse(mapX, mapY, 100, 100); //follows cursor
}
