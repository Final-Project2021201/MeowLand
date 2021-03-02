'use strict';

// Defines constructor function for guides for each breed

function PetGuide(breed, text) {
    this.breed = breed;
    this.text = text;
    petGuideArr.push(this);
}

let petGuideArr = [];

// https://stackoverflow.com/a/48969580

function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open(method, url);
        request.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(request.response);
            } else {
                reject({
                    status: this.status,
                    statusText: request.statusText
                });
            }
        };
        request.onerror = function () {
            reject({
                status: this.status,
                statusText: request.statusText
            });
        };
        request.send();
    });
}

async function getGuides() {
    let result = await makeRequest('GET', 'pet-guides.txt');
    let textArr = result.split('*');
    for (let i = 0; i < petArr.length; i += 2) {
        new PetGuide(petArr[i].breed, textArr[0]);
    }
    return petGuideArr
}

// Loads pet cart from local storage

const cartPets = JSON.parse(localStorage.getItem('petCart')) || [];
let loadedPetCart = new PetCart(cartPets);
let petGuidesDiv = document.getElementById('petGuides');

// Renders the guides according to selected pets

(async function(){
    let petGuideArr = await getGuides();
    for (let i in loadedPetCart.adoptedPets) {
        for (let j in petGuideArr) {
            if (loadedPetCart.adoptedPets[i].breed === petGuideArr[j].breed) {
                let guideHeader = document.createElement('h6');
                petGuidesDiv.appendChild(guideHeader);
                guideHeader.textContent = `How to Take Care of Your ${petGuideArr[j].breed}`;
                let guideContent = document.createElement('p');
                guideContent.textContent = petGuideArr[j].text;
                petGuidesDiv.appendChild(guideContent);
            }
        }
    }
})();
