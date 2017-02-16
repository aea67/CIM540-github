//Looping
// why does your sidebar look so neat and nested in comparision to mine? i dont have a master branch. 

var i = 0;
//will see vriable i in many programming languages. 
//the second word has to be capitalized in java script
function setup() 
{   
    createCanvas(200, 200);
    frameRate(60);
}  

function draw() 
{  
    /*
    // static ellipse
    background(255);
    ellipse(width/2, height/2, 10,10);
    i = i + 1 
    */
    
   /* 
    // moving ball
    background(255);
    ellipse(i, height/2, 10,10);
    i = i + 1
    //replace the width with i.
    //now the ball moves. but it can't stop. 
    */
    
    /*
    //moving ball; returns to start
    background(255);
    ellipse(i, height/2, 10,10);    
    i = i + 1   
    if(i > width){
        i = 0;}
    
//    the ball moves across the page. 
//    The if(i > width) statement means that:
//    after the ball's width becomes greater than 200, it does what is in the {curly brackets}.
//    The i = 0 statement means that:
//    it goes back to 0, at the beginning of the page. 
    */
    

    /*
    // split ball; while loop
    background(255);
    ellipse(i, height/2, 10,10); 
    while(i < width){
        i++;
        console.log(i);
        }
    */
    
    /* 
        with an while loop, can do the above in fewer lines.     
    once i becomes greater than the width(createCanvas 200), it should stop.
        in the browser, it ends up looking split in half. 
        when the program starts, i is 0, in the loop (i++) the loop runs until i is 201. 
        at 201, it breaks out of the loop. 
        the loop runs within itself until it meets a certain condition. 
        
        */
   
  /*  
   //split ball, for loop
   background(255);
   i = i + 1
   for (var i = 0; i < width; i++){
   console.log(i); 
   fill(random(255), random(255), random(255));
   ellipse(i, height/2, 10,10);
   
   }           
    /* 
    for loop runs once, doesn't have a reset condition. 
    for loop restarts at 0. 
    the ball splits, it shudders because it's getting redrawn many times.
    the fill(random(255) makes it random colors from 0 to 255)
    0 is black    (none of the colors)
    255 is white  (all the colors)

    */
    
   //multicolor confetti 
    while(i < width) {
        i++;
        console.log(i);
        fill(random(255), random(255), random(255));
        ellipse(random(width), random(height), 10, 10);
    }
    /*
    fill(random(255) 
      makes it generate random colors
    random(width)
      means the x coordinate value can be in any place
    random(height)
      means the y coordinate value can be in any place
    on the screen, it looks like circles all over the place
    */
}



function keyPressed()
{  
    
}
