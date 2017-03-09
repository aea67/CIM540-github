//this is how you make invsible comment to yourself or other programmers

/*
this
is an
invisible
multi line comment
lookin like a
poem
*/

//sketch.js
/* java script (js) file. The file that runs what you see in the browser when you click on the index file.

//COM SCI NOTES
//Variables, aka var
/* establishes values for the variables you are creating.
These variables will be used in the program you are writing to carry out specific tasks.
For instance
var num = 100;
the value of the "num" variable is 100.
"var" means variable. Name it whatever you like. You usually name it what it corresponds to.
A number variable corresponds to number values.
boolean variables correspond to two values, true or false.
word variables correspond to whatever message you want to have print out.
//Global variables
They can be used anywhere in the program, making them global. This is because they are declared outside of the function.
//Local Variables

//Functions
function inside does a certain task.
script inside the function describes that task.
Within those parantheses goes the variables.
For instance
function setup()
runs script once
function draw()
runs script in an infinte loop
console.log()
to view the results of the "console" function you must be in the "Console" tab in the Developers Tool Panel on your browser.
Explained below.
CONSOLE HELPS
because it shows you the errors in your code. You can see if you are missing  bracket, etc.
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

//Local Variable Declarations in Setup Function
var messsage3 = "This function only works in setup" ;
console.log(message3);
}


function draw()
{
console.log(num)
}

//USAGE NOTES
//USING CONSOLE TO CHECK ERRORS
/* What is the purpose of this exercise?
I don't know.
But Anyways
The following text is a summary of what I've learned:
None of what you see here will be printed out onto the browser's web page.
Clicking index.html from this folder, "Week2Notes_syntax", the window in the browser will be blank.
In order to see what "sketch.js" is doing follow these instructions:
1. in the index.html page open in the browser, go to View in the upper panel >
2. Developer >
3. Developer Tools
4. Under the console tab, you will see the results of the sketch.js file.
Errors will be in red.
This is how you check errors when your program won;t run.
It will tell you the line number underlined on the R edge
When you click on the error
Sometimes it doesn't even help,
and it points you in the wrong place for an error. */
