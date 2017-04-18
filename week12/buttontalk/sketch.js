var playSound = false;
var stopSound = true;

var menuStartX = 200;
var menuStartY = 300;
var buttonOffset = 100;
var numberOfButtons = 2;

var buttonSize = 100;

var buttonArray = [];
var imageArray = [];

var soundFile;


function preload() {

  imageArray.push(loadImage('assets/play.png'));
  imageArray.push(loadImage('assets/stop.png'));
  soundFile = loadSound('assets/CowMoo.mp3'); //loads the sound


}

function setup() {

  createCanvas(500, 500);
  buttonArray.push(new buttonObject(menuStartX, menuStartY, buttonSize, imageArray[0], "play"));
  buttonArray.push(new buttonObject(menuStartX + (buttonOffset * numberOfButtons), menuStartY, buttonSize, imageArray[1], "stop"));


}

function draw() {
  background(255);

  for (var buttons in buttonArray) {
    buttonArray[buttons].display(buttonArray[buttons].overButton(mouseX, mouseY));
  }
    //buttonarray.display : true, its currently over the button.
    //down to display line 80

  if (mouseIsPressed) {
    for (var buttons in buttonArray) {
      if (buttonArray[buttons].overButton(mouseX, mouseY) == true) {
          //if mouse pressed is true. then it runs the following code;
          //if mouse pressed is not true, it doesn't rune the code
          
          //switch statement. simpler idea
        switch (buttonArray[buttons].buttonType) {
          case "play":
            console.log("playSound");
            playSound = true;
            break; //breaks out of the switch statement. dont go through the other switch statements
          case "stop":
            console.log("stopSound");
            stopSound = true;
            break;
        }
      }
    }
  }

  if (playSound == true) { //actually plays the sound. set to false first, so you arent playing it over and over;.
     playSound = false;
     stopSound = false;
    soundFile.setVolume(1);
    soundFile.play();
  }

  if (stopSound == true) {
    playSound = false;
    stopSound = false;
    soundFile.stop();

  }

}

//displays the object & checks to see if mouse is over the button
function buttonObject(tempX, tempY, tempBsize, tempImg, tempBtype) {
  this.x = tempX;
  this.y = tempY;
  this.bSize = tempBsize;
  this.buttonImage = tempImg;
  this.buttonType = tempBtype;

  this.display = function(mousedOver) {
//displays the image
    imageMode(CENTER);
    image(this.buttonImage, this.x, this.y, this.bSize, this.bSize);
//if mouse over image is true, then i will draw a square over my button image. 
      //a UI element. 
    if (mousedOver == true) {
      rectMode(CENTER);
      fill(255, 125);
      rect(this.x, this.y, this.bSize, this.bSize);
    }

  }
//this function is how you figure out if the mouse is over the button. 
  //if distance from mouse to distance from center of box
  //if its less than 50, returns true
  //greater than 50 returns a false.
  this.overButton = function(curMouseX, curMouseY) {
    var oB = dist(curMouseX, curMouseY, this.x, this.y);
    if (oB < this.bSize / 2) {
        //since button is 100 LxW, if the mouse is greater than 50 pixels (bSize/2) from the center of the box, then it's not over the box anymore. 
        
      console.log(this.buttonType + " over")
      return true;
    } else {
      return false;
    }
  }
}
