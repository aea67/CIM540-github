var mouthX = 50; 
var mouthY = 300;
var mouthW = 400;
var mouthH = 40

function setup() 
{

createCanvas(500,500);
background(0, 0, 0);
console.log("width : " + width + "    height: " + height);
    
}

function draw() 
{
//ellipse(x, y, x width, y width)
  ellipse();
  ellipse(10,10, 5, 5)  
  ellipse(70, 70, 100, 100)
  ellipse(430,70, 100, 100)
  // ellipse(250, 250, 200, 200 )
  //the ellipse that comes after the previous one overwrites the previous one
  
 // rect(80, 400, 340, 60);
    rect(mouthX, mouthY, mouthW, mouthH);
    //same exact rectangle
    
//line(80, 400, 340, 1);
    line(mouthX, 320, 450, 320);
   // line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthy + mouthH/2 ); 
}