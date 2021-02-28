'use strict';

let petCart = new PetCart([]);

let filterForm = document.getElementById('filterForm'), adoptBtn;
let petsImages = document.getElementById('petsImages');

// Creates event listener and handling function

filterForm.addEventListener('submit', filterProduct);

function filterProduct(event) {
    event.preventDefault();
    document.getElementById('petsImages').innerHTML = '';
    preRenderFilteredItems(event.target.petsType.value, event.target.petsAge.value, event.target.petsPrice.value);
}

// Renders images before filtering

function renderImages(){
    for(let i in petArr){
        let img = document.createElement('img');
        img.src = petArr[i].source;
        petsImages.appendChild(img);
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
    let img = document.createElement('img');
    img.src = petArr[id].source;
    petsImages.appendChild(img);
    adoptBtn = document.createElement('button');
    adoptBtn.textContent = 'Adopt';
    adoptBtn.id = id;
    petsImages.appendChild(adoptBtn);
    adoptBtn.addEventListener('click', handleClicking);
}

function handleClicking() {
    event.preventDefault();
    let index = parseInt(event.target.id);
    petCart.addPet(petArr[index]);
    petCart.saveToStorage();
    console.log(petCart);
}


