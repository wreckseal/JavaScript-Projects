function concatString() {
    var str1 = "Welcome";// Variable str1 is assigned the value "Welcome"
    var str2 = "to"; // Variable str2 is assigned the value "to"
    var str3 = "my"; // Variable str3 is assigned the value "my"
    var str4 = "world!"; // Variable str4 is assigned the value "world!"
    var result = str1.concat(" ", str2, " ", str3, " ", str4); // Variable result is assigned the value of str1 concatenated with a space, str2, a space, str3, another space, and str4
    document.getElementById("Concatenate").innerHTML = result; // The value of result is written to the document and put into the HTML element with the id "Concatenate"
}

function sliceString() {
    var str = "Hello, welcome to my world!"; // Variable str is assigned the value "Hello, welcome to my world!"
    var slicedStr = str.slice(7, 14); // Variable slicedStr is assigned the value of str sliced from index 7 to index 14
    document.getElementById("Slice").innerHTML = slicedStr; // The value of slicedStr is written to the document and put into the HTML element with the id "Slice"
}

function toUpperCaseString() {
    var str = "hello, welcome to my world!"; // Variable str is assigned the value "hello, welcome to my world!"
    var upperStr = str.toUpperCase(); // Variable upperStr is assigned the value of str converted to uppercase
    document.getElementById("UpperCase").innerHTML = upperStr; // The value of upperStr is written to the document and put into the HTML element with the id "UpperCase"
}

function searchString() {
    var str = "Hello, welcome to my world!"; // Variable str is assigned the value "Hello, welcome to my world!"
    var searchTerm = "welcome"; // Variable searchTerm is assigned the value "welcome"
    var searchResult = str.search(searchTerm); // Variable searchResult is assigned the value of the index of the first occurrence of searchTerm in str
    document.getElementById("Search").innerHTML = searchResult; // The value of searchResult is written to the document and put into the HTML element with the id "Search"
}

function numToString() {
    var num = 12345; // Variable num is assigned the value 12345
    var strNum = num.toString(16); // Variable strNum is assigned the value of num converted to a string in base 16 (hexadecimal)
    document.getElementById("ToString").innerHTML = strNum; // The value of strNum is written to the document and put into the HTML element with the id "ToString"
}

function precisionString() {
    var num = 123.456789; // Variable num is assigned the value 123.456789
    var preciseNum = num.toPrecision(5); // Variable preciseNum is assigned the value of num formatted to a specified length of 5 significant digits
    document.getElementById("Precision").innerHTML = preciseNum; // The value of preciseNum is written to the document and put into the HTML element with the id "Precision"
}

function fixedString() {
    var num = 123.456789; // Variable num is assigned the value 123.456789
    var fixedNum = num.toFixed(3); // Variable fixedNum is assigned the value of num formatted to a specified number of decimal places (2 in this case)
    document.getElementById("Fixed").innerHTML = fixedNum; // The value of fixedNum is written to the document and put into the HTML element with the id "Fixed"
}

function valueOfString() {
    var num = 100 + 23; // Variable num is assigned the value of the expression 100 + 23, which evaluates to 123
    var valueNum = num.valueOf(); // Variable valueNum is assigned the primitive value of num
    document.getElementById("ValueOf").innerHTML = valueNum; // The value of valueNum is written to the document and put into the HTML element with the id "ValueOf"
}