//Variable needed to allow the correct execution
import {title, cards, summary} from "./result";


const errorsContainer = document.getElementById('errors');

export function showError(error, city = null) {
    clearErrors();

    let elemError = createError(error, city);
    errorsContainer.append(elemError);
    restoreParameters();
}


export function clearErrors() {
    errorsContainer.innerHTML = '';
}


function restoreParameters(){
    title.innerHTML = 'LifeScores';
    title.style.backgroundImage = '';
    cards.innerHTML = '';
    summary.innerHTML = '';
}


function createError(error, city) {
    let elemError = document.createElement('span');
    let message;

    switch (error) {
        case 'isMissing':
            message = "INSERISCI IL NOME DI UNA CITTA'";
            break;

        case 'notExist':
            message = "LA CITTA' <strong> " + city + " </strong> NON E' DISPONIBILE";
            break;

        default:
            message = "C'E' STATO UN ERRORE";
            break;
    }

    elemError.innerHTML = message;

    return elemError;
}