// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }









  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:false,
    margin:-1,
    autoplayTimeout: 4000,
    stagePadding: 50,
    responsive:{
        0:{
            items:1
        
        },
        320:{
            items:1
        },
        1000:{
            items:3
        },
        1400:{
            items:3.5
        }
    }
  })


let slideIndex = 1;
displaySlide(slideIndex);
 
function moveSlides(n) {
    displaySlide(slideIndex += n);
}
 
function activeSlide(n) {
    displaySlide(slideIndex = n);
}
 
/* Main function */
function displaySlide(n) {
    let i;
    let totalslides =
        document.getElementsByClassName("slide");
    let totaldots =
        document.getElementsByClassName("footerdot");
 
    if (n > totalslides.length) {
        slideIndex = 1;
    }
 
    if (n < 1) {
        slideIndex = totalslides.length;
    }
    for (i = 0; i < totalslides.length; i++) {
        totalslides[i].style.display = "none";
    }
    for (i = 0; i < totaldots.length; i++) {
        totaldots[i].className =
            totaldots[i].className.replace(" active", "");
    }
    totalslides[slideIndex - 1].style.display = "block";
    totaldots[slideIndex - 1].className += " active";
}
