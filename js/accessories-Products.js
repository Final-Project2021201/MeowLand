'use strict';

let accessoriesArr = [];

let filterFormAcc = document.getElementById('filterFormAcc'), addToCartBtn;
let accessoriesImages = document.getElementById('accessoriesImages');


function Accessories(animal, type, price, src) {
    this.animal = animal;
    this.type = type;
    this.price = price;
    this.src = src;
    accessoriesArr.push(this);
}


const AccessoriesCart = function (items) {
    this.cartAccessories = items;
};

AccessoriesCart.prototype.addAccessory = function (item) {
    this.cartAccessories.push(item);
};

AccessoriesCart.prototype.saveToStorage = function () {
    localStorage.setItem('accessoriesCart', JSON.stringify(this.cartAccessories));
};

AccessoriesCart.prototype.removeAccessory = function (index) {
    let newArr = JSON.parse(localStorage.getItem('accessoriesCart'));
    newArr.splice(index, 1);
    return newArr;
};


function createAccessoriesInstances() {
    new Accessories('Cats', 'Food', 20, '../images/accessories Images/food/Cats/0004537_royal-canin-persian-2kg_430.jpeg');
    new Accessories('Cats', 'Food', 30, '../images/accessories Images/food/Cats/Purina Pro Plan Essentials Cat Food.jpg');
    new Accessories('Cats', 'Food', 50, '../images/accessories Images/food/Cats/Purina Pro Plan Focus Indoor Care Cat Food.jpg');
    new Accessories('Cats', 'Food', 15, '../images/accessories Images/food/Cats/Purina Pro Plan Focus Kitten Food - Chicken & Rice.jpg');
    new Accessories('Cats', 'Food', 10, '../images/accessories Images/food/Cats/Purina Pro Plan Focus Kitten Food.jpg');
    new Accessories('Cats', 'Food', 80, '../images/accessories Images/food/Cats/Purina Pro Plan Savor Cat Food - Tuna, Shrimp & Rice.jpg');
    new Accessories('Cats', 'Food', 55, '../images/accessories Images/food/Cats/Purina Pro Plan Savor Cat Food.jpg');
    new Accessories('Cats', 'Food', 30, '../images/accessories Images/food/Cats/Purina Pro Plan Specialized Sensitive Skin & Stomach Cat Food.jpg');
    new Accessories('Dogs', 'Food', 10, '../images/accessories Images/food/Dogs/Authority Dental & Multivitamin.jpg');
    new Accessories('Dogs', 'Food', 40, '../images/accessories Images/food/Dogs/Breed Chicken & Pea.jpg');
    new Accessories('Dogs', 'Food', 18, '../images/accessories Images/food/Dogs/Cuts in Gravy Adult Wet Dog Food.jpg');
    new Accessories('Dogs', 'Food', 45, '../images/accessories Images/food/Dogs/Digestive Fish & Potato.jpg');
    new Accessories('Dogs', 'Food', 60, '../images/accessories Images/food/Dogs/Digestive.jpg');
    new Accessories('Dogs', 'Food', 50, '../images/accessories Images/food/Dogs/Hip & Joint.jpg');
    new Accessories('Dogs', 'Food', 30, '../images/accessories Images/food/Dogs/Small Bites Chicken & Rice.jpg');
    new Accessories('Dogs', 'Food', 23, '../images/accessories Images/food/Dogs/Stew in Gravy.jpg');
    new Accessories('Dogs', 'Food', 15, '../images/accessories Images/food/Dogs/Tender Blends Stew Wet Mature.jpg');
    new Accessories('Birds', 'Food', 5, '../images/accessories Images/food/Birds/Crunch Sticks Orange & Apricot Parakeet Treat.jpg');
    new Accessories('Birds', 'Food', 15, '../images/accessories Images/food/Birds/FDPH Feather Parakeet Bird Food.jpg');
    new Accessories('Birds', 'Food', 30, '../images/accessories Images/food/Birds/Forti-Diet Egg-Cite Parakeet Food.jpg');
    new Accessories('Birds', 'Food', 35, '../images/accessories Images/food/Birds/Forti-Diet Pro Health Cockatiel Food.jpg');
    new Accessories('Birds', 'Food', 20, '../images/accessories Images/food/Birds/FruitBlend Medium Bird Food.jpg');
    new Accessories('Birds', 'Food', 55, '../images/accessories Images/food/Birds/Seed & Pellet Medley Finch & Canary Diet.jpg');
    new Accessories('Rabbits', 'Food', 55, '../images/accessories Images/food/Rabbits/Bunny Treats.jpg');
    new Accessories('Rabbits', 'Food', 55, '../images/accessories Images/food/Rabbits/Burgess Excel Nuggets.jpg');
    new Accessories('Rabbits', 'Food', 55, '../images/accessories Images/food/Rabbits/dried natural grass and flowers selection.jpg');
    new Accessories('Rabbits', 'Food', 55, '../images/accessories Images/food/Rabbits/Harvest Rabbit.jpg');
    new Accessories('Rabbits', 'Food', 55, '../images/accessories Images/food/Rabbits/Kaytee Timothy Complete Rabbit.jpg');
    new Accessories('Rabbits', 'Food', 55, '../images/accessories Images/food/Rabbits/Meijer Pet Rabbit Food.jpg');
    new Accessories('Rabbits', 'Food', 55, '../images/accessories Images/food/Rabbits/Pride Rabbit Feed.jpg');
    new Accessories('Rabbits', 'Food', 55, '../images/accessories Images/food/Rabbits/Supreme Rabbit Food.jpg');
    new Accessories('Cats', 'Clothes', 10, '../images/accessories Images/clothes/Cats/BUKI Beach Shirts Navy.jpg');
    new Accessories('Cats', 'Clothes', 20, '../images/accessories Images/clothes/Cats/BUKI Hoodie Mix Colour.jpg');
    new Accessories('Cats', 'Clothes', 15, '../images/accessories Images/clothes/Cats/cat hat for birthday.jpg');
    new Accessories('Cats', 'Clothes', 30, '../images/accessories Images/clothes/Cats/Kitten Coat Jacket.jpg');
    new Accessories('Cats', 'Clothes', 35, '../images/accessories Images/clothes/Cats/Knitted Cute Sweater.jpg');
    new Accessories('Cats', 'Clothes', 29, '../images/accessories Images/clothes/Cats/Sphynx cat clothes.jpg');
    new Accessories('Cats', 'Clothes', 15, '../images/accessories Images/clothes/Cats/Sushi Clothes.jpg');
    new Accessories('Cats', 'Clothes', 20, '../images/accessories Images/clothes/Cats/Sweatshirt Pullover Sweater.jpg');
    new Accessories('Cats', 'Clothes', 45, '../images/accessories Images/clothes/Cats/Tuxedo Bandana Wedding Day.jpg');
    new Accessories('Cats', 'Clothes', 55, '../images/accessories Images/clothes/Cats/Winter Warm dress.jpg');
    new Accessories('Dogs', 'Clothes', 10, '../images/accessories Images/clothes/Dogs/Blue Mustache Pet Bandana.jpg');
    new Accessories('Dogs', 'Clothes', 30, '../images/accessories Images/clothes/Dogs/Buttons and Bones Celebrations Birthday Tee.jpg');
    new Accessories('Dogs', 'Clothes', 52, '../images/accessories Images/clothes/Dogs/Favorite Child Pet Tee.jpg');
    new Accessories('Dogs', 'Clothes', 20, '../images/accessories Images/clothes/Dogs/Little Prince Pet Tee.jpg');
    new Accessories('Dogs', 'Clothes', 35, '../images/accessories Images/clothes/Dogs/Patrick Day Lil Miss Dog Dress.jpg');
    new Accessories('Dogs', 'Clothes', 60, '../images/accessories Images/clothes/Dogs/Rainbow Pet Sweatshirt with Poop Bags.jpg');
    new Accessories('Dogs', 'Clothes', 26, '../images/accessories Images/clothes/Dogs/Ribbon Bow Tie Collar Slide Accessory.jpg');
    new Accessories('Birds', 'Clothes', 7, '../images/accessories Images/clothes/Birds/Conure-hoodie bird cloths.jpg');
    new Accessories('Birds', 'Clothes', 29, '../images/accessories Images/clothes/Birds/Flight Suit for Parrots African Greys.jpg');
    new Accessories('Birds', 'Clothes', 14, '../images/accessories Images/clothes/Birds/Flying Cotton Suit Bear Costume.jpg');
    new Accessories('Birds', 'Clothes', 5, '../images/accessories Images/clothes/Birds/Hand Knit Bird Sweater.jpg');
    new Accessories('Birds', 'Clothes', 10, '../images/accessories Images/clothes/Birds/Parrot Diapers.jpg');
    new Accessories('Birds', 'Clothes', 51, '../images/accessories Images/clothes/Birds/Pet bird Hoodie - Vintage Santa - all sizes Petite to Large.jpg');
    new Accessories('Birds', 'Clothes', 12, '../images/accessories Images/clothes/Birds/Pigeon & Dove Pants Bird Parrot Diaper Flight Suit Diaper.jpg');
    new Accessories('Birds', 'Clothes', 28, '../images/accessories Images/clothes/Birds/School Uniform With Red Scarf Parrot Bird Costume.jpg');
    new Accessories('Rabbits', 'Clothes', 28, '../images/accessories Images/clothes/Rabbits/Baby Yoda Hat for Rabbit Pet.jpg');
    new Accessories('Rabbits', 'Clothes', 28, '../images/accessories Images/clothes/Rabbits/Bunny beanie.jpg');
    new Accessories('Rabbits', 'Clothes', 28, '../images/accessories Images/clothes/Rabbits/Bunny Racer.jpg');
    new Accessories('Rabbits', 'Clothes', 28, '../images/accessories Images/clothes/Rabbits/Customize bunny dress.jpg');
    new Accessories('Rabbits', 'Clothes', 28, '../images/accessories Images/clothes/Rabbits/personalized bandana for bunny rabbits.jpg');
    new Accessories('Rabbits', 'Clothes', 28, '../images/accessories Images/clothes/Rabbits/Pet Rabbit Pokemon Hat.jpg');
    new Accessories('Rabbits', 'Clothes', 28, '../images/accessories Images/clothes/Rabbits/Rabbit Bow-tie.jpg');
    new Accessories('Rabbits', 'Clothes', 28, '../images/accessories Images/clothes/Rabbits/Winter Warm Coral Fleece.jpg');
    new Accessories('Cats', 'Toys', 10, '../images/accessories Images/toys/Cats/Ball Track & Scratcher Cat Toy.jpg');
    new Accessories('Cats', 'Toys', 15, '../images/accessories Images/toys/Cats/Cozy Pop-Open Play Tunnel Cat Toy.jpg');
    new Accessories('Cats', 'Toys', 30, '../images/accessories Images/toys/Cats/Eight Track Cat Toy.jpg');
    new Accessories('Cats', 'Toys', 25, '../images/accessories Images/toys/Cats/Fuzzy Feathers Teaser Cat Toy.jpg');
    new Accessories('Cats', 'Toys', 55, '../images/accessories Images/toys/Cats/Mini Tennis Ball with Bell Cat Toy.jpg');
    new Accessories('Cats', 'Toys', 52, '../images/accessories Images/toys/Cats/Pop-Up Tri-Tunnel Cat Toy.jpg');
    new Accessories('Dogs', 'Toys', 15, '../images/accessories Images/toys/Dogs/Classic Dog Toy - Treat Dispensing.jpg');
    new Accessories('Dogs', 'Toys', 20, '../images/accessories Images/toys/Dogs/Dog Treat - Peanut Butter.jpg');
    new Accessories('Dogs', 'Toys', 35, '../images/accessories Images/toys/Dogs/Dogsicle Flattie Dog Toy - Crinkle.jpg');
    new Accessories('Dogs', 'Toys', 52, '../images/accessories Images/toys/Dogs/Everlasting Treats Dog Toy Treat Insert - Bacon Flavor.jpg');
    new Accessories('Dogs', 'Toys', 53, '../images/accessories Images/toys/Dogs/ouble Bone Chew Dog Toy.jpg');
    new Accessories('Dogs', 'Toys', 5, '../images/accessories Images/toys/Dogs/Puppy Chew Dental Dog Bone.jpg');
    new Accessories('Birds', 'Toys', 5, '../images/accessories Images/toys/Birds/Birdie Basketball Bird Toy.jpg');
    new Accessories('Birds', 'Toys', 10, '../images/accessories Images/toys/Birds/Cozy Cabana Bird Hut.jpg');
    new Accessories('Birds', 'Toys', 25, '../images/accessories Images/toys/Birds/Lookout Perch Toy.jpg');
    new Accessories('Birds', 'Toys', 35, '../images/accessories Images/toys/Birds/Mirror Bird Perch.jpg');
    new Accessories('Birds', 'Toys', 45, '../images/accessories Images/toys/Birds/Safari Feather Ball Cat Toys - 2 Pack.jpg');
    new Accessories('Birds', 'Toys', 50, '../images/accessories Images/toys/Birds/Soft Fuzzy Bird Hut.jpg');
    new Accessories('Birds', 'Toys', 51, '../images/accessories Images/toys/Birds/Wood Bird Swing.jpg');
    new Accessories('Birds', 'Toys', 53, '../images/accessories Images/toys/Birds/Wooden Wind Chime Bird Toy.jpg');
    new Accessories('Rabbits', 'Toys', 53, '../images/accessories Images/toys/Rabbits/Bed Mat for Rabbit.jpg');
    new Accessories('Rabbits', 'Toys', 53, '../images/accessories Images/toys/Rabbits/Enrichment Toy for Pets.jpg');
    new Accessories('Rabbits', 'Toys', 53, '../images/accessories Images/toys/Rabbits/Guinea Pig toys Boredom breaker.jpg');
    new Accessories('Rabbits', 'Toys', 53, '../images/accessories Images/toys/Rabbits/Mental Stimulation for Pets.jpg');
    new Accessories('Rabbits', 'Toys', 53, '../images/accessories Images/toys/Rabbits/Rabbit cube.jpg');
    new Accessories('Rabbits', 'Toys', 53, '../images/accessories Images/toys/Rabbits/Wooden Animal Tunnel Exercise Tube.jpg');





}

createAccessoriesInstances();
let accessoriesCart = new AccessoriesCart([]);

// Renders accessories product before filtering

function renderAccessoriesImages() {
    for (let i in accessoriesArr) {
        let img = document.createElement('img');
        img.src = accessoriesArr[i].src;
        accessoriesImages.appendChild(img);
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
    addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add To Cart ';
    addToCartBtn.TEXT_NODE
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
