function Call_Loop() { // This function creates a loop that counts from 1 to 10 and displays the numbers in an HTML element with the id "Loop".
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += X + "<br>";
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function for_Loop() { // This function creates a loop that iterates through an array of instruments and displays them in an HTML element with the id "List_of_Instruments".
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }    
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() { // This function creates an array of cat picture descriptions and displays one of them in an HTML element with the id "Cat".
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function array_Function() { // This function creates an array of food items and displays one of them in an HTML element with the id "Array".
    var Food = [];
    Food[0] = "Pizza";
    Food[1] = "Tacos";
    Food[2] = "Sushi";
    Food[3] = "Burgers";
    document.getElementById("Array").innerHTML = "My favorite food is " + Food[0] + ".";
}

function constant_Function() { // This function creates a constant object representing a computer, modifies its properties, and displays the information in an HTML element with the id "Constant".
    const Computer = {type:"laptop", brand:"Dell", color:"black"};
    Computer.color = "silver";
    Computer.price = "$800";
    document.getElementById("Constant").innerHTML = "The computer is a " + Computer.color + " " + Computer.brand + " " + Computer.type + " that costs " + Computer.price + ".";
}

function let_Function() { // This function demonstrates the use of the let keyword to create a block-scoped variable. It declares a variable X with the value 10, then creates a new block where it declares another variable X with the value 20. It displays the value of X before, inside, and after the block to show the difference in scope.
    var X = 10;
    document.writeln(X + "<br>");
    if (X === 10) {
        let X = 20;
        document.writeln(X + "<br>");
    }
    document.writeln(X);
}

function object_Function() { // This function creates an object representing a car with properties for make, model, year, and color, as well as a method that returns a description of the car. It then displays the description in an HTML element with the id "Object".
    let car = {
        make: "Jeep",
        model: "Patriot",
        year: 2012,
        color: "black",
        description: function() {
            return "The car is a " + this.color + " " + this.year + " " + this.make + " " + this.model + ".";
        }
    };
    document.getElementById("Object").innerHTML = car.description();
}