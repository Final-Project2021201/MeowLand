'use strict';



let filterFormAcc = document.getElementById('filterFormAcc'), addToCartBtn;
let accessoriesImages = document.getElementById('accessoriesImages');
let clearFilterAccessBtn = document.getElementById('clearFilterAccessories');
let accessoriesCart = new AccessoriesCart([]);

// Renders accessories product before filtering

function renderAccessoriesImages() {
    accessoriesImages.innerHTML = '';
    for (let i in accessoriesArr) {
        let div = document.createElement('div');
        accessoriesImages.appendChild(div);
        let img = document.createElement('img');
        img.src = accessoriesArr[i].src;
        div.appendChild(img);
        let paragraph = document.createElement('p');
        paragraph.innerHTML = `${accessoriesArr[i].type}<br>Price:  ${accessoriesArr[i].price} JD`;
        div.appendChild(paragraph);
        addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add To Cart';
        addToCartBtn.id = i;
        div.appendChild(addToCartBtn);
        addToCartBtn.addEventListener('click', handleClickingAddToCart);
    }
}
renderAccessoriesImages();




//Fiter accessories btn event

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
    let div = document.createElement('div');
    accessoriesImages.appendChild(div);
    let img = document.createElement('img');
    img.src = accessoriesArr[id].src;
    div.appendChild(img);
    let paragraph = document.createElement('p');
    paragraph.innerHTML = `${accessoriesArr[id].type}<br>Price:  ${accessoriesArr[id].price} JD`;
    div.appendChild(paragraph);
    addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add To Cart ';
    addToCartBtn.id = id;
    div.appendChild(addToCartBtn);
    addToCartBtn.addEventListener('click', handleClickingAddToCart);
}

//Clear fiteration for Accessoiers

clearFilterAccessBtn.addEventListener('click', clearFilter_Accessories);
function clearFilter_Accessories(event) {
    filterFormAcc.reset();
    renderAccessoriesImages();
}

// Add accessory Choosen by user to the cart
function handleClickingAddToCart() {
    event.preventDefault();
    let index = parseInt(event.target.id);
    accessoriesCart.addAccessory(accessoriesArr[index]);
    accessoriesCart.saveToStorage();



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
        message: "Item added"
    });

}
