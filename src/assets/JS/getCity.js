// Method needed to validate the city name
import {validateCity} from "./index";

// Method needed to show errors
import {showError} from "./errors";



const cityField = document.getElementById('search-box');


export async function getCity() {
    let cityName = cityField.value;

    if (cityName === '') {
        showError('isMissing');
    }else{

        let cityTrans = await translateCity(cityName);

        cityName = validateCity(cityTrans);

        return cityName;
    }
}



async function translateCity(city) {
    let url = process.env.TRANSLATE_URL + encodeURI(city);

    const response =  await fetch(url);
    const jsonResponse = await response.json();
    const cityTrans = jsonResponse[0][0][0];
    return cityTrans;
}