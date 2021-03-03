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
    let textArr = result.split('****');
    for (let i = 0; i < textArr.length; i++) {
        new PetGuide(petArr[i * 2].breed, textArr[i]);
    }
    return petGuideArr
}

// Loads pet cart from local storage

const cartPets = JSON.parse(localStorage.getItem('petCart')) || [];
let loadedPetCart = new PetCart(cartPets);
let parent = document.getElementById('guidesContainer');

// Renders the guides according to selected pets and if no pets are selected all the guides are rendered

(async function () {
    let petGuideArr = await getGuides();
    if (cartPets.length > 0) {
        for (let i in loadedPetCart.adoptedPets) {
            for (let j in petGuideArr) {
                if (loadedPetCart.adoptedPets[i].breed === petGuideArr[j].breed) {
                    let guideSection = document.createElement('section');
                    parent.appendChild(guideSection);
                    let guideContent = document.createElement('div');
                    guideContent.innerHTML = petGuideArr[j].text;
                    guideSection.appendChild(guideContent);
                    let readBtn = document.createElement('button');
                    readBtn.textContent = 'Continue Reading';
                    guideSection.appendChild(readBtn);
                    readBtn.onclick = function (){
                        guideContent.classList.toggle('expanded');
                        if (guideContent.className === 'expanded') {
                            readBtn.textContent = 'Collapse Content';
                        } else {
                            readBtn.textContent = 'Continue Reading';
                        }
                    }
                }
            }
        }
    } else {
        for (let i in petGuideArr) {
            let guideSection = document.createElement('section');
            parent.appendChild(guideSection);
            let guideContent = document.createElement('div');
            guideContent.innerHTML = petGuideArr[i].text;
            guideSection.appendChild(guideContent);
            let readBtn = document.createElement('button');
            readBtn.textContent = 'Continue Reading';
            guideSection.appendChild(readBtn);
            readBtn.onclick = function (){
                guideContent.classList.toggle('expanded');
                if (guideContent.className === 'expanded') {
                    readBtn.textContent = 'Collapse Content';
                } else {
                    readBtn.textContent = 'Continue Reading';
                }
            }
        }
    }
})();
