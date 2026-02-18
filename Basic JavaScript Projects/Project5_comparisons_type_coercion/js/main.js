function my_Function1() {
    var myType = document.write(typeof 8); // Variable myType is assigned the value of the type of 8, which is "number"
    document.getElementById("TypeOf").innerHTML = myType; // The value of myType is put into the HTML element with the id "TypeOf"
}

function my_Function2() {
    var myVar = 5 + "10"; // Variable myVar is assigned the value of the string "The result of 5 + \"10\" is: " concatenated with the result of 5 + "10", which is "510" due to type coercion
    document.getElementById("Coercion").innerHTML = `(Type Coercion)What is 5 + "10"? ${myVar}`;
}

function my_Function3() {
    document.getElementById("NaN").innerHTML = "Is 0/0 NaN? " + (0/0); // The value of 0/0 is written to the document and put into the HTML element with the id "NaN"
}

function my_Function4() {
    document.getElementById("IsNaNString").innerHTML = "isNaN('Hello'): " + isNaN('Hello'); // The value of isNaN('Hello') is written to the document and put into the HTML element with the id "IsNaNString"
}

function my_Function5() {
    document.getElementById("IsNaN").innerHTML = "isNaN('8'): " + isNaN('8'); // The value of isNaN('8') is written to the document and put into the HTML element with the id "IsNaN"
}

function my_Function6() {
    document.getElementById("Infinity").innerHTML = "Is 2E310 Infinity or -Infinity? " + 2E310;
}

function my_Function7() {
    document.getElementById("NegativeInfinity").innerHTML = "Is -3E310 Infinity or -Infinity? " + -3E310;
}

function my_Function8() {
    document.getElementById("GreaterThan").innerHTML = "Is 10 > 2? " + (10 > 2); // The value of 10 > 2 is written to the document and put into the HTML element with the id "GreaterThan"
}

function my_Function9() {
    document.getElementById("LessThan").innerHTML = "Is 10 < 2? " + (10 < 2); // The value of 10 < 2 is written to the document and put into the HTML element with the id "LessThan"
}

function my_Function10() {
    console.log(5 * 8); // The value of 5 * 8 is written to the console
    document.getElementById("consoleLog").innerHTML = "console.log(5 * 8) written! "; // The value of 5 * 8 is written to the console
}

function my_Function11() {
    console.log((5 > 8) && (10 > 2)); // The value of (5 > 8) AND (10 > 2) is written to the console
    document.getElementById("BooleanChallenge").innerHTML = "console.log((5 > 8) && (10 > 2)) written! "; // The value of (5 > 8) AND (10 > 2) is written to the document and put into the HTML element with the id "BooleanChallenge"
}

function my_Function12() {
    document.getElementById("Equality1").innerHTML = `Is (8*5 == 40)? ${8*5 == 40}`; // The value of 8*5 == 40 is written to the document and put into the HTML element with the id "Equality1"
}

function my_Function13() {
    document.getElementById("Equality2").innerHTML = `Is (8+5 == 15)? ${8+5 == 15}`; // The value of 8+5 == 15 is written to the document and put into the HTML element with the id "Equality2"
}

function my_Function14() {
    var x = 8;
    document.getElementById("StrictEquality1").innerHTML = `Is (x === 8)? ${x === 8}`; // The value of x === 8 is written to the document and put into the HTML element with the id "StrictEquality1"
}

function my_Function15() {
    var x = 8;
    document.getElementById("StrictEquality2").innerHTML = `Is (x === "5")? ${x === "5"}`; // The value of x === "5" is written to the document and put into the HTML element with the id "StrictEquality2"
}

function my_Function16() {
    var x = 8;
    document.getElementById("StrictEquality3").innerHTML = `Is (x === "8")? ${x === "8"}`; // The value of x === "8" is written to the document and put into the HTML element with the id "StrictEquality3"
}

function my_Function17() {
    var x = "8";
    document.getElementById("StrictEquality4").innerHTML = `Is (x === "5")? ${x === "5"}`; // The value of x === "5" is written to the document and put into the HTML element with the id "StrictEquality4"
}

function my_Function18() {
    document.getElementById("LogicalAnd1").innerHTML = `Is (5 > 2) && (10 > 4)? ${(5 > 2) && (10 > 4)}`; // The value of (5 > 2) AND (10 > 4) is written to the document and put into the HTML element with the id "LogicalAnd"
}

function my_Function19() {
    document.getElementById("LogicalAnd2").innerHTML = `Is (5 > 8) && (10 > 4)? ${(5 > 8) && (10 > 4)}`; // The value of (5 > 8) AND (10 > 4) is written to the document and put into the HTML element with the id "LogicalAnd"
}

function my_Function20() {
    document.getElementById("LogicalOr1").innerHTML = `Is (5 > 10) || (10 > 4)? ${(5 > 10) || (10 > 4)}`; // The value of (5 > 10) OR (10 > 4) is written to the document and put into the HTML element with the id "LogicalOr"
}

function my_Function21() {
    document.getElementById("LogicalOr2").innerHTML = `Is (5 > 10) || (10 < 4)? ${(5 > 10) || (10 < 4)}`; // The value of (5 > 10) OR (10 < 4) is written to the document and put into the HTML element with the id "LogicalOr"
}

function my_Function22() {
    document.getElementById("Not1").innerHTML = `Is !(5 > 10)? ${!(5 > 10)}`; // The value of NOT (5 > 10) is written to the document and put into the HTML element with the id "Not"
}

function my_Function23() {
    document.getElementById("Not2").innerHTML = `Is !(5 > 2)? ${!(5 > 2)}`; // The value of NOT (5 > 2) is written to the document and put into the HTML element with the id "Not2"
}

