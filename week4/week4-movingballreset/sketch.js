var counter = 0; //declare counter to be 0
var balldir = true; //declare to be true

function setup() {
  createCanvas(200,100);
}

function draw() {
//STYLES
  //noStroke();
  strokeWeight(2);
    //stroke("indigo")
  background(240);
    /* background in the draw function(infinite loop) will redraw the color so the ball doesn't leave a trail of black behind it. */

  console.log(counter);
  fill(154,199,230) //light blue
  ellipse(counter, height/2,25,25);

  if(balldir == true) {
  counter = counter + 1; }
  else{ (counter = counter - 1); } // else, aka balldir = false
  //if(counter > 0) { counter = counter + 1;}
    // makes ball move faster

  if(counter > width) { counter = 110;}
      /* If the counter is greater than the canvas width,
      Then counter is reset to 110.
      That means that once the ball reaches the edge,
      It goes back to 110 and goes from there.  */
}
