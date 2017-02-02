var mouthX = 50; 
var mouthY = 300;
var mouthW = 200;
var mouthH = 40

var eye1X = 100
var eye2X = 100

function setup() {
//Create a canvas so the all drawings show up in browser window  
//width, height
createCanvas(500,500);

//(R, G, B)
background(0, 0, 0);
//makes black, because black is the absence of light
background(154, 199, 230);
// red
//Hue, Saturation, 
    
  console.log("width : " + width + "    height: " + height);
    
}

function draw() {
//eye1
// x, y, width, height
    ellipse(eye1X, eye1Y, 100, 100);
    ellipse(eye1X + eye2offset, eye1Y + eye2ofset, 100,100);
    
}