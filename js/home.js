'use strict';

// Displays the stored reviews in the homepage

let reviewDiv = document.getElementById('reviews');
const loadedReviewsArr = JSON.parse(localStorage.getItem('reviews')) || [];
let loadedReviews = new Review(loadedReviewsArr);
console.log(loadedReviews);
for (let i in loadedReviews.reviewItems){
  let nameHeading = document.createElement('h6');
  reviewDiv.appendChild(nameHeading);
  nameHeading.textContent = loadedReviews.reviewItems[i].name;
  let reviewText = document.createElement('p');
  reviewDiv.appendChild(reviewText);
  reviewText.textContent = loadedReviews.reviewItems[i].review;
}

