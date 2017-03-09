var counter = 0; //declare counter to be 0
var balldir = false; //declaring balldir as a variable. can set to true or false.
                    //will change in if statement

function setup() {
  createCanvas(381,100);
}

function draw() {
//STYLES
  //noStroke();
  strokeWeight(2);
    //stroke("indigo")
  background(240);
    /* background in the draw function(infinite loop) will redraw the color so the ball doesn't leave a trail of black behind it. */

  console.log(counter);
  ellipse(counter, height/2,25,25);
    //the ball. counter is the x coord.
    //starts on L edge, 0x
    //since it starts at 0 as declared globally
    // the height/2 put the y coord in the middle

  if(counter < 0) { //limitone: if counter is less than 0,
    balldir = true;
    console.log("left hit: " + counter)};

  if(counter > width) { //limittwo: if bigger than the width
    balldir = false;
    console.log("right hit: " + counter)};
      //ball bounce back pt1
      //when the ball x coord becomes greater than the width, balldir becomes false.
      //width = R edge of canvas = 381 in this case

//FAST bounce back
  if(balldir == true) {
  counter = counter + 1; }
  else{ (counter = counter - 1); } // else, aka balldir = false
    //ball bounce back pt2
    //counter = counter - 1
    //makes the ball reverse direction on reaching R edge of canvas.
    //move backwards

//SLOW bounce back
        //    if (ballDir == true) {
        //        counter = counter + 1;}
        //    if (ballDir == false) {
        //        counter = counter - 1;}


  if(counter > 0 && counter < 127) {fill(154,199,230)}          //0-126x: ball is blue
  else if(counter > 127 && counter < 254) {fill("mediumorchid")}//128-253: pink
  else if(counter > 254 && counter < width){fill("darkcyan")}   //255-381: darkblue
  else{ fill("yellow")}
     //ball will flash to yellow when none of the previous are true, because
     // if means: 0-126
     //else if means: 128-253
     //else if means: 255-381(width)
     //there is a gap at 127 and 254
     //since counter can only be less than 127, meaning 126 or <255, meaning 254
     // Unless....
     //view "movingnoflashball" to see


    // if(counter > width) { counter = 0;}
  /* If the counter is greater than the canvas width, then counter is reset to 0.
  That means that the ball stops and rests
  This will....? */
