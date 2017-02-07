//this is how you make invsible comment to yourself or other programmers
//the above function is not going to work

/* 
this
is an
invisible
multi line
comment
lookin like a 
poem 
*/

// Global Variable Declarations
var num = 100;
var num2 = 50;
var num3 = 1000;
var zeven = 7;
var message = "Hello this is the first message decleared by var. It should print out.";
var message2 = "Goodbye. You have reached the end of the program";
var booleanVar = true;
var booleanVar = false;

function setup() {
console.log("Number 1 is " + (num));
console.log("Number 2 is " + (num2));
console.log ("Number 1  + Number 2 = " + (num + num2));
console.log("Number 1 * Number 2 = " + (num*num2));
console.log(message);
console.log(message2);
console.log(message * num3);            

//Variable Declarations in Setup Function
    
var messsage3 = "This function only works in setup" ;
console.log(message3);   
}


function draw() 
{
console.log(num)
}

/* What is the purpose of this exercise?
I don't know. 
But Anyways
None of what you see here will be printed out onto the browser's web page. 
Clicking index.html from this folder, "Week2Notes_syntax", the windeow in the browser will be empty.
In order to see what all this coding in this file, "sketch.js" is actually doing follow these instructions:
1. in the index.html page open in the browser, go to View in the upper panel > 
2. Developer > 
3. Developer Tools
4. Under the console tab, you will see the results of the sketch.js file.
Errors will be in red. */
