var mouthX = 25;
var mouthY = 350;
var mouthW = 400;
var mouthH = 60;

var eye1X = 100;
var eye1Y = 100;

var eye2offset = 300;
var pupiloffset = 40;

var bgcolor = 'pink';

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
    //ellipse(mouseX, mouseY, 10, 10)
    frameRate(60);
    background(bgcolor);
    //putting the background color in the draw function allows the circle trailing the mouse to just stay a circle.
    //it won't leave a trail of itself because the background is getting redrawn every time.
    
    mapX = map(mouseX,0,width,-20,20);
    //draw random circles all over
    //ellipse(random(width), random(height), 50, 50)

    //eye1
    fill(255);
    ellipse(eye1X, eye1Y, 100, 100);
    fill(0, 0, 255);
    ellipse(eye1X + mapX, eye1Y, 25, 50);

    //eye2
    fill(255);
    ellipse(eye1X + eye2offset, 100,100);
    fill(0, 0, 255);
    ellipse(eye1X + eye2offset +mapX, eye1Y, 25, 50);

    //nose
    fill(255);
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
    fill(randNum,0 ,0);
    //ellipse the eyes follow
    ellipse(mouseX, mouseY, 10, 10)
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


                }

// function mousePressed(){
//     //background('yellow');
//     bgcolor = 'red';
//     randNum = random(256);
// }
//
// function mouseReleased(){
//     bgcolor = 'blue';
//
//
// }
