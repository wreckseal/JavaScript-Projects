function myAddition(x, y) { // Function myFunction is defined with two parameters, x and y
    var addition = x + y; // Variable addition is assigned the value of x + y
    document.getElementById("Math1").innerHTML = x + " + " + y + " = " + addition; // The value of x + y is calculated and concatenated with the string "5 + 6 = ", then put into the HTML element with the id "Math"
}

function mySubtraction(x, y) { // Function myFunction is defined with two parameters, x and y
    var subtraction = x - y; // Variable subtraction is assigned the value of x - y
    document.getElementById("Math2").innerHTML = x + " - " + y + " = " + subtraction; // The value of 5 - 6 is calculated and concatenated with the string "5 - 6 = ", then put into the HTML element with the id "Math"
}

function myMultiplication(x, y) { // Function myFunction is defined with two parameters, x and y
    var multiplication = x * y; // Variable multiplication is assigned the value of x * y
    document.getElementById("Math3").innerHTML = x + " * " + y + " = " + multiplication; // The value of 5 * 6 is calculated and concatenated with the string "5 * 6 = ", then put into the HTML element with the id "Math"
}

function myDivision(x, y) { // Function myFunction is defined with two parameters, x and y
    var division = x / y; // Variable division is assigned the value of x / y
    document.getElementById("Math4").innerHTML = x + " / " + y + " = " + division; // The value of 5 / 6 is calculated and concatenated with the string "5 / 6 = ", then put into the HTML element with the id "Math"
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5; // Variable simple_Math is assigned the value of the expression (1 + 2) * 10 / 2 - 5
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; // The value of the expression is calculated and concatenated with the string "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals ", then put into the HTML element with the id "Math"
}

function modulus_Operator() {
    var modulus = 25 % 6; // Variable modulus is assigned the value of 25 % 6
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus; // The value of 25 % 6 is calculated and concatenated with the string "When you divide 25 by 6 you have a remainder of: ", then put into the HTML element with the id "Math"
}

function negation_Operator() {
    var x = 10; // Variable x is assigned the value of 10
    document.getElementById("Math7").innerHTML = -x; // The value of x is negated and put into the HTML element with the id "Math"
}

function increment_Operator() {
    var x = 5; // Variable x is assigned the value of 5
    x++; // Variable x is incremented by 1
    document.getElementById("Math8").innerHTML = "The value of x after incrementing is: " + x; // The value of x is concatenated with the string "The value of x after incrementing is: ", then put into the HTML element with the id "Math"
}

function decrement_Operator() {
    var x = 5.25; // Variable x is assigned the value of 5.25
    x--; // Variable x is decremented by 1
    document.getElementById("Math9").innerHTML = "The value of x after decrementing is: " + x; // The value of x is concatenated with the string "The value of x after decrementing is: ", then put into the HTML element with the id "Math"
}

function random_Number() {
    var random = Math.random(); // Variable random is assigned the value of a random number between 0 and 1
    document.getElementById("Math10").innerHTML = "A random number between 0 and 1: " + random; // The value of random is concatenated with the string "A random number between 0 and 1: ", then put into the HTML element with the id "Math"
}

