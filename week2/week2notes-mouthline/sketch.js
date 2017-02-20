var mouthX = 50;
var mouthY = 300;
var mouthW = 400;
var mouthH = 40;

function setup()
{

createCanvas(500,500);
//Create a canvas so that the drawings appear in the browser
//createCanvas(x width, y height)
//"Canvas" MUST be capitalized

background(0, 0, 0);
//colors(Red, Green, Blue)
//(R, G, B)
//(0, 0, 0) = black, the absence of light
//(255) = white, all colors combined
//(125) = gray

}

function draw()
{
//ROBOT FACE
// How the canvas grid works:
// 0   = left
// 500 = right
// 0   = top
// 500 = bottom
// calculate from the side it's closest to

  ellipse(10, 10, 5, 5)
//ellipse(x coord, y coord, x width, y width)
  ellipse(70, 70, 100, 100)
// Leye([0+70], [0+70], 100 wide, 100 tall )
  ellipse(430, 70, 100, 100)
// Reye([500-70], [0+70])

// ellipse(250, 250, 200, 200 )
//the ellipse that comes after the previous one overwrites the previous one

  rect(mouthX, mouthY, mouthW, mouthH);
//rect(50, 300, 400, 40)
//50 to the left, 300 down, 400 wide and 40 tall

//line(80, 400, 340, 1);
  line(mouthX, 320, 450, 320);
//line(startX, startY, endX, endY)
//(starts at 50 x, 320 down(so its in the middle of the mouth,
//ends at 450 x and 320 down. (so its straight).

line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2 );
//same line
//line(50, (300 + 20 = 320), (50 + 400), (300 + 20))
//line(x start, y start + h/2 for middle, x end = x width + x start, same)
}
