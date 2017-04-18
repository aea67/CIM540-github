var iArray = [];

var wasPressed = "";

function setup() {
    createCanvas(400, 400);
    background(245);
    iArray.push(new interface(50, 150, 100,));
    iArray.push(new interface(150, 150, 100));
    iArray.push(new interface(250, 150, 100));

    bubble0 = new bubble(;

    bubble0.display;
}

function draw() {
  for(var i = 0; i < iArray.length; i++)

  { iArray[i].display(); }

  var checking = iArray[i].check();
  if (checking == true){
    console.log("Yay, congrats you in tha box, like Jack. Good for you");
    console.log("Currently over "+ iArray[i].type);
  }
}

function mousePressed(){
  for(var i = 0; i < Array[i].length ; i++)
  { var checkInterface = iArray[i].check();
  if(checkInterface == true){currentType = iArray.type;}}
}
function interface(tempX, tempY, tempSize, tempType){
  this.x = tempX;
  this.y = tempY;
  this.size = tempSize;
  this.type = tempType;

  this.display = function(SetAlpha){
    fill(255);
    rect(this.x, this.y, this.size, this.size) }

  this.check = function(){
    //check if mouse is indide the box
    if( mouseX > this.x && mouseX < (this.x+this.size) && mouseY > this.y && mouseY < (this.y+this.size)){ return true;}
  //this.x for flexibility
  // box dimensions
  //start X: thix.x
  //end X: this.x + this.size . same for Y
  else{return false;}
  }

}

function bubble(tempX, tempY, tempDiameter) {

    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;


    this.display = function () {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }


    this.move = function () {
        this.x++;
    }

    this.checkWidth = function () {
        if (this.x > width) {
            this.x = 0;
            return true;
        }else{
            return false;
        }
    }
