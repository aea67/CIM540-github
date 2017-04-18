var bubbleX = 0;
var bubbleY = 200;
var bubbleSize = 125;
var bubble0;

function setup()
{
  createCanvas(400, 400);
  bubble0 = new bubble(100, 100, 100);
  //put in setup so it takes up less space for the computer
  bubble1 = new bubble(200, 200, 200);
}

function draw()
{
  background(245);

  bubble0.display();
  bubble0.move();
  var checkBubble = bubble0.checkPos();
    if (checkBubble == true) {
        bubble0.x = 0;}


          bubble1.display();
          bubble1.move();
          var checkBubble = bubble1.checkPos();
            if (checkBubble == true) {
                bubble1.x = 0;}
      //this.x allows to create multiple bubbles without multiple functions

  // display();
  // move();
  // console.log("check Position"+checkPos());
  // var checking = checkPos();
  // if (bubbleX > width){
  //   bubbleX = 0;}
  //
  // if(checking == true){
  //   bubbleX = 0;}

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



function bubble(tempX, tempY,tempDiameter){
  this.x = tempX;
  this.y = tempY;
  this.Diameter = tempDiameter
  //this. referes to the current object
  this.display = function(){
    ellipse(this.x, this.y, this.Diameter, this.Diameter);
  }
  this.move = function(){
    this.x++

    //CHECK Position
    this.checkPos = function() {
      if (this.x > width) {
      return true; }
      else{ return false; }
      //makes bubble start over
      }
    }
}
