var eColor = 0;
//have to set eColor to zero to be able to see the color. cannot define the color here. 
function setup() 
{ createCanvas(400, 400);
  eColor = color(235, 30, 15);
}

function draw() 
{ background(255);
  fill(eColor);
  ellipse(width/2, height/2, 200, 200);
 
  if(mouseX > width/2) {eColor = color("yellow");} 
  else{eColor = color(123, 45, 222);}
 
  if(counter == 1) {bgColor = "orange";}
  else if(counter == 2){bgColor = "pink";}
  else if(counter == 3){bgColor = "red";}
  else {bgColor = "white";}

 if(counter > 3) { counter = 0;}
}

function mousepressed() 
{ counter = counter + 1;
  console.log(counter);
}
/*
This is an empty file in an folder that is to be used whenever you create a new java script program.
Duplicate it whenever you want a new program so you have all of the libraries, a file and the index ready to go. 
*/