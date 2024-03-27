//

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

let intervalID = null ;

//This is one way of doing it.
//initializeSlider();
// DOMContentLoader
document.addEventListener("DOMContentLoaded", initializeSlider);

//! Populate the webBrowser with the first image.
function initializeSlider(){
    // Prevent the program from displaying errors if there's no image to display.
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(nextSlide, 1000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function previousSlide() {
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}