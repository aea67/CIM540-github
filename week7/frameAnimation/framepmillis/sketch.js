var frameAmounts = 4;
var frameArray = [];
var currentFrame = 0;

var interval = 1000;
var pmillis = 0; //animation can run at its rate, the interaction can run at its rate. dont have to worry about lag

function preload() {
  for (var frames = 0; frames < frameAmounts; frames++) {
    var frameString = "assets/Thatwasclose.jpg" + frames + ".jpg";
    frameArray[frames] = loadImage(frameString);
  }
}

function setup() {
  createCanvas(500, 500);
  frameRate(1);
}

function draw() {
  console.log(millis());
  if(millis()-pmillis >= interval {
    currentFrame++; // Next frame
  }
  image(frameArray[currentFrame], 0, 0);

  if (currentFrame == frameArray.length) {
    currentFrame = 0;
    // Return to first frame
  }
}
