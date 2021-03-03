'use strict';

// Loads the array of adopted pets from local storage

const cartPets = JSON.parse(localStorage.getItem('petCart')) || [];
let loadedPetCart = new PetCart(cartPets);

let filterForm = document.getElementById('filterForm'), adoptBtn;
let petsImages = document.getElementById('petsImages');
let clearFilterBtn = document.getElementById('clearFilter');
let shopDiv = document.getElementById('shopDiv'), confirmationMsg;

// Creates event listener and handling function

filterForm.addEventListener('submit', filterProduct);

function filterProduct(event) {
    event.preventDefault();
    document.getElementById('petsImages').innerHTML = '';
    preRenderFilteredItems(event.target.petsType.value, event.target.petsAge.value, event.target.petsPrice.value);
}

// Renders images before filtering

function renderImages() {
    petsImages.innerHTML = '';
    for (let i in petArr) {
        let div = document.createElement('div');
        petsImages.appendChild(div);
        let img = document.createElement('img');
        img.src = petArr[i].source;
        div.appendChild(img);
        let paragraph = document.createElement('p');
        paragraph.innerHTML = `${petArr[i].breed}<br>Age: ${petArr[i].age}<br>Price: ${petArr[i].price}JD`;
        div.appendChild(paragraph);
        adoptBtn = document.createElement('button');
        adoptBtn.textContent = 'Adopt';
        adoptBtn.id = i;
        div.appendChild(adoptBtn);
        adoptBtn.addEventListener('click', handleClicking);
    }
}

renderImages();

// Filters product based on type, age, and price

function preRenderFilteredItems(type, age, priceRange) {
    for (let i in petArr) {
        if (type === petArr[i].animal) {
            if (petArr[i].age.includes(age)) {
                if (petArr[i].price >= parseInt(priceRange) && petArr[i].price < (parseInt(priceRange) + 500)) {
                    renderFilteredItems(i);
                } else if (priceRange === '2000') {
                    renderFilteredItems(i);
                }
            } else if (age === '0') {
                if (petArr[i].price >= parseInt(priceRange) && petArr[i].price < (parseInt(priceRange) + 500)) {
                    renderFilteredItems(i);
                } else if (priceRange === '2000') {
                    renderFilteredItems(i);
                }
            }
        } else if (type === 'Select') {
            if (petArr[i].age.includes(age)) {
                if (petArr[i].price >= parseInt(priceRange) && petArr[i].price < (parseInt(priceRange) + 500)) {
                    renderFilteredItems(i);
                } else if (priceRange === '2000') {
                    renderFilteredItems(i);
                }
            } else if (age === '0') {
                if (petArr[i].price >= parseInt(priceRange) && petArr[i].price < (parseInt(priceRange) + 500)) {
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
    let div = document.createElement('div');
    petsImages.appendChild(div);
    let img = document.createElement('img');
    img.src = petArr[id].source;
    div.appendChild(img);
    let paragraph = document.createElement('p');
    paragraph.innerHTML = `${petArr[id].breed}<br>Age: ${petArr[id].age}<br>Price: ${petArr[id].price}JD`;
    div.appendChild(paragraph);
    adoptBtn = document.createElement('button');
    adoptBtn.textContent = 'Adopt';
    adoptBtn.id = id;
    div.appendChild(adoptBtn);
    adoptBtn.addEventListener('click', handleClicking);
}

// Handles clicking on adopt button so it adds the pet item to the cart and saves it to local storage

function handleClicking(event) {
    if (!confirmationMsg) {
        confirmationMsg = document.createElement('p');
        shopDiv.appendChild(confirmationMsg);
        confirmationMsg.innerHTML = 'Thank you for choosing PetSpot. Click <a href="checkout.html">here<a> to checkout';
    }
    event.preventDefault();
    let index = parseInt(event.target.id);
    loadedPetCart.addPet(petArr[index]);
    loadedPetCart.saveToStorage();
    window.createNotification({
        title: "Added",
        message: "added successed!",
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
        title: "Added",
        message: "added successed"
    });
}

// Creates event listener for clear filter button

clearFilterBtn.addEventListener('click', clearFilter);
function clearFilter(event) {
    renderImages();
}





