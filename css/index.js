var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(function() { plusSlides(1); }, 4000); // Change image every 2 seconds
}

// slide show 2 for equipments
var equIndex = 1;
showSlides2(equIndex);

function plusSlides2(n) {
    showSlides2(equIndex += n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length)
    {
      equIndex = 1
   }    
    if (n < 1) 
   {
    equIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[equIndex-1].style.display = "block";
    setTimeout(function() { plusSlides2(1); }, 3000);
}

// var equInterval = setInterval(function() {
//   plusSlides2(1);
// }, 4000);