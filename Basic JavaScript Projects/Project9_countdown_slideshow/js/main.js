function countdown() {
    var seconds = document.getElementById("seconds").value; // Variable seconds is assigned the value of the HTML element with the id "seconds"

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds; // The value of seconds is written to the document and put into the HTML element with the id "timer"
        var time = setTimeout(tick, 1000); // Variable time is assigned the value of the setTimeout function, which calls the tick function after a delay of 1000 milliseconds (1 second)

        if (seconds == -1) {
            alert("Time's up!"); // If seconds is equal to -1, an alert with the message "Time's up!" is displayed
            clearTimeout(time); // The timeout set by the setTimeout function is cleared, preventing the tick function from being called again
            timer.innerHTML = ""; // The innerHTML of the HTML element with the id "timer" is set to an empty string, clearing the displayed countdown
        }
    }
    tick(); // The tick function is called to start the countdown
}

// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// function showSlides(n) { //manual slideshow function
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }

let slideIndex = 0;
showSlides(slideIndex);

function showSlides() { //automatic slideshow function
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";

    // Update slide number text
    slides[slideIndex - 1]
        .getElementsByClassName("numberText")[0]
        .innerHTML = slideIndex + " / " + slides.length;
        
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
