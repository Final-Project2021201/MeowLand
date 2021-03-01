'use strict';

// Defines constructor function for guides for each breed

function PetGuides(breed, text){
    this.breed = breed;
    this.text = text;
    petGuidesArr.push(this);
}

let petGuidesArr = [];

new PetGuides('Golden Retriever', 'Their trusting, gentle disposition makes them a poor guard dog. They need daily provision of nutritious food and clean water, regular and sufficient exercise, general health check via bodily investigations. Inspect your golden ears, eyes and oral health and hygiene every week. While shedding is unavoidable, frequent grooming (daily to weekly) lessens the amount of hair shed by the animal. Severe shedding resulting in bald patches can be indicative of stress or sickness. Bath your golden at least every 3 months. Yearly vaccination top-ups.');

new PetGuides('Maine Coon', 'Maine Coons have extremely gentle natures which makes them extremely popular as family cats. They are sociable and love company, preferring to be wherever their owners are. Maine Coons are energetic cats and require lots of room to exercise in. If you keep a Maine Coon as an indoor cat you should provide it with plenty of space to move around in and give it plenty of toys for entertainment. It is essential to groom a Maine Coon at least weekly. To ensure your cat will allow you to groom it, it’s advisable to groom it gently from a kitten. Regular grooming will minimize shedding, prevent your cat from swallowing fur and suffering from fur balls and also stop large mats from forming.');

// Loads the array of selected pets from local storage and creates an object containing that array

const cartPets = JSON.parse(localStorage.getItem('petCart')) || [];
let loadedPetCart = new PetCart(cartPets);
let petGuidesDiv = document.getElementById('petGuides');
console.log(loadedPetCart);

// Renders the guides according to selected pets

for (let i in loadedPetCart.adoptedPets){
    for (let j in petGuidesArr){
        if (loadedPetCart.adoptedPets[i].breed === petGuidesArr[j].breed){
            let guideHeader = document.createElement('h6');
            petGuidesDiv.appendChild(guideHeader);
            guideHeader.textContent = `How to Take Care of Your ${loadedPetCart.adoptedPets[i].breed}`;
            let guideContent = document.createElement('p');
            guideContent.textContent = petGuidesArr[j].text;
            petGuidesDiv.appendChild(guideContent);
        }
    }
}
