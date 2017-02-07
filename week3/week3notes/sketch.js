var mouthX = 25;
var mouthY = 350;
var mouthW = 400;
var mouthH = 60;

var eye1X = 100;
var eye1Y = 100;
var eye2offset = 300;
var pupiloffset = 40;

function setup() {
    createCanvas(500,500);
    background(154, 199, 230);
                 }
function draw() {
    // x , y , width, height
    //eye1
    fill(255)
    ellipse(eye1X, eye1Y, 100, 100);
    fill(0, 0, 255)
    ellipse(eye1X, eye1Y, 25, 50);

    //eye2
    fill(255)
    ellipse(eye1X + eye2offset, 100,100);
    fill(0, 0, 255)
    ellipse(eye1X + eye2offset, eye1Y, 25, 50);
    
    fill(255)
    //nose
    triangle(width/2, height/2, (width/2) + 20, (height/2))

    
    //mouth
    rect(mouthX, mouthY, mouthW, mouthH);
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
                }
         
//mouth
/*
rect(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2)
stroke(125);
strokewieght(10);
line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
 
 
    //(R, G, B)
background(154, 199, 230);
console.log("width : " + width + "    height: " + height);
    
}
/*
function draw() {

   
//eye1
// x, y, width, height
    ellipse(eye1X, eye1Y, 100, 100);
    fill(0, 0, 255)
    ellipse()
    ellipse(eye1X + eye2offset, eye1Y + eye2ofset, 100,100);
    
}
*/