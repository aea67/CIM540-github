var bubbleX = 0;
var bubbleY = 200;
var bubbleSize = 125;
var bubble0;
var bubbles = []; //sets up as an array

function setup()
{
  createCanvas(400, 400);
  bubble0 = new bubble(100, 100, 100);  //put in setup so it takes up less space for the computer
  bubble1 = new bubble(200, 200, 200);

  for(var i = 0; i < 100; i++) {
    //sets up a for loop to generate 100 bubbles
    bubbles.push(new bubble(random(width), random(height), random(10,100), random(0, 10)));
    //random(1, 100): gives you random 10 to 99. set in the third place, will igve you random sizes.
  }
  console.log(bubbles.length);
}

function draw() {
  background(245);

  bubbles[0].display;
  for (var i = 0; i < bubbles.length; i++){
    bubbles[i].display();
    //use bubble.length instead of 101 so that if you add 100 more bubbles, the loop still displays all of the buubles.
  bubbles[i].move();
var checkBubble = bubbles[i].CheckPos;
  if (checkBubble == true) {
    bubbles[i].x = 0;}
  }

  if(mouseIsPressed) {
    moveFaster(10);
    //mouseIsPressed is a built in function that runs as long as the mouse is pressed
    //meanwhile mousePressed only runs once
  }
}

function display(){
  fill("cyan");
  stroke("darkcyan")
  strokeWeight(3);
  ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);
  fill("white");
  ellipse(bubbleX+25, bubbleY-25, 10, 10);
}

function move() {
  bubbleX++;
}

function moveFaster(howFast) {
  bubbleX = bubbleX + howFast;
}

function bubble(tempX, tempY, tempDiameter, tempSpeed)
{
  this.x = tempX;
  this.y = tempY;
  this.Diameter = tempDiameter //this. refers to current object
  this.speed = tempSpeed;

  this.r = random(0); //so its just shades of blue and green
  this.g = random(255);
  this.b = random(255);
  this.alpha = random(100,255);

  this.display = function(){
    fill("cyan"); //sets within the object
    
    fill(this.r, this.g, this.b, this.alpha);
    ellipse(this.x, this.y, this.Diameter, this.Diameter);
  }

  this.move = function(){
    this.x = this.x + this.speed;
    //CHECK Position
    this.checkPos = function() {
      if (this.x > width) {
      return true; }
      else{ return false; }
      //makes bubble start over
      }
    }
}
