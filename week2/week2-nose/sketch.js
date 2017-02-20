var mouthX = 25;
var mouthY = 250;
var mouthW = 400;
var mouthH = 60;

function setup() {
    createCanvas(500,400);
    background(0,0,0);
    background(255,0,0);
    background(125);

    console.log("width: " + width + " " + "height: "+ height);
}

function draw() {
    // x , y , width, height
//left eye
    ellipse(70,70,100,100);
//right eye
    ellipse(430, 70, 100, 100);

//nose
    ellipse(width/2,height/2,50,50);
    //width meaning canvas width
    //meaning it will be right in the center
    //same for height


    rect(mouthX, mouthY, mouthW, mouthH);
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
}
