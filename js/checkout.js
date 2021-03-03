'use strict';

let loadedPetCart;
let cartInfo = document.createElement('tbody');
let AccessoriesCartInfo = document.createElement('tbody');
let cartTableDiv = document.getElementById('cartTableDiv');
let cartTable = document.getElementById('cartTable');
let personalInfo = document.getElementById('personalInfo');
personalInfo.addEventListener('submit', handlePersonalInfoSubmit);
cartInfo.addEventListener('click', removeItemFromCart);

function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

function loadCart() {
  const cartPets = JSON.parse(localStorage.getItem('petCart')) || [];
  loadedPetCart = new PetCart(cartPets);
}

loadCart();
function showCart() {
  for (let i in loadedPetCart.adoptedPets) {
    cartTable.appendChild(cartInfo);
    let tableRow = document.createElement('tr');
    cartInfo.appendChild(tableRow);
    let linkDelete = document.createElement('td');
    tableRow.appendChild(linkDelete);
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    linkDelete.appendChild(deleteButton);
    let type = document.createElement('td');
    tableRow.appendChild(type);
    type.textContent = loadedPetCart.adoptedPets[i].breed;
    let price = document.createElement('td');
    tableRow.appendChild(price);
    price.textContent = loadedPetCart.adoptedPets[i].price;
    let pictureData = document.createElement('td');
    tableRow.appendChild(pictureData);
    let picture = document.createElement('img');
    pictureData.appendChild(picture);
    for (let j in petArr) {
      if (petArr[j].source == loadedPetCart.adoptedPets[i].source) {
        picture.src = petArr[j].source;
      }
    }
  }
}

function clearCart() {
  cartInfo.innerHTML = '';
}

function removeItemFromCart(event) {
  let itemIndex = event.path[2].rowIndex - 1;
  let deletedRow = cartInfo.childNodes[itemIndex];
  console.log(cartInfo.childNodes[itemIndex]);
  cartInfo.removeChild(deletedRow);
  let newArr = loadedPetCart.removePet(itemIndex);
  localStorage.setItem('petCart', JSON.stringify(newArr));
  checkTableEmpty();
  window.createNotification({
    // close on click
    closeOnClick: true,

    // displays close button
    displayCloseButton: false,

    // nfc-top-left
    // nfc-bottom-right
    // nfc-bottom-left
    positionClass: 'nfc-top-right',

    // callback
    onclick: false,

    // timeout in milliseconds
    showDuration: 3500,

    // success, info, warning, error, and none
    theme: 'warning'

  })({
    title: "Success",
    message: "Item removed"
  });
}

const loadedReviewsArr = JSON.parse(localStorage.getItem('reviews')) || [];
let loadedReviews = new Review(loadedReviewsArr);

const submitPersonalInfoNotif = window.createNotification({});
function handlePersonalInfoSubmit(event) {
  event.preventDefault();
  let newReview = new NewReview(event.target.fullName.value, event.target.review.value);
  console.log(event.target.fullName.value);
  loadedReviews.addReview(newReview);
  loadedReviews.saveReviewToStorage();
  personalInfo.reset();
  window.createNotification({
    // close on click
    closeOnClick: true,

    // displays close button
    displayCloseButton: false,

    // nfc-top-left
    // nfc-bottom-right
    // nfc-bottom-left
    positionClass: 'nfc-top-right',

    // callback
    onclick: false,

    // timeout in milliseconds
    showDuration: 3500,

    // success, info, warning, error, and none
    theme: 'success'

  })({
    title: "Submitted",
    message: "The order will be delivered in 1 Day \n \n Thank You"
  });
}

let loadedAccessoriesCart;
AccessoriesCartInfo.addEventListener('click', removeAccessoryFromCart);

function renderAccessoriesCart() {
  loadAccessoryCart();
  clearAccessoryCart();
  showAccessoryCart();
}

function loadAccessoryCart() {
  const accessoriesCart = JSON.parse(localStorage.getItem('accessoriesCart')) || [];
  loadedAccessoriesCart = new AccessoriesCart(accessoriesCart);
}

loadAccessoryCart();

function showAccessoryCart() {
  for (let i in loadedAccessoriesCart.cartAccessories) {
    cartTable.appendChild(AccessoriesCartInfo);
    let tableRow = document.createElement('tr');
    AccessoriesCartInfo.appendChild(tableRow);
    let linkDelete = document.createElement('td');
    tableRow.appendChild(linkDelete);
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    linkDelete.appendChild(deleteButton);
    let type = document.createElement('td');
    tableRow.appendChild(type);
    type.textContent = loadedAccessoriesCart.cartAccessories[i].type;
    let price = document.createElement('td');
    tableRow.appendChild(price);
    price.textContent = loadedAccessoriesCart.cartAccessories[i].price;
    let pictureData = document.createElement('td');
    tableRow.appendChild(pictureData);
    let picture = document.createElement('img');
    pictureData.appendChild(picture);
    for (let j in accessoriesArr) {
      if (accessoriesArr[j].src == loadedAccessoriesCart.cartAccessories[i].src) {
        picture.src = accessoriesArr[j].src;
      }
    }
  }
}

function clearAccessoryCart() {
  AccessoriesCartInfo.innerHTML = '';
}

const removeAccessoryNotif = window.createNotification({});
function removeAccessoryFromCart(event) {
  loadCart();
  let itemIndex;
  if(loadedPetCart.adoptedPets.length > 0){
    itemIndex = event.path[2].rowIndex - (loadedPetCart.adoptedPets.length + 1);
  } else {
    itemIndex = event.path[2].rowIndex - 1;
  }
  let deletedRow = AccessoriesCartInfo.childNodes[itemIndex];
  AccessoriesCartInfo.removeChild(deletedRow);
  let newArr = loadedAccessoriesCart.removeAccessory(itemIndex);
  localStorage.setItem('accessoriesCart', JSON.stringify(newArr));
  checkTableEmpty();
  window.createNotification({
    // close on click
    closeOnClick: true,

    // displays close button
    displayCloseButton: false,

    // nfc-top-left
    // nfc-bottom-right
    // nfc-bottom-left
    positionClass: 'nfc-top-right',

    // callback
    onclick: false,

    // timeout in milliseconds
    showDuration: 3500,

    // success, info, warning, error, and none
    theme: 'warning'

  })({
    title: "Success",
    message: "Item deleted"
  });
}

function checkTableEmpty(){
  loadCart();
  loadAccessoryCart();
  if (loadedPetCart.adoptedPets.length === 0 && loadedAccessoriesCart.cartAccessories.length === 0){
    cartTableDiv.innerHTML = '';
  }
}
checkTableEmpty();
renderCart();
renderAccessoriesCart();
