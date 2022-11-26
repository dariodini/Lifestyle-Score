import {createCard, writeText} from "./result";
import {cards, title} from "./result";

import {clearErrors, showError} from "./errors";

import {round} from "lodash";

export async function getData(city) {
    clearErrors();

    let responseScore = await fetch(process.env.URL_REQUEST + city + process.env.SCORES);

    if(responseScore.ok){
        let textResponseScore = await responseScore.json();

        let responseImage = await fetch(process.env.URL_REQUEST + city + process.env.IMAGES);
        let textResponseImage = await responseImage.json();

        return handleData(city, textResponseScore, textResponseImage);
    }else{
        showError('notExist', city);
    }
}


function handleData(city, textResponseScore, textResponseImage){
    cards.innerHTML = '';

    title.innerHTML = city[0].toUpperCase() + city.slice(1);

    textResponseScore.categories.forEach((elem)=>{
        //Nome e punteggio dell'elemento
        let elemName = elem['name'];
        let elemScore = round(elem['score_out_of_10'], 1);


        //Creo il nome per l'immagine della card
        let imgName = elemName.toLowerCase();
        imgName = imgName.replaceAll(' ', '-');


        //Creo l'elemento img
        let image = document.createElement('img');
        image.setAttribute('src', process.env.LOGOS_FOLDER + imgName + process.env.SUFFIX_PHOTO);


        let card = createCard(image, elemName, elemScore);
        cards.append(card);
    })

    writeText(textResponseScore, textResponseImage);
}