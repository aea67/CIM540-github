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

    randomHello.push("Bongiorno");
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
    console.log("array, length(8)");
    console.log(randomHello);  //array
    console.log(randomHello.length); //length

    //[ 0=Hello(1), 1=Bongiorno(2), 2=Halo(3) 3=Bonjour(4)
    //  4=Aloha(5), 5=Goddag(6), 6=Shalom(7), 7=Sawubona(8)]
    //  length = 8

    console.log("array. last array item, 8-1=7. length, 8")
    console.log(randomHello);
    console.log(randomHello[randomHello.length - 1]);
    console.log(randomHello.length);

    console.log("shift, removes first item, 'Hello'");
    console.log(randomHello.shift());
    console.log(randomHello)
    //removes the first item in the array
    //displays what it will shift(Hello)

    console.log("pop, removes last item, 'Sawubona'");
    console.log(randomHello.pop());
    console.log(randomHello);
    //removes the last item in the array
    //display what it will pop(Sawubona)

    console.log("sorts array");
    console.log(randomHello.sort());
    //sorts array

    console.log("reverses array");
    console.log(randomHello.reverse());
    //reverses array


    for (var i = 0; i < randomHello.length; i++) {
       text(randomHello[i], random(width), random(height)); }
  }

function draw()
{
}
