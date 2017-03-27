// must use Brackets > File > Live Preview to see animation
var puppy0;
var puppy1;
var puppy2;
var puppy3;
var puppy4;

var puppyArray = [];

var puppyIndex = 0;

function setup() {
    createCanvas(640, 480);
    //    puppy0 = loadImage("images/puppy.jpg");
    //    puppy1 = loadImage("images/puppy1.jpg");
    //    puppy2 = loadImage("images/puppy2.jpg");
    //    puppy3 = loadImage("images/puppy3.jpg");
    //    puppy4 = loadImage("images/puppy4.jpg");

    puppyArray.push(loadImage("images/puppy.jpg"));
    puppyArray.push(loadImage("images/puppy1.jpg"));
    puppyArray.push(loadImage("images/puppy2.jpg"));
    puppyArray.push(loadImage("images/puppy3.jpg"));
    puppyArray.push(loadImage("images/puppy4.jpg"));

    puppyIndex = puppyChooser(0,4);
    console.log("Puppy Index");
    console.log(puppyIndex);
}

function draw() {
    //image(puppy0, 0,0);

    image(puppyArray[puppyIndex], 0, 0);
    //image(image, x coord, y coord)
    //calls the puppyArray, which is now loaded with images 0-4, starting at the Index.
    //the Index is now puppyChooser(0,4),
    //which I'm guessing allows it to be any image from 0 to 4

    console.log("puppyChooser");
    console.log(puppyChooser());

}

function mousePressed(){
    puppyIndex = puppyChooser(0,4);
    //when you press the mouse, the index becomes a number from 0 to 4
}

function puppyChooser(min, max) {
    //console.log(int(random(0, 4)));

    var randomNum = int(random(min, max));
    return randomNum;
}
