//Hover Color Change
var eColor = 0;
var counter = 0;
var bgColor = "pink";
//have to set eColor to zero to be able to see the color. cannot define the color here.
function setup()
{ createCanvas(400, 400);
  eColor = color(235, 30, 15); }

function draw()
{ background(bgColor);
  fill(eColor);
  ellipse(width/2, height/2, 200, 200);
  strokeWeight(4); stroke("midnightblue");
  if(mouseX > width/2) {eColor = color("yellow");}
    //x past middle changes the color to...
  else{eColor = color(123, 45, 222);} //...purple

  if(counter == 1) {bgColor = "seashell";}
  else if(counter == 2){bgColor = "darksalmon";}
  else if(counter == 3){bgColor = "maroon";}
  else {bgColor = "pink";}

 if(counter > 3) { counter = 0;}
}

function mousePressed()
{ counter = counter + 1;
  console.log(counter);
}
