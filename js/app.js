
'use strict';
let petArr = [];

// creating constructor function for pets and new pet instances

function Pet(animal, breed, age, price, source){
    this.animal = animal;
    this.breed = breed;
    this.age = age;
    this.price = price;
    this.source = source;
    petArr.push(this);
}

function createPetInstances(){
    new Pet('Dogs', 'German Shepherd', '2 months', 600, '../images/dogs/german-shepherd-2mon.jpg');
    new Pet('Dogs', 'German Shepherd', '1 year', 1100, '../images/dogs/german-shepherd-1yr.jpg');
    new Pet('Dogs', 'Golden Retriever', '2 months', 400, '../images/dogs/golden-retriever-2mon.jpg');
    new Pet('Dogs', 'Golden Retriever', '2 years', 900, '../images/dogs/golden-retriever-2yr.jpg');
    new Pet('Dogs', 'Pomeranian', '1 month', 700, '../images/dogs/pomeranian-1mon.jpg');
    new Pet('Dogs', 'Pomeranian', '1 year', 1500, '../images/dogs/pomeranian-1yr.jpg');
    new Pet('Dogs', 'Poodle', '3 months', 900, '../images/dogs/poodle-3mon.jpg');
    new Pet('Dogs', 'Poodle', '3 years', 1700, '../images/dogs/poodle-3yr.jpg');
    new Pet('Dogs', 'Samoyed', '1 month', 900, '../images/dogs/samoyed-1mon.jpg');
    new Pet('Dogs', 'Samoyed', '2 years', 1900, '../images/dogs/samoyed-2yr.jpg');
    new Pet('Dogs', 'Siberian Husky', '1 month', 400, '../images/dogs/siberian-husky-1mon.jpg');
    new Pet('Dogs', 'Siberian Husky', '2 years', 1200, '../images/dogs/siberian-husky-2yr.jpg');
    new Pet('Cats', 'American Shorthair', '2 months', 200, '../images/cats/american-2mon.jpg');
    new Pet('Cats', 'American Shorthair', '1 year', 700, '../images/cats/american-1yr.jpg');
    new Pet('Cats', 'British Shorthair', '2 months', 300, '../images/cats/british-2mon.jpg');
    new Pet('Cats', 'British Shorthair', '1 year', 800, '../images/cats/british-1yr.jpg');
    new Pet('Cats', 'Maine Coon', '4 months', 400, '../images/cats/maine-coon-4mon.jpg');
    new Pet('Cats', 'Maine Coon', '2 years', 800, '../images/cats/maine-coon-2yr.jpg');
    new Pet('Cats', 'Persian', '1 month', 750, '../images/cats/persian-1mon.jpg');
    new Pet('Cats', 'Persian', '2 years', 1400, '../images/cats/persian-2yr.jpg');
    new Pet('Cats', 'Ragdoll', '3 months', 300, '../images/cats/ragdoll-3mon.jpg');
    new Pet('Cats', 'Ragdoll', '3 years', 1200, '../images/cats/ragdoll-3yr.jpg');
    new Pet('Cats', 'Siamese', '2 months', 240, '../images/cats/siamese-2mon.jpg');
    new Pet('Cats', 'Siamese', '2 years', 950, '../images/cats/siamese-2yr.jpg');
    new Pet('Birds', 'African Grey', '2 months', 200, '../images/birds/african-grey-2mon.jpg');
    new Pet('Birds', 'African Grey', '3 years', 1100, '../images/birds/african-grey-3yr.jpg');
    new Pet('Birds', 'Amazon Parrot', '1 month', 400, '../images/birds/amazon-parrot-1mon.jpg');
    new Pet('Birds', 'Amazon Parrot', '2 years', 1300, '../images/birds/amazon-parrot-2yr.jpg');
    new Pet('Birds', 'Budgie', '1 month', 200, '../images/birds/budgie-1mon.jpg');
    new Pet('Birds', 'Budgie', '1 year', 950, '../images/birds/budgie-1yr.jpg');
    new Pet('Birds', 'Canary', '2 months', 230, '../images/birds/canary-2mon.jpg');
    new Pet('Birds', 'Canary', '1 year', 850, '../images/birds/canary-1yr.jpg');
    new Pet('Birds', 'Cockatiel', '1 month', 300, '../images/birds/cockatiel-1mon.jpg');
    new Pet('Birds', 'Cockatiel', '1 year', 870, '../images/birds/cockatiel-1yr.jpg');
    new Pet('Birds', 'Finch', '2 months', 200, '../images/birds/finch-2mon.jpg');
    new Pet('Birds', 'Finch', '1 year', 650, '../images/birds/finch-1yr.jpg');
    new Pet('Rabbits', 'Dutch', '1 month', 280, '../images/rabbits/dutch-1mon.jpg');
    new Pet('Rabbits', 'Dutch', '1 year', 640, '../images/rabbits/dutch-1yr.jpg');
    new Pet('Rabbits', 'Dwarf Hotot', '5 months', 490, '../images/rabbits/dwarf-hotot-5mon.jpg');
    new Pet('Rabbits', 'Dwarf Hotot', '2 years', 1150, '../images/rabbits/dwarf-hotot-2yr.jpg');
    new Pet('Rabbits', 'Holland Lop', '2 months', 320, '../images/rabbits/holland-lop-2mon.jpg');
    new Pet('Rabbits', 'Holland Lop', '3 years', 990, '../images/rabbits/holland-lop-3yr.jpg');
    new Pet('Rabbits', 'Lionhead', '2 months', 230, '../images/rabbits/lionhead-2mon.jpg');
    new Pet('Rabbits', 'Lionhead', '3 years', 1050, '../images/rabbits/lionhead-3yr.jpg');
    new Pet('Rabbits', 'Polish', '1 month', 220, '../images/rabbits/polish-1mon.jpg');
    new Pet('Rabbits', 'Polish', '1 year', 890, '../images/rabbits/polish-1yr.jpg');
    new Pet('Rabbits', 'Satin Rabbit', '2 months', 390, '../images/rabbits/satin-rabbit-2mon.jpg');
    new Pet('Rabbits', 'Satin Rabbit', '1 year', 960, '../images/rabbits/satin-rabbit-1yr.jpg');
}

function PetCart(items){
    this.adoptedPets = items;
}

PetCart.prototype.addPet = function(item){
    this.adoptedPets.push(item);
};

PetCart.prototype.saveToStorage = function(){
    localStorage.setItem('petCart', JSON.stringify(this.adoptedPets));
};

PetCart.prototype.removePet = function (index){
    let newArr = JSON.parse(localStorage.getItem('petCart'));
    newArr.splice(index, 1);
    return newArr;
};

createPetInstances();
