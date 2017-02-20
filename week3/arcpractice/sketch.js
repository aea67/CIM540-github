function setup() {
  noStroke();
  createCanvas(300,300);
}

function draw() {
  background(235);
//eyes
fill(255);
ellipse(50, 30, 30, 30);
ellipse(250, 30, 30, 30);


//low tongue
  fill("hotpink"); //makes following ellipse pink
  arc(width/2+75, 150, 100, 100, 0, PI);
//arc(x coord, y coord, width, height, start angle, stop angle)
            //0 degrees to 180 degrees = half circle = tongue
//angles in radians
    //ANGLE REFERENCE
    //circle = 360 degrees
    //pi/2 = 90 degrees (1/4 circle)
    //pi = 180 degrees (half circle)
    //pi/3 = 60 degrees (1/6 circle)

//high tongue
  fill("pink");
  arc(width/2-75, 150, 100, 100, PI,PI+PI);
  // 0 as start angle means
  //arc gets drawn starting from right side going to the south side. so half circles point down.
  //if you want the circle to point up, add both angles by PI.(180):

  stroke(205);      //line color
  strokeWeight(10); //line thickness
  line(25, 150, 275, 150);
  noStroke();


}
