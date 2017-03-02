var counter = 0;
var balldir = false;

function setup() {
  createCanvas(381,100);
}

function draw() {
  background(240);
/* adding background will redraw the color so the ball doesn't leave a trail of black behind it. */
//counter = counter + 1;
  console.log(counter);
  ellipse(counter, height/2,25,25);
    //the ball

    if(counter < 0) { //limitone: if counter is less than 0,
     balldir = true;
     console.log("left hit: " + counter)};

    if(counter > width) { //limittwo: if bigger than the width
    balldir = false;
    console.log("right hit: " + counter)};

    if(balldir == true) {
    counter = counter + 1; }
    else{ (counter = counter - 1); }
    //a faster way to the bounce back thing than false and true.

    /* if(counter >= 0 && counter <= 127) {fill(154,199,230);}
    else if(counter > 127 && counter <= 254) {fill(200,0,15);}
    else if{(counter > 254 && counter < width){fill(40,125,43);}
    else{fill("yellow");} */



    if(counter > 0 && counter < 127) {fill(154,199,230)}
    else if(counter > 127 && counter < 254) {fill(200,0,15)}
    else if(counter > 254 && counter < width){fill(40,125,43)}
    else{ fill("yellow")}
    //ball will flash to yellow when none of the previous are true. Unless....

   /*
   //if(counter == width/2) { fill(154, 199, 230);}
   //after the ball crosses a certain boundary, it changes color

    //if(balldir == true) {
    //counter = counter + 1; }
    //ball direction will move forward if balldir is true
    //if(balldir == false) {
    //counter = counter - 1; }
    //ball direction will move backward if balldir is false


    // if(counter < width) { counter = counter + 1;}
    /*makes ball move faster?? */

    // if(counter > width) { counter = 0;}
  /* If the counter is greater than the canvas width, then counter is reset to 0.
  That means that the ball stops and rests
  This will....? */


/* In console, you will see that once it gets to 500, (the width defined in the canvas) it just keeps printing */
}
