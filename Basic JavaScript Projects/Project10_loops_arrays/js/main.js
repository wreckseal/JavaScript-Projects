function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += X + "<br>";
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function for_Loop() {
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }    
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function array_Function() {
    var Food = [];
    Food[0] = "Pizza";
    Food[1] = "Tacos";
    Food[2] = "Sushi";
    Food[3] = "Burgers";
    document.getElementById("Array").innerHTML = "My favorite food is " + Food[0] + ".";
}