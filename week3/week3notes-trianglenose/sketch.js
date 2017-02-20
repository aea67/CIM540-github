var mouthX = 25;
var mouthY = 350;
var mouthW = 400;
var mouthH = 60;

var Leyex = 100; //left eye x coordinate
var Leyey = 100; //left eye y coordinate

var Reyeoffset = 300; //Right eye distance from Leye x-wise
var pupiloffsety = 20; //So pupil is closer to eye bottom y-wise

function setup() {
    createCanvas(500, 500);
    background(154, 199, 230);
                 }
function draw() {
    // x , y , width, height
    //Lefteye
    fill(255) //white circle
    ellipse(Leyex, Leyey, 100, 100); //100 x&y coord, 100 width

    fill(0, 0, 255) //blue pupil
    //long pupil
    ellipse(Leyex, Leyey + pupiloffsety, 25, 50);

    //eye2
    fill(255)
    ellipse(Leyex + Reyeoffset, Leyey, 100, 100);
    //long pupil
    fill(0, 0, 255)
    ellipse(Leyex + Reyeoffset, Leyey + pupiloffsety, 25, 50);

    //nose
    fill(255)
    triangle(width/2,height/2,(width/2)+20,(height/2)+20, (width/2)-20,(height/2)+20);
    //how triangle is formed:
    //3 points(start,end)*3, with lines made between them.
    //POINT1: the top middle
      //(width/2)    = line1&2 x start. it's the middle
      //(height/2)   = line1&2 y start, makes the middle top point
    //POINT2: lower right
      //(width/2)+20 = line1 x end. +20 so it goes to the right.
        //+20 from the middle, which is the width in half.
      //(height/2)+20 = line1 y end. +20 so it goes downward.
        //+20 down from the middle, height/2
    //POINT3: lower left
      //(width/2)-20  = line2 x end. -20 = 20 left of center
      //(height/2)+20 = line2 y end. +20 again so it goes down.
    //pt1+pt3 = line2, the L side going down
    //pt1+pt2 = line1,the R side of the triangle going down.
    //pt2+pt3 = line3, the flat one


    //mouth
    rect(mouthX, mouthY, mouthW, mouthH);
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
                }
