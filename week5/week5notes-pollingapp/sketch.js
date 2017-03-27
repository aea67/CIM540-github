var choices = {
    "Cake": 0,
    "Candy": 0,
    "Pie": 0,
    "Savory": 0,
};
//  key (word) : value (number)
//setting all choices at 0, meaning no one has chosen them.

function setup()
{
    createCanvas(400, 100);
    // console.log("Do you like Cake, Candy, Pie, or Savory?");
    // console.log("Cake = 1, Candy = 2, Pie = 3, Savory = 4");

    console.log(choices);
    console.log(choices["Cake"]);
    console.log(choices["Candy"]);
    console.log(choices["Pie"]);
    console.log(choices["Savory"]);
}

function draw()
{

}

function keyPressed()
{
    if(keyCode == 49){
        choices["Cake"]++;}
        // the same as choices["Cake"] = choices["Cake"] + 1;
    else if(keyCode == 50){
        choices["Candy"]++;}

    else if(keyCode == 51){
        choices["Pie"]++;}

    else if(keyCode == 52){
        choices["Savory"]++;}
      //   the ++ meaning if the keycode is pressed again, it increases by one
      //  meaning people will poll, if 3 people poll for cake, then 0+1+1+1=3.
      //  set at 0 at the top of the program, now 3.
    console.log(choices);
}

    //49 == 1, 50 ==2, 51 ==3, 52 ==4
    //use the key codes for the number
    //when user presses 1, it stands for Cake
