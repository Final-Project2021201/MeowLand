'use strict';

// Displays the stored reviews in the homepage

let reviewDiv = document.getElementById('reviews'), i;
const loadedReviewsArr = JSON.parse(localStorage.getItem('reviews')) || [];
let loadedReviews = new Review(loadedReviewsArr);
let sheet = document.createElement('style');

for (i in loadedReviews.reviewItems) {
  let divReview = document.createElement('div');
  reviewDiv.appendChild(divReview);
  let nameHeading = document.createElement('h6');
  divReview.appendChild(nameHeading);
  nameHeading.textContent = loadedReviews.reviewItems[i].name;
  let reviewText = document.createElement('p');
  divReview.appendChild(reviewText);

  reviewText.textContent = loadedReviews.reviewItems[i].review;
  divReview.style.animationDelay = `${5 * i + 10}s`;
}
let n = loadedReviews.reviewItems.length;
let t = (n + 2) * 5;
sheet.innerHTML = `#reviews {height: 15em; position: relative; overflow: hidden; width: 100%; margin-bottom: 1.3rem;} #reviews div {position: absolute; top: -100%; left: 33%; animation: ${t}s autoplay infinite ease-in-out; padding: 1rem; background-image: radial-gradient(#fff4e0, #ffdada); width: 30rem; height: 14rem; border: #f5a7a7 solid; border-radius: 2rem} @keyframes autoplay {
  0% {top: 100%}
  3% {top: 0%}
  ${1 / (n + 2) * 100}% {top: 0%}
  ${((1 / (n + 2) + 0.5 / t) * 100)}% {top: -100%}
  100% {top: -100%}
}
  #reviews > div:nth-child(1) {animation-delay: 0s}
  #reviews > div:nth-child(2) {animation-delay: 5s}
`;
document.body.appendChild(sheet);

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
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
