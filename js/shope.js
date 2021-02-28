'use strict';


let filterForm = document.getElementById('filterForm');
filterForm.addEventListener('submit', fiterProduct);
function fiterProduct(event) {

    console.log(event);
    event.preventDefault();
    document.getElementById("petsImages").innerHTML = "";
    PreRender_FilteredItems(event.target.petsType.value, event.target.petsAge.value, event.target.petsPrice.value)
    console.log(event.target.petsType.value, event.target.petsAge.value, event.target.petsPrice.value);

}

function PreRender_FilteredItems(type, age, priceRange) {

    for (let i = 0; i < petArr.length; i++) {
        console.log(petArr[i].animal);
        if (petArr[i].animal == type) {
            if (priceRange == 1 && petArr[i].price <= 500) {
                if (age == 1 && (petArr[i].age.includes("month"))) {
                    render_FilteredItems(i);
                }
                else if (age == 2 && (petArr[i].age.includes("year"))) {
                    render_FilteredItems(i);
                }
                console.log(petArr[i].price);
            }

            else if (priceRange == 2 && (petArr[i].price > 500 && petArr[i].price <= 1000)) {
                if (age == 1 && (petArr[i].age.includes("month"))) {
                    render_FilteredItems(i);
                }
                else if (age == 2 && (petArr[i].age.includes("year"))) {
                    render_FilteredItems(i);

                }
            }
            else if (priceRange == 3 && (petArr[i].price > 1000)) {
                if (age == 1 && (petArr[i].age.includes("month"))) {
                    render_FilteredItems(i);
                }
                else if (age == 2 && (petArr[i].age.includes("year"))) {
                    render_FilteredItems(i);

                }

            }
            /* else  {
                 if (age == 1 && (petArr[i].age.includes("month"))) {
                     render_FilteredItems(i);
                 }
                 else if (age == 2 && (petArr[i].age.includes("year"))) {
                     render_FilteredItems(i);
 
                 }
 
 
             }*/



        }
        else {
            if (priceRange == 1 && petArr[i].price <= 500) {
                if (age == 1 && (petArr[i].age.includes("Month"))) {
                    render_FilteredItems(i);
                }
                else if (age == 2 && (petArr[i].age.includes("Year"))) {
                    render_FilteredItems(i);

                }

            }
            else if (priceRange == 2 && (petArr[i].price > 500 && petArr[i].price <= 1000)) {
                if (age == 1 && (petArr[i].age.includes("Month"))) {
                    render_FilteredItems(i);
                }
                else if (age == 2 && (petArr[i].age.includes("Year"))) {
                    render_FilteredItems(i);

                }
            }
            else if (priceRange == 3 && (petArr[i].price > 1000)) {
                if (age == 1 && (petArr[i].age.includes("Month"))) {
                    render_FilteredItems(i);
                }
                else if (age == 2 && (petArr[i].age.includes("Year"))) {
                    render_FilteredItems(i);

                }

            }
            /*else {
                if (age == 1 && (petArr[i].age.includes("Month"))) {
                    render_FilteredItems(i);
                }
                else if (age == 2 && (petArr[i].age.includes("Year"))) {
                    render_FilteredItems(i);

                }


            }*/
        }

    }

}
let petsImages = document.getElementById('petsImages');
function render_FilteredItems(id) {
    console.log("RENDER");
    let elementDiv = document.createElement('div');
    petsImages.appendChild(elementDiv);
    let img = document.createElement('img');
    let adoptBtn = document.createElement('button');
    img.src = petArr[id].source;
    adoptBtn.textContent = "Adopt";
    adoptBtn.id = id;
    elementDiv.appendChild(img);
    elementDiv.appendChild(adoptBtn);

}





