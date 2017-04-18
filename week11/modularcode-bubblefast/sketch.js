var bubbleX = 0;
var bubbleY = 200;
var bubbleSize = 125;

function setup()
{
  createCanvas(400, 400);
}

function draw()
{
  background(245);
  display();
  move();
  console.log("check Position"+checkPos());
  var checking = checkPos();
  if (bubbleX > width){
    bubbleX = 0;}

  if(checking == true){
    bubbleX = 0;}

  if(mouseIsPressed) {
    moveFaster(10);
    //mouseIsPressed is a built in function that runs as long as the mouse is pressed
    //meanwhile mousePressed only runs once
  }
}

function display(){
  fill("cyan");
  strokeWeight(10);
  ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);
}

function move() {
  bubbleX++;
}

function moveFaster(howFast) {
  bubbleX = bubbleX + howFast;
}

function checkPos(){
  if(bubbleX > width) {
    return true ; //makes bubbleX increase, animating ball
  } //check Pos will either be true or false
  else{
    return false; }
    //returns mean the function will produce something back to you
    //you can return a variable, a script, a string
}

function bubble(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  //this refers to to the current object you are talking about.
}
