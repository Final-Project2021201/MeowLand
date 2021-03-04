'use strict';

// creating constructor function for pets and new pet instances

function Pet(animal, breed, age, price, source) {
  this.animal = animal;
  this.breed = breed;
  this.age = age;
  this.price = price;
  this.source = source;
  petArr.push(this);
}

function Counter() {
  const accessoriesCart = JSON.parse(localStorage.getItem('accessoriesCart')) || [];
  const petscart = JSON.parse(localStorage.getItem('petCart')) || [];
  let count = document.getElementById('cartCount');
  count.textContent = accessoriesCart.length + petscart.length;
}

Counter();

let petArr = [];

const PetCart = function (items) {
  this.adoptedPets = items;
};

PetCart.prototype.addPet = function (item) {
  this.adoptedPets.push(item);
};

PetCart.prototype.saveToStorage = function () {
  localStorage.setItem('petCart', JSON.stringify(this.adoptedPets));
};

PetCart.prototype.removePet = function (index) {
  let newArr = JSON.parse(localStorage.getItem('petCart'));
  newArr.splice(index, 1);
  return newArr;
};

// Creates constructor function for new reviews

const Review = function (reviews) {
  this.reviewItems = reviews;
};

Review.prototype.addReview = function (review) {
  this.reviewItems.push(review);
};

Review.prototype.saveReviewToStorage = function () {
  localStorage.setItem('reviews', JSON.stringify(this.reviewItems));
};

function NewReview(name, review) {
  this.name = name;
  this.review = review;
}


function createPetInstances() {
  new Pet('Dogs', 'German Shepherd', '2 months', 260, '../images/dogs/german-shepherd-2mon.jpg');
  new Pet('Dogs', 'German Shepherd', '1 year', 400, '../images/dogs/german-shepherd-1yr.jpg');
  new Pet('Dogs', 'Golden Retriever', '2 months', 120, '../images/dogs/golden-retriever-2mon.jpg');
  new Pet('Dogs', 'Golden Retriever', '2 years', 380, '../images/dogs/golden-retriever-2yr.jpg');
  new Pet('Dogs', 'Pomeranian', '1 month', 360, '../images/dogs/pomeranian-1mon.jpg');
  new Pet('Dogs', 'Pomeranian', '1 year', 520, '../images/dogs/pomeranian-1yr.jpg');
  new Pet('Dogs', 'Poodle', '3 months', 320, '../images/dogs/poodle-3mon.jpg');
  new Pet('Dogs', 'Poodle', '3 years', 800, '../images/dogs/poodle-3yr.jpg');
  new Pet('Dogs', 'Samoyed', '1 month', 490, '../images/dogs/samoyed-1mon.jpg');
  new Pet('Dogs', 'Samoyed', '2 years', 800, '../images/dogs/samoyed-2yr.jpg');
  new Pet('Dogs', 'Siberian Husky', '1 month', 260, '../images/dogs/siberian-husky-1mon.jpg');
  new Pet('Dogs', 'Siberian Husky', '2 years', 510, '../images/dogs/siberian-husky-2yr.jpg');
  new Pet('Cats', 'American Shorthair', '2 months', 100, '../images/cats/american-2mon.jpg');
  new Pet('Cats', 'American Shorthair', '1 year', 270, '../images/cats/american-1yr.jpg');
  new Pet('Cats', 'British Shorthair', '2 months', 120, '../images/cats/british-2mon.jpg');
  new Pet('Cats', 'British Shorthair', '1 year', 300, '../images/cats/british-1yr.jpg');
  new Pet('Cats', 'Maine Coon', '4 months', 400, '../images/cats/maine-coon-4mon.jpg');
  new Pet('Cats', 'Maine Coon', '2 years', 200, '../images/cats/maine-coon-2yr.jpg');
  new Pet('Cats', 'Persian', '1 month', 260, '../images/cats/persian-1mon.jpg');
  new Pet('Cats', 'Persian', '2 years', 530, '../images/cats/persian-2yr.jpg');
  new Pet('Cats', 'Ragdoll', '3 months', 230, '../images/cats/ragdoll-3mon.jpg');
  new Pet('Cats', 'Ragdoll', '3 years', 600, '../images/cats/ragdoll-3yr.jpg');
  new Pet('Cats', 'Siamese', '2 months', 210, '../images/cats/siamese-2mon.jpg');
  new Pet('Cats', 'Siamese', '2 years', 630, '../images/cats/siamese-2yr.jpg');
  new Pet('Birds', 'African Grey', '2 months', 200, '../images/birds/african-grey-2mon.jpg');
  new Pet('Birds', 'African Grey', '3 years', 760, '../images/birds/african-grey-3yr.jpg');
  new Pet('Birds', 'Amazon Parrot', '1 month', 300, '../images/birds/amazon-parrot-1mon.jpg');
  new Pet('Birds', 'Amazon Parrot', '2 years', 900, '../images/birds/amazon-parrot-2yr.jpg');
  new Pet('Birds', 'Budgie', '1 month', 210, '../images/birds/budgie-1mon.jpg');
  new Pet('Birds', 'Budgie', '1 year', 550, '../images/birds/budgie-1yr.jpg');
  new Pet('Birds', 'Canary', '2 months', 200, '../images/birds/canary-2mon.jpg');
  new Pet('Birds', 'Canary', '1 year', 480, '../images/birds/canary-1yr.jpg');
  new Pet('Birds', 'Cockatiel', '1 month', 200, '../images/birds/cockatiel-1mon.jpg');
  new Pet('Birds', 'Cockatiel', '1 year', 480, '../images/birds/cockatiel-1yr.jpg');
  new Pet('Birds', 'Finch', '2 months', 150, '../images/birds/finch-2mon.jpg');
  new Pet('Birds', 'Finch', '1 year', 290, '../images/birds/finch-1yr.jpg');
  new Pet('Rabbits', 'Dutch', '1 month', 280, '../images/rabbits/dutch-1mon.jpg');
  new Pet('Rabbits', 'Dutch', '1 year', 640, '../images/rabbits/dutch-1yr.jpg');
  new Pet('Rabbits', 'Dwarf Hotot', '5 months', 100, '../images/rabbits/dwarf-hotot-5mon.png');
  new Pet('Rabbits', 'Dwarf Hotot', '2 years', 300, '../images/rabbits/dwarf-hotot-2yr.jpg');
  new Pet('Rabbits', 'Holland Lop', '2 months', 120, '../images/rabbits/holland-lop-2mon.jpg');
  new Pet('Rabbits', 'Holland Lop', '3 years', 290, '../images/rabbits/holland-lop-3yr.jpg');
  new Pet('Rabbits', 'Lionhead', '2 months', 100, '../images/rabbits/lionhead-2mon.jpg');
  new Pet('Rabbits', 'Lionhead', '3 years', 280, '../images/rabbits/lionhead-3yr.jpg');
  new Pet('Rabbits', 'Polish', '1 month', 80, '../images/rabbits/polish-1mon.jpg');
  new Pet('Rabbits', 'Polish', '1 year', 190, '../images/rabbits/polish-1yr.jpg');
  new Pet('Rabbits', 'Satin Rabbit', '2 months', 90, '../images/rabbits/satin-rabbit-2mon.jpg');
  new Pet('Rabbits', 'Satin Rabbit', '1 year', 240, '../images/rabbits/satin-rabbit-1yr.jpg');
}

createPetInstances();


let accessoriesArr = [];

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
  new Accessories('Rabbits', 'Food', 7, '../images/accessories Images/food/Rabbits/Bunny Treats.jpg');
  new Accessories('Rabbits', 'Food', 16, '../images/accessories Images/food/Rabbits/Burgess Excel Nuggets.jpg');
  new Accessories('Rabbits', 'Food', 26, '../images/accessories Images/food/Rabbits/dried natural grass and flowers selection.jpg');
  new Accessories('Rabbits', 'Food', 28, '../images/accessories Images/food/Rabbits/Harvest Rabbit.jpg');
  new Accessories('Rabbits', 'Food', 35, '../images/accessories Images/food/Rabbits/Kaytee Timothy Complete Rabbit.jpg');
  new Accessories('Rabbits', 'Food', 40, '../images/accessories Images/food/Rabbits/Meijer Pet Rabbit Food.jpg');
  new Accessories('Rabbits', 'Food', 55, '../images/accessories Images/food/Rabbits/Pride Rabbit Feed.jpg');
  new Accessories('Rabbits', 'Food', 53, '../images/accessories Images/food/Rabbits/Supreme Rabbit Food.jpg');
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
  new Accessories('Rabbits', 'Clothes', 10, '../images/accessories Images/clothes/Rabbits/Baby Yoda Hat for Rabbit Pet.jpg');
  new Accessories('Rabbits', 'Clothes', 5, '../images/accessories Images/clothes/Rabbits/Bunny beanie.jpg');
  new Accessories('Rabbits', 'Clothes', 30, '../images/accessories Images/clothes/Rabbits/Bunny Racer.jpg');
  new Accessories('Rabbits', 'Clothes', 34, '../images/accessories Images/clothes/Rabbits/Customize bunny dress.jpg');
  new Accessories('Rabbits', 'Clothes', 40, '../images/accessories Images/clothes/Rabbits/personalized bandana for bunny rabbits.jpg');
  new Accessories('Rabbits', 'Clothes', 50, '../images/accessories Images/clothes/Rabbits/Pet Rabbit Pokemon Hat.jpg');
  new Accessories('Rabbits', 'Clothes', 56, '../images/accessories Images/clothes/Rabbits/Rabbit Bow-tie.jpg');
  new Accessories('Rabbits', 'Clothes', 75, '../images/accessories Images/clothes/Rabbits/Winter Warm Coral Fleece.jpg');
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
  new Accessories('Rabbits', 'Toys', 8, '../images/accessories Images/toys/Rabbits/Bed Mat for Rabbit.jpg');
  new Accessories('Rabbits', 'Toys', 14, '../images/accessories Images/toys/Rabbits/Enrichment Toy for Pets.jpg');
  new Accessories('Rabbits', 'Toys', 31, '../images/accessories Images/toys/Rabbits/Guinea Pig toys Boredom breaker.jpg');
  new Accessories('Rabbits', 'Toys', 20, '../images/accessories Images/toys/Rabbits/Mental Stimulation for Pets.jpg');
  new Accessories('Rabbits', 'Toys', 40, '../images/accessories Images/toys/Rabbits/Rabbit cube.jpg');
  new Accessories('Rabbits', 'Toys', 51, '../images/accessories Images/toys/Rabbits/Wooden Animal Tunnel Exercise Tube.jpg');
}

createAccessoriesInstances();

window.addEventListener("load", () => {
  document.querySelector("body").classList.add("loaded");
});

// Creates sticky navbar

window.onscroll = function () { myFunction(); };

let navbar = document.getElementsByTagName('nav')[0];
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

function Counter() {
  const accessoriesCart = JSON.parse(localStorage.getItem('accessoriesCart')) || [];
  const petscart = JSON.parse(localStorage.getItem('petCart')) || [];
  let count = document.getElementById('cartCount');
  count.textContent = accessoriesCart.length + petscart.length;
}
Counter();

