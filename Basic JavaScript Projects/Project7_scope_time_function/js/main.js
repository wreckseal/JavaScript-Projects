//Global variable
var str1 = "Hello, "; // Variable str1 is assigned the value "Hello, "
function concatString1() {
    
    document.write(str1 + "world!<br><br>"); // The value of str1 concatenated with "world!" is written to the document
}

function concatString2() {
    document.write(str1 + "how are you?<br><br>"); // The value of str1 concatenated with "how are you?" is written to the document
}

concatString1();
concatString2();

//Local and global variable
function concatString3() {
    var str2 = "Welcome"; // Variable str2 is assigned the value "Welcome"
    console.log(str2 + " to my world!\n"); // The value of str2 concatenated with " to my world!" is written to the console
}

function concatString4() {
    console.log(str2 + " error!\n"); // This will cause an error because str2 is not defined in this function
}

concatString3();
concatString4();

//Time function
function myGreeting() {
    var currentHours = new Date().getHours(); // Variable currentDate is assigned the value of the current date and time
    if (currentHours < 12 == currentHours >= 0) {
        document.getElementById("Greeting").innerHTML = "Good morning!"; // If the current hour is less than 12, "Good morning!" is written to the document and put into the HTML element with the id "Greeting"
    }
    else if (currentHours < 18 == currentHours >= 12) {
        document.getElementById("Greeting").innerHTML = "Good afternoon!"; // If the current hour is less than 18, "Good afternoon!" is written to the document and put into the HTML element with the id "Greeting"
    }
    else {
        document.getElementById("Greeting").innerHTML = "Good evening!"; // If the current hour is 18 or greater, "Good evening!" is written to the document and put into the HTML element with the id "Greeting"
    }
}


function AgeFunction() {
    var age = document.getElementById("Age").value; // Variable age is assigned the value of the HTML element with the id "Age"
    if (age >= 18) {
        document.getElementById("LegalAge").innerHTML = "You are in legal age!"; // If age is greater than or equal to 18, "You are in legal age!" is written to the document and put into the HTML element with the id "LegalAge"
    }
    else {
        document.getElementById("LegalAge").innerHTML = "You are still a minor!"; // If age is less than 18, "You are still a minor!" is written to the document and put into the HTML element with the id "LegalAge"
    }
}
