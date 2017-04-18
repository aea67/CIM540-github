//Moving No Flash Ball
var counter = 0; //declare counter to be 0
var balldir = false; //declaring balldir as a variable. can set to true or false.
                    //will change in if statement
function setup() {
  createCanvas(381,400);
                 }

function draw() {
//STYLES
  //noStroke();
  strokeWeight(2);
    //stroke("indigo")
  background(240);
    /* background in the draw function(infinite loop) will redraw the color so the ball doesn't leave a trail of black behind it. */
  console.log(counter);
  ellipse(100, height/2,400,counter);
    //the ball. counter is the x coord.
    //starts on L edge, 0x
    //since it starts at 0 as declared globally
    // the height/2 put the y coord in the middle

  if(counter < 0) { //limitone: if counter is less than 0,
    balldir = true; //balldir = true, meaning it goes forward
    console.log("left hit: " + counter)};

  if(counter > width) { //limittwo: if bigger than the width
  balldir = false; //balldir = false, it goes backward
  console.log("right hit: " + counter)};
    //ball bounce back pt1
    //when the ball x coord becomes greater than the width, balldir becomes false.
    //width = R edge of canvas = 381 in this case

//FAST bounce back (faster code)
  if(balldir == true) {
  counter = counter + 1;}
  else{(counter = counter - 1); } //aka balldir = false
    //ball bounce back pt2
    //counter = counter - 1
    //makes the ball reverse direction on reaching R edge of canvas.

  if(counter >= 0 && counter <= 127) {fill(154,199,230)}          //0-127x: ball is blue
  else if(counter > 127 && counter <= 254) {fill("mediumorchid")}//128-254: pink
  else if(counter > 254 && counter < width){fill("darkcyan")}   //255-381: darkblue
  else{ fill("yellow")}
    //ball won't flash anymore because "=" has been added
    // ">=" means 0-127  127-254  254-381(width)
    //else defined as yellow
    //meaning, if it's not flashing in browser, it was done correctly
                }
