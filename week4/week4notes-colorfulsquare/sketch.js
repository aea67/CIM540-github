//The making of an ARRAy
/*in array is a range of variable.
designated by [] curly braces. */

var colorArray = ["white", "green", "pink", "purple", "blue", "orange"];
/*terms are given numbers. first term (white) is 1, second term (green) is 2, and so on. */
var counter = 0;

function setup()
{ createCanvas(400, 400);
  console.log(colorArray[2]);
}

function draw() 
{ background(colorArray[counter]);
  
}

function mousePressed()
{ counter = counter + 1;
 if(counter > colorArray.length-1) { counter = 0} 
     //length = # oof items in arry
    
    //counter = counter + 1; 
  //if(counter > 5){ counter = 0;}
 //will change color with each click
 
}

/*
This is an empty file in an folder that is to be used whenever you create a new java script program.
Duplicate it whenever you want a new program so you have all of the libraries, a file and the index ready to go. 
*/