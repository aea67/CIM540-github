//Confetti

var i = 0;
//will see variable i in many programming languages.
//the second word has to be capitalized in java script
function setup()
{
    createCanvas(200, 200);
    frameRate(60);
}

function draw()
{
  while(i < width) {
      i++; //shortcut of i = i + 1
      console.log(i);
      //displays i's increasing till it reaches 200
      fill(random(255), random(255), random(255));
      ellipse(random(width), random(height), 10, 10);
     }
// while i, 0, is less than the width, 200, i = i + 1.
// when i =200, the loop stops.

//fill is random for red, green, and blue:
//random R from 0-255), random G from 0-255), random B from 0-255)

//ellipse x coord is random, y coord is random. width and height is 10.

//since it is in the draw function, random ellipses will be drawn 200 times.
//looking like CONFETTI

//more crowded, i < #; # being a much higher number.
}
