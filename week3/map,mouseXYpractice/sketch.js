function setup() {
  noStroke();
  createCanvas(300,300);
}

function draw() {
  background(144);
  var mapX1 = map(mouseX, 0, width, 25, 75);
  var mapY1 = map(mouseY, 0, width, 0, 100);

  fill("hotpink"); //makes following ellipse pink
  ellipse(mouseX, mouseY, 25, 25);
          //follows cursor x and y wise
  fill(255); //makes following three white
  ellipse(mapX1, width/2-30, 25, 25) //x mapped
          //moves horizontally
  ellipse(width/2, mapY1, 25, 25); //y mapped
          //moves up and down
  ellipse(mapX1, mapY1, 25, 25); //both x and y mapped
          //moves both x & y wise
//ORDER
//the following ellipse will always be in front of the previous one.
//that's why the pink circle is behind all of them, it was drawn before.

  //map() means the object with mapX will be redrawn according to map function values.
  //mouseX means wherever the mouse is x-wise
  //mouseY follows where the mouse is y-wise
  //so map(mouseX) mean map following the mouse's x coord

  //in the object, it will be:
  //ellipse(mapX, ycoord, width, height)
  //putting mapX in place of the X coord frees the ellipse to move x-wise to whatever was declared in mapX.
  //same for putting in place of y coord
  //in this case, mouseX or mouseY.

  //map(mouseX, 0, width, a, b);
  //0 & width are supposed to mean the start values
  //0 for left side, width for right side.
  //not really sure why. but those never change

  //a & b are supposed to be the range of change
  //the bigger the range, the more the object moves
  //the smaller the range, the less it moves
  //still not sure how it works, but i do know that
  //it doesnt correspond exactly to the range.

}
