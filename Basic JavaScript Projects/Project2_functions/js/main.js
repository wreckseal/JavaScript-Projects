function myFunction(string) { // Function myFunction is defined with a parameter called string
    var result = string.fontcolor("red"); // Variable result is assigned the value of string with the font color set to red
    result += " is red!"; // The string " is red!" is concatenated to the end of result
    document.getElementById("Red_Text").innerHTML = result; // The value of result is put into the HTML element with the id "Red_Text"
}