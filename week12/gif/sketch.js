var playSound = false;
var stopSound = true;

var menuStartX = 100;
var menuStartY = 300;
var buttonOffset = 100;
var numberOfButtons = 2;

var buttonSize = 100;

var buttonArray = [];
var imageArray = [];

var soundFile;

var gifFile;

var showImage = false;

function preload() {

  imageArray.push(loadImage('assets/play.png'));
  imageArray.push(loadImage('assets/stop.png'));
  soundFile = loadSound('assets/CowMoo.mp3');


}

function setup() {

  createCanvas(500, 500);
  buttonArray.push(new buttonObject(menuStartX, menuStartY, buttonSize, imageArray[0], "play"));
  buttonArray.push(new buttonObject(menuStartX + (buttonOffset * numberOfButtons), menuStartY, buttonSize, imageArray[1], "stop"));

    
    //load the gif
    //the gif library is a little bit wonky
    

  gifFile = loadGif('assets/cow.gif');
  gifFile.pause(); //pause the gif to prevent wonkiness. 
    //the computer has to download each frame from the gif. makes it slow. then once its downloaded, it can play at normal speed.  
    //if you start playing stuff before its fully loaded, it gets wonky

  while (gifFile.loaded()) { //while loop, runs till something is true. while loading is true, then it breaks out of the loop. 
    console.log("loading");
  }

  gifFile.pause();

}

function draw() {
  background(255);


  if (gifFile.loaded()) { //once the file is loaded, it displays the animated gif. 
      
    image(gifFile, 250, 200);

    for (var buttons in buttonArray) {
      buttonArray[buttons].display(buttonArray[buttons].overButton(mouseX, mouseY));
    }

    if (mouseIsPressed) {
      for (var buttons in buttonArray) {
        if (buttonArray[buttons].overButton(mouseX, mouseY) == true) {

          switch (buttonArray[buttons].buttonType) {
            case "play":
              //console.log("playSound");
              playSound = true;
              break;
            case "stop":
              //console.log("stopSound");
              stopSound = true;
              break;
          }
        }
      }
    }

    if (playSound == true) {
      playSound = false;
      stopSound = false;
      soundFile.setVolume(1);
      soundFile.play();
      console.log("playing");
      gifFile.play(); //plays gif file
    }

    if (stopSound == true) {
      playSound = false;
      stopSound = false;
      soundFile.stop(); //stop pauses file and resetss it to 0 
      gifFile.pause(); //pauses gif fil
      gifFile.frame(0); //resets back to 0 
      console.log("stopping");

    }
  }
}

//pause and play button
function buttonObject(tempX, tempY, tempBsize, tempImg, tempBtype) {
  this.x = tempX;
  this.y = tempY;
  this.bSize = tempBsize;
  this.buttonImage = tempImg;
  this.buttonType = tempBtype;

  this.display = function(mousedOver) {

    if (mousedOver == true) {
      rectMode(CENTER);
      fill(100, 50);
      rect(this.x, this.y, this.bSize, this.bSize);
    }

    imageMode(CENTER);
    image(this.buttonImage, this.x, this.y, this.bSize, this.bSize);

    if (mousedOver == true) {
      rectMode(CENTER);
      fill(255, 125);
      rect(this.x, this.y, this.bSize, this.bSize);
    }

  }

  this.overButton = function(curMouseX, curMouseY) {
    var oB = dist(curMouseX, curMouseY, this.x, this.y);
    if (oB < this.bSize / 2) {
      //console.log(this.buttonType + " over")
      return true;
    } else {
      return false;
    }
  }
}

// var gif;

// function setup() {
//   createCanvas(700, 300);
//   gif = loadGif('assets/cow.gif');
// }

// function draw() {
//   background(0);
//   image(gif, 0, 0);
// }

// function mouseMoved() {
//   if (gif.loaded() && !gif.playing()){
//     var totalFrames = gif.totalFrames();
//     var frame = int(map(mouseX, 0, width, 0, totalFrames));
//     gif.frame(frame);
//   }
// }

// function mousePressed() {
//   if (gif.playing()) {
//     gif.pause();
//   } else {
//     gif.play();
//   }
// }
