//personality quiz
//console.log("If you saw a fight breaking out between two girls would you: a. tell them that fighting won't solve anything and they should stop it b. rush in and break it up. c. get out your phone and start recording so you can put it on world star hip hop d. call the authorities and someone else to help stop the fight")
var choices = {
    "A": 0,
    "B": 0,
    "C": 0,
    "D": 0,
};

var Atext = "A ";
var Btext = "B ";
var Ctext = "C ";
var Dtext = "D ";
//  key (word) : value (number)
//setting all choices at 0, meaning no one has chosen them.

function setup()
{
    createCanvas(400, 100);

    // console.log("Do you like Cake, Candy, Pie, or Savory?");
    // console.log("Cake = 1, Candy = 2, Pie = 3, Savory = 4");

    console.log(choices);
    console.log(choices["A"]);
    console.log(choices["B"]);
    console.log(choices["C"]);
    console.log(choices["D"]);

    noStroke();
}

function draw()
{
    background(245);

    fill("orchid");
    ellipse(90, height/2 + 25, choices["A"], choices["A"]);

    fill("navy");
    ellipse(150, height/2+25, choices["B"], choices["B"]);

    fill("pink");
    ellipse(230, height/2+25, choices["C"], choices["C"]);

    fill("orange");
    ellipse(310, height/2+25, choices["D"], choices["D"]);

    fill("black");
    text(Atext, 85, height/2);
    text(Btext, 145, height/2);
    text(Ctext, 225, height/2);
    text(Dtext, 305, height/2);
}

function keyPressed()
{
    if(keyCode == 65){
        choices["A"]++;
          Atext = "A  " + choices["A"];}
        // the same as choices["Cake"] = choices["Cake"] + 1;

    else if(keyCode == 66){
        choices["B"]++;
        Btext = "B  " + choices["B"];}

    else if(keyCode == 67){
        choices["C"]++;
        Ctext = "C  " + choices["C"];}

    else if(keyCode == 68){
        choices["D"]++;
        Dtext = "D  " + choices["D"];}

    console.log(choices);
}

    //49 == 1, 50 ==2, 51 ==3, 52 ==4
    //use the key codes for the number
    //when user presses 1, it stands for Cake
