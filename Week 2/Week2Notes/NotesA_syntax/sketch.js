//this is how you make invsible comment to yourself or other programmers

/* 
this
is an
invisible
multi line
comment
lookin like a 
poem 
*/

//Variables, aka var
/* establishing the values for the variables you are creating. 
These variables will be used intthe program you are writing to carry out specific tasks.
For instance
the value of the "num" variable is 100. 
"var" means variable. Name it whatever you like. You usually name it what it corresponds to.
A number variable corresponds to number values. 
boolean variables correspond to two values, true or false.
word variables correspond to whatever message you want to have print out.
//Global variables
declared outside of the function, they are global because they can be used anywhere in the program in any functions.
//Functions
function inside does a certain task. 
script inside competes a certain ask. function 
For instance
function setup() means 
console.log()
Within those parantheses goes the variables.
*/

//Global Variable Declarations
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
The following text is a summary of what I've learned:
None of what you see here will be printed out onto the browser's web page. 
Clicking index.html from this folder, "Week2Notes_syntax", the windeow in the browser will be empty.
In order to see what all this coding in this file, "sketch.js" is actually doing follow these instructions:
1. in the index.html page open in the browser, go to View in the upper panel > 
2. Developer > 
3. Developer Tools
4. Under the console tab, you will see the results of the sketch.js file.
Errors will be in red. */
