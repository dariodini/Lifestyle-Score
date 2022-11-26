// Method needed when click 'Cerca random'
import {generateRandomCity} from "./randomCity";

// Method needed when click 'Cerca'
import {getCity} from "./getCity";


// Handle data
import {getData} from "./handleData";



// Create the function to choose a random element inside a list
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}



const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let buttonPressed = e.submitter.id;

    buttonPressed === 'submit' ? showResult() : showResult(true);
});



async function showResult(random = null){
    let city;

    if(!random){
        city = await getCity();
    }else{
        city = await generateRandomCity();
    }

    if (city) getData(city);
}



// General method
export function validateCity(city){
    return city.toLowerCase().replaceAll(' ', '-').replaceAll('.', '').replaceAll(',', '');
}












