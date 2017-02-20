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
//  background(backgroundColor);
//  background declared in setup will have trailing dots because its only drawn once. instead of in a loop like the draw function. 
    noStroke();

    randNum = random(256); //0-255
    console.log(randNum);

                 }
function draw() {
    // x , y , width, height
    background(backgroundColor);
    //must be declared in draw function to avoid trail
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
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
    noStroke();

    //tongue
    //fill('red')
    randNum = random(256); //0 -255
    fill(randNum, randNum, 0);
    console.log(randNum);
    arc(width/2 + 100, 375, 100, 100, 0, PI);
                }

function mousePressed(){
    backgroundColor = 'pink'; }

function mouseReleased(){
    backgroundColor = 'blue'; }

//what happens is canvas starts out backgroundColor, which was set to yellow and declared in the draw function
//then when you press it turns pink
//when released it goes to blue
//it switches from pink to blue from then on
