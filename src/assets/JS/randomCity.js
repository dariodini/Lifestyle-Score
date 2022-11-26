// Method needed to validate the city name
import {validateCity} from "./index";



export async function generateRandomCity() {
    let cities = await getAllCities();
    let randomCity = cities.random();
    document.getElementById('search-box').value = randomCity;
    title.innerHTML = randomCity[0].toUpperCase() + randomCity.slice(1);
    randomCity = validateCity(randomCity);

    return randomCity;
}



export async function getAllCities(){
    let response = await fetch(process.env.CITIES);
    let jsonCities = await response.json();
    jsonCities =  await jsonCities['_links']['ua:item'];

    let cities = [];
    jsonCities.forEach((elem)=>{
        cities.push(elem['name']);
    })

    return cities;
}

