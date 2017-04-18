//stopstartHW
var iArray = [];
var currentType = ""; //it will be words
var bubble0; //declare bubble so you can color it and moving it

function setup()
{
  createCanvas(400, 400);
  iArray.push(new interface(50, 299, 100, "start")); //first box
  iArray.push(new interface(150, 299, 100, "stop")); //middle box
  iArray.push(new interface(250, 299, 100, "reset")); //last box

  bubble0 = new bubble(0, 200, 100); //making the ball
}

function draw()
{
  background(245);
  bubble0.display();

  for (var i = 0; i < iArray.length; i++) {
//i is declared as 0.
// as long as i is less than the length, i increases by one
//putting "iArray.length"
//is more fluid, so if the length changes, i is not hardcoded to stop at 3, or 4, or whatever current number it's on.
      var checking = iArray[i].check();

      var settingAlpha;
      if (checking == true) {
      console.log("currently over " + iArray[i].type)
          settingAlpha = 100;
      }else{
          settingAlpha = 255;
        }
      iArray[i].display(settingAlpha);
      }
  }

  //making ball start
  if (currentType == "start") {
    bubble0.move();
  }else if (currentType == "stop") {
    
  }else if (currentType == "reset") {
  bubble0.reset();

  }

function mousePressed(){
    for(var i = 0; i < iArray.length; i++) {
        var checkInterface = iArray[i].check();
        if(checkInterface == true){
          currentType = iArray[i].type;
          console.log("current type = " + currentType);
        }
    }
}


function interface(tempX, tempY, tempSize, tempType) {
    this.x = tempX;       //box x coord
    this.y = tempY;       //box y coord
    this.size = tempSize; //box size both x and y
    this.type = tempType; //start, stop or reset

    this.display = function (setAlpha) {
      if (this.type == "start") {
        fill(255, 0, 0, setAlpha);
      }else if (this.type == "stop") {
        fill(0, 255, 0, setAlpha);
      }else if (this.type == "reset") {
        fill(0, 0, 255, setAlpha);
      }

      rect(this.x, this.y, this.size, this.size);
    }

  this.check = function () {
      if (mouseX > this.x && mouseX < (this.x + this.size) && mouseY > this.y && mouseY < (this.y + this.size)){
        return true;
      }else {
        return false;
       }
  }
}
//creates bubble
function bubble(tempX, tempY, tempDiameter) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;

    this.display = function() {
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.move = function() {
      this.x++; //will make the ball start moving
    }

    this.reset = function() {
      for (this.x > width; this.x = 0;) {
        this.x++; }
    }

    this.stop = function() {

    }

    this.checkPos = function() {
      if (this.x > width) {
          return true;
      }else {
        return false;
      }
    }
}
