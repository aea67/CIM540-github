var mouthX = 50;  var mouthY = 350;
var mouthW = 400; var mouthH = 60;
var eye1X = 100;  var eye1Y = 100;
var eye2offset = 300; var pupiloffset = 10;
var backgroundColor = 'yellow'; var randNum = 0;
var mapX = 0;

function setup() {
    createCanvas(500,500);
    background(154, 199, 230); //light blue
    noStroke(); //makes all shapes drawn have no border

    randNum = random(256); //0-255 for all colors
    console.log(randNum); //to see numbers generated in console view

                 }
function draw() {
    // x , y , width, height
    //the little circle the eyes follow that changes colors
    //fill(204);
      //leaving blank makes dot and tongue same color
      //adding fill changes dot color
    ellipse(mouseX, mouseY, 10, 10)
    //ellipse follows mouse x AND y wise.
    frameRate(4); //speed of color change.
                  //higher number, faster change
                  //doesn't matter location in program

    //I ACTUALLY DONT KNOW. NEED TO CLARIFY
    mapX = map(mouseX,0,width,-20,20);
    //too complicated to explain here. see "week3mappratice"

    //Left eye1
    fill(255)
    ellipse(eye1X, eye1Y, 100, 100);
    fill(0, 0, 255) //pupil
    ellipse(eye1X + mapX, eye1Y, 25, 50);
    //adding mapX to x coord makes ellipse follow cursor x wise
    //if mapX + y, y coord would follow where cursor is x wise

    //Right eye2
    fill(255)
    ellipse(eye1X + eye2offset, 100, 100);
    fill(0, 0, 255) //pupil
    ellipse(eye1X+eye2offset+mapX, eye1Y, 25, 50);
    //eye1's x coor + distance to eye2 + mapX = follows cursor

    fill(255)
    //nose
    triangle(width/2, height/2, (width/2)+20, (height/2)+20, (width/2)-20, height/2+20);


    //mouth
    rect(mouthX, mouthY, mouthW, mouthH);
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);

    //tongue
    //will explain in next practice
    //fill('red')
    randNum = random(256); //0 -255
    fill(randNum, 0, 0); //changes from red to black
    fill(randNum, randNum, 0); //changes from green and yellow to black
    console.log(randNum);
    arc(width/2 + 100, 375, 100, 100, 0, PI);

}
