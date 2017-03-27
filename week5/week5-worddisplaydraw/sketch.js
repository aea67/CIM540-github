//Arrays: Word Display Array
var randomHello = []; //sets it up as blank
function setup()
{
  createCanvas(500,500);
}

//when put in the draw it runs over and over, fills up whole canvas
function draw()
{

  console.log(randomHello.length);
  //displays length in console: 0
  console.log(typeof (randomHello));
  //displays the type of function: object
  randomHello.push("Hello");
  //.push adds the element to the array
  console.log(randomHello);
  //displays the array, which is
     //[Hello], then the entire array
  console.log(randomHello[0]);
  //displays item 0 in the array: Hello
  console.log(randomHello.length);
  //displays length: 1
  //(only Hello for now)

   randomHello.push("Bonjour");
   //adds Bonjour to the array
   console.log(randomHello);
   //displays [Hello, Bonjour], the pushed items in the array
   console.log(randomHello[1]);
   //displays item 1 in the array: Bonjour
   console.log(randomHello.length);
   //displays array length, 2: (item 0 and item 1)
   randomHello.push("Halo");
   //adds Halo to the array
   console.log(randomHello);
   //displays current array: [Hello, Bonjour, Halo]
   console.log(randomHello[randomHello.length - 1]);
   //displays array length minus one


   randomHello.push("Bonjour");
   randomHello.push("Aloha");
   randomHello.push("Goddag");
   randomHello.push("Shalom");
   randomHello.push("Sawubona");
   console.log(randomHello);  //array
   console.log(randomHello.length); //length

   for (var i = 0; i < randomHello.length; i++) {
      text(randomHello[i], random(width), random(height)); }


 }
