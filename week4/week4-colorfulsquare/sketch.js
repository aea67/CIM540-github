//Color Change with Clicks
//The making of an Array
/*in array is a range of variable.
designated by [] curly braces. */

var colorArray = ["green", "seashell", "pink", "purple", "blue", "orange"];
/*terms are given numbers. first term (green) is 1, second term (green) is 2, and so on. */
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
     //when counter becomes greater than the array length-1, 6-1=5,
     //it resets back to 0

 //length = # of items in array

    //counter = counter + 1;
  //if(counter > 5){ counter = 0;}
 //will change color with each click

}
