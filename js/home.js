'use strict';

// Displays the stored reviews in the homepage

let reviewDiv = document.getElementById('reviews');
const loadedReviewsArr = JSON.parse(localStorage.getItem('reviews')) || [];
let loadedReviews = new Review(loadedReviewsArr);
for (let i in loadedReviews.reviewItems){
  let divreview=document.createElement('div');
  reviewDiv.appendChild(divreview);
  let nameHeading = document.createElement('h6');
  divreview.appendChild(nameHeading);
  nameHeading.textContent = loadedReviews.reviewItems[i].name;
  let reviewText = document.createElement('p');
  divreview.appendChild(reviewText);
  reviewText.textContent = loadedReviews.reviewItems[i].review;
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