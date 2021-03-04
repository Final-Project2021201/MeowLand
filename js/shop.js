'use strict';

// Loads the array of adopted pets from local storage

const cartPets = JSON.parse(localStorage.getItem('petCart')) || [];
let loadedPetCart = new PetCart(cartPets);

let filterForm = document.getElementById('filterForm'), adoptBtn;
let clearFilterBtn = document.getElementById('clearFilter');
let shopDiv = document.getElementById('shopDiv');

// Creates event listener and handling function

filterForm.addEventListener('submit', filterProduct);

function filterProduct(event) {
  event.preventDefault();
  shopDiv.innerHTML = '';
  preRenderFilteredItems(event.target.petsType.value, event.target.petsAge.value, event.target.petsPrice.value);
}

// Renders images before filtering

function renderImages() {

  shopDiv.innerHTML = '';
  for (let i in petArr) {
    let petsImages = document.createElement('div');
    shopDiv.appendChild(petsImages);
    let img = document.createElement('img');
    img.src = petArr[i].source;
    petsImages.appendChild(img);
    let paragraph = document.createElement('p');
    paragraph.innerHTML = `${petArr[i].breed}<br>Age: ${petArr[i].age}<br>Price: ${petArr[i].price}JD`;
    petsImages.appendChild(paragraph);
    adoptBtn = document.createElement('button');
    adoptBtn.textContent = 'Adopt';
    adoptBtn.id = i;
    petsImages.appendChild(adoptBtn);
    adoptBtn.addEventListener('click', handleClicking);
  }

}

renderImages();

// Filters product based on type, age, and price

function preRenderFilteredItems(type, age, priceRange) {
  for (let i in petArr) {
    if (type === petArr[i].animal) {
      if (petArr[i].age.includes(age)) {
        if (petArr[i].price >= parseInt(priceRange) && petArr[i].price < (parseInt(priceRange) + 250)) {
          renderFilteredItems(i);
        } else if (priceRange === '2000') {
          renderFilteredItems(i);
        }
      } else if (age === '0') {
        if (petArr[i].price >= parseInt(priceRange) && petArr[i].price < (parseInt(priceRange) + 250)) {
          renderFilteredItems(i);
        } else if (priceRange === '2000') {
          renderFilteredItems(i);
        }
      }
    } else if (type === 'Select') {
      if (petArr[i].age.includes(age)) {
        if (petArr[i].price >= parseInt(priceRange) && petArr[i].price < (parseInt(priceRange) + 250)) {
          renderFilteredItems(i);
        } else if (priceRange === '2000') {
          renderFilteredItems(i);
        }
      } else if (age === '0') {
        if (petArr[i].price >= parseInt(priceRange) && petArr[i].price < (parseInt(priceRange) + 250)) {
          renderFilteredItems(i);
        } else if (priceRange === '2000') {
          renderFilteredItems(i);
        }
      }
    }
  }
}

// Renders images after filtering

function renderFilteredItems(id) {

  let petsImages = document.createElement('div');
  shopDiv.appendChild(petsImages);
  let img = document.createElement('img');
  img.src = petArr[id].source;
  petsImages.appendChild(img);
  let paragraph = document.createElement('p');
  paragraph.innerHTML = `${petArr[id].breed}<br>Age: ${petArr[id].age}<br>Price: ${petArr[id].price}JD`;
  petsImages.appendChild(paragraph);
  adoptBtn = document.createElement('button');
  adoptBtn.textContent = 'Adopt';
  adoptBtn.id = id;
  petsImages.appendChild(adoptBtn);
  adoptBtn.addEventListener('click', handleClicking);

}

// Defines popup

const myNotification = window.createNotification({
  // options here
});

// Handles clicking on adopt button so it adds the pet item to the cart and saves it to local storage

function handleClicking(event) {
  event.preventDefault();
  let index = parseInt(event.target.id);
  loadedPetCart.addPet(petArr[index]);
  loadedPetCart.saveToStorage();
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
    title: "Success",
    message: "Thank you for choosing PetSpot"
  });
  counter();

}

// Creates event listener for clear filter button

clearFilterBtn.addEventListener('click', clearFilter);
function clearFilter(event) {
  renderImages();
  filterForm.reset();
}





