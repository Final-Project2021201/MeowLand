'use strict';

// Displays the stored reviews in the homepage

let reviewDiv = document.getElementById('reviews');
const loadedReviewsArr = JSON.parse(localStorage.getItem('reviews')) || [];
let loadedReviews = new Review(loadedReviewsArr);
for (let i in loadedReviews.reviewItems) {
  let divR = document.createElement('div');
  reviewDiv.appendChild(divR);
  let nameHeading = document.createElement('h6');
  divR.appendChild(nameHeading);
  nameHeading.textContent = loadedReviews.reviewItems[i].name;
  let reviewText = document.createElement('p');
  divR.appendChild(reviewText);
  reviewText.textContent = loadedReviews.reviewItems[i].review;
}

