var mouthX = 50; 
var mouthY = 300;
var mouthW = 200;
var mouthH = 40;

function setup() {

createCanvas(500,500);
background(154, 199, 230);
//pale blue
    
}

function draw() {
//ellipse(x coord, y coord, x width, y height)
ellipse(); // =circle
    
//ROBOT FACE 
ellipse(130, 130, 100, 100);
// Leye([L side x coor], [y coord])
    
ellipse(370, 130, 100, 100);


// rect(80, 400, 340, 60);
rect(70, 350, mouthW, mouthH);

    
//line(25, 280, 30, 425, 280);
}