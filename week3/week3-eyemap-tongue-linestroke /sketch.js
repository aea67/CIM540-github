var mouthX = 25;
var mouthY = 350;
var mouthW = 400;
var mouthH = 60;

var eye1X = 100;
var eye1Y = 100;

var eye2offset = 300;
var pupiloffset = 40;

var backgroundColor = 'yellow';

var randNum = 0;

var mapX = 0;

function setup() {
    createCanvas(500,500);
    background(154, 199, 230);
    noStroke(); //controls default black stroke

    randNum = random(256); //0-255
    console.log(randNum);

                 }
function draw() {
    // x , y , width, height
    //background(154, 199, 230)
    ellipse(mouseX, mouseY, 10, 10)
    frameRate(4);


    mapX = map(mouseX,0,width,-20,20);
    //draw random circles all over
    //ellipse(random(width), random(height), 50, 50)

    //eye1
    fill(255)
    ellipse(eye1X, eye1Y, 100, 100);
    fill(0, 0, 255)
    ellipse(eye1X + mapX, eye1Y, 25, 50);

    //eye2
    fill(255)
    ellipse(eye1X + eye2offset, 100,100);
    fill(0, 0, 255)
    ellipse(eye1X + eye2offset +mapX, eye1Y, 25, 50);

    fill(255)
    //nose
    triangle(width/2, height/2, (width/2) + 20, (height/2) + 20);


    //mouth
    rect(mouthX, mouthY, mouthW, mouthH);
    //mouthline
    stroke(205);      //line color
    strokeWeight(10); //line thickness
    line(mouthX, mouthY+mouthH/2, mouthX+mouthW,mouthY+mouthH/2);
    noStroke();        //without this, stroke weight and color is added to every element




    //tongue
    //fill('red');
    randNum = random(256); //0 -255
    fill(randNum, randNum, 0);
    arc(width/2+100, 375, 100, 100, 0, PI);
  //arc(x coord, y coord, width, height, start angle, stop angle)
              //0 degrees to 180 degrees = half circle = tongue
  //angles in radians
      //ANGLE REFERENCE
      //circle = 360 degrees
      //pi/2 = 90 degrees (1/4 circle)
      //pi = 180 degrees (half circle)
      //pi/3 = 60 degrees (1/6 circle)

  // 0 as start angle means
  //arc gets drawn starting from right side going to the south side. so half circles point down.
  //if you want the circle to point up, add both angles by 180*:
    //arc(width/2+100, 375, 100, 100, PI,PI+ PI);
    //see arc practice for circles
    console.log(randNum);
                }

function mousePressed(){
    //background('yellow');
    backgroundColor = 'pink';

}

/* function mouseReleased(){
    backgroundColor = 'blue';


}

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
