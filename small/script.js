const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");


searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchForm)
        ){
            searchForm.classList.remove("active");
        }
    });
});
menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)
        ){
            navbar.classList.remove("active");
        }
    });
});

let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active2", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active2";
        }