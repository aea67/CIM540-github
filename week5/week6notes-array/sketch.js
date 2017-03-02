//Arrays
var randomHello = [];

function setup() 
{ 
   createCanvas(500,500);    
   console.log(randomHello.length);
   console.log(typeof(randomHello));
    
   randomHello.push("Hello");
   console.log(randomHello);
   console.log(randomHello[0]);
  
    
    randomHello.push("Bonjour");
    randomHello.push("Halo");
    randomHello.push("Aloha");
    randomHello.push("Shalom");
    randomHello.push("Sawubona");

    
    randomHello.length - 
    //randomHello.push adds elements to the array
    
   /* console.log(randomHello);
    console.log(randomHello[randomHello.push - length]); */

  /*  for(var i = 0; i < randomHello.length; i++){
      text(randomHello[i], random(width), random(height)); 
      */
    
    
/*    for(var i = 0; i < randomHello.length; i++){
      text(randomHello[i], random(width), random(height));  
    }
        //when i equals 18, it stops in an error. because there is no 18th index in the array. (arrays start from 0). 
*/
    }
   
    //put in setup so it runs once
    
    




function draw() 
{ 
  
}

