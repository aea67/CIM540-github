//Arrays: Word Display Array
var randomHello = []; //sets it up as blank

 //put in setup so it runs once
function setup()
{
   createCanvas(500,500);
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

    // console.log(randomHello);
    // console.log(randomHello[randomHello.length - 1]);
    // console.log(randomHello.length);
    //
    // console.log(randomHello.shift());
    // console.log(randomHello);
    // //removes the first item in the array
    //
    // console.log(randomHello.pop());
    // console.log(randomHello);
    // //removes the last item in the array
    //
    // console.log(randomHello.sort());
    // //sorts array
    //
    // console.log(randomHello.reverse());
    // //reverses array


    for (var i = 0; i < randomHello.length; i++) {
       text(randomHello[i], random(width), random(height));
       //displays array length from i = 0 to when i is less than the length, 8
       //when i equals (9), the array length, it stops in an error.
       //because there is no 9th index in the array length,
       // i is no longer less than randomHello.length
       //(arrays start from 0).

       //text displays the element in randomHello
       //random(width) displays the text at a random x coord
       //random(height) displays the text at a random y coord

  }

  }

  /*  for(var i = 0; i < randomHello.length; i++){
      text(randomHello[i], random(width), random(height));
      */


/*    for(var i = 0; i < randomHello.length; i++){
      text(randomHello[i], random(width), random(height));
    }
        //when i equals 18, it stops in an error. because there is no 18th index in the array. (arrays start from 0).
*/


function draw()
{

}
