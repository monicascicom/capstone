// Nav collapse

$('.collapse').collapse()

// Slideshow/lightbox modal

// Open the modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Workouts display function
function workoutDisplay(){
		if (document.getElementById("yesMon").checked){
      document.getElementById("monday").style.display="block";
		}
		else{
			document.getElementById("monday").style.display="none";
		}

    if (document.getElementById("yesTue").checked){
      document.getElementById("tuesday").style.display="block";
		}
		else{
			document.getElementById("tuesday").style.display="none";
		}

    if (document.getElementById("yesWed").checked){
      document.getElementById("wednesday").style.display="block";
    }
    else{
      document.getElementById("wednesday").style.display="none";
    }

    if (document.getElementById("yesThu").checked){
      document.getElementById("thursday").style.display="block";
    }
    else{
      document.getElementById("thursday").style.display="none";
    }

    if (document.getElementById("yesSat").checked){
      document.getElementById("saturday").style.display="block";
		}
		else{
			document.getElementById("saturday").style.display="none";
		}
  }
