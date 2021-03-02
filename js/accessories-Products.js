'use strict';



let filterFormAcc = document.getElementById('filterFormAcc'), addToCartBtn;
let accessoriesImages = document.getElementById('accessoriesImages');

let accessoriesCart = new AccessoriesCart([]);

// Renders accessories product before filtering

function renderAccessoriesImages() {
    for (let i in accessoriesArr) {
        let img = document.createElement('img');
        img.src = accessoriesArr[i].src;
        accessoriesImages.appendChild(img);
        let paragraph = document.createElement('p');
        paragraph.innerHTML = `${accessoriesArr[i].type}<br>Price:  ${accessoriesArr[i].price} JD`;
        accessoriesImages.appendChild(paragraph);

        addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add To Cart';
        addToCartBtn.id = i;
        accessoriesImages.appendChild(addToCartBtn);
        addToCartBtn.addEventListener('click', handleClickingAddToCart);
    }
}
renderAccessoriesImages();






filterFormAcc.addEventListener('submit', filterAcc);
function filterAcc(event) {
    event.preventDefault();
    document.getElementById('accessoriesImages').innerHTML = '';
    preRenderFilteredItems(event.target.petsType.value, event.target.AccessoriesType.value, event.target.accessoriesPrice.value);
}


// Filters product based on animal, type and price

function preRenderFilteredItems(animal, type, priceRange) {
    for (let i in accessoriesArr) {
        if (animal === accessoriesArr[i].animal) {
            if (type === accessoriesArr[i].type) {
                if (accessoriesArr[i].price >= parseInt(priceRange) && accessoriesArr[i].price < (parseInt(priceRange) + 25)) {
                    renderFilteredAccessories(i);
                } else if (priceRange === '-1') {
                    renderFilteredAccessories(i);
                }
            } else if (type === '0') {
                if (accessoriesArr[i].price >= parseInt(priceRange) && accessoriesArr[i].price < (parseInt(priceRange) + 25)) {
                    renderFilteredAccessories(i);
                } else if (priceRange === '-1') {
                    renderFilteredAccessories(i);
                }
            }
        } else if (animal === 'Select') {
            if (accessoriesArr[i].type.includes(type)) {
                if (accessoriesArr[i].price >= parseInt(priceRange) && accessoriesArr[i].price < (parseInt(priceRange) + 25)) {
                    renderFilteredAccessories(i);
                } else if (priceRange === '-1') {
                    renderFilteredAccessories(i);
                }
            } else if (type === '0') {
                if (accessoriesArr[i].price >= parseInt(priceRange) && accessoriesArr[i].price < (parseInt(priceRange) + 25)) {
                    renderFilteredAccessories(i);
                } else if (priceRange === '-1') {
                    renderFilteredAccessories(i);
                }
            }
        }
    }
}

// Renders accessories images after filtering

function renderFilteredAccessories(id) {
    let img = document.createElement('img');
    img.src = accessoriesArr[id].src;
    accessoriesImages.appendChild(img);
    let paragraph = document.createElement('p');
    paragraph.innerHTML = `${accessoriesArr[id].type}<br>Price:  ${accessoriesArr[id].price} JD`;
    accessoriesImages.appendChild(paragraph);
    addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add To Cart ';
    addToCartBtn.id = id;
    accessoriesImages.appendChild(addToCartBtn);
    addToCartBtn.addEventListener('click', handleClickingAddToCart);
}

// Add accessory Choosen by user to the cart
function handleClickingAddToCart() {
    event.preventDefault();
    let index = parseInt(event.target.id);
    accessoriesCart.addAccessory(accessoriesArr[index]);
    accessoriesCart.saveToStorage();
}

