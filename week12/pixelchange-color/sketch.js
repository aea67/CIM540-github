var img;

function preload() {
  img = loadImage("assets/smile.png")
}

function setup() {
  createCanvas(400, 400); //canvas is a grid made up of 400 pixel rows and 400 pixel columns
  img.loadPixels();
}

function draw() {
  image(img,0,0);
  
  for (var x = 0; x < img.width; x++) { //goes through each row and column until it finds a red pixel. (pixel at 4,9)
    for (var y = 0; y < img.height; y++) { ///column
      var loc = (x + y*img.width)*4;
      var r = img.pixels[loc];
      var g = img.pixels[loc+1];
      var b = img.pixels[loc+2];
     
      
      if(r == 255 && g == 0 && b == 0){
        img.pixels[loc] = 0;
        img.pixels[loc+1] = 255;
      }
      
    }
  }
  
  img.updatePixels();
  
}