let slide = document.querySelectorAll(".carosuel_slide");
let curr_slide = 0;
let total_slide = slide.length; 

function change_slide(){
    //Changing the active slide to left one:
    slide[curr_slide].classList.remove("slide_active");
    slide[curr_slide].classList.add("slide_left");
    //Changing right one to active slide:
    curr_slide = (curr_slide + 1) % total_slide;
    slide[curr_slide].classList.remove("slide_left", "slide_right");
    slide[curr_slide].classList.add("slide_active");
    //changing the prev_slide to right_side:
    let prev_slide = (curr_slide - 1 + total_slide)%total_slide;
    slide[prev_slide].classList.remove("slide_active");
    slide[prev_slide].classList.add("slide_right");
}
setInterval(change_slide, 2000);