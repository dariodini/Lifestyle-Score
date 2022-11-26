export const summary = document.getElementById('summary');
export const title = document.getElementById('title');
export const cards = document.getElementById('cards');


export function writeText(textResponseScore, textResponseImage) {
    summary.innerText = '';

    let summaryTitle = document.createElement('h1');
    summaryTitle.innerText = 'Summary';
    summary.append(summaryTitle);

    let summ = textResponseScore.summary;
    summary.innerHTML += summ;
    summary.style.textAlign = 'justify';


    let cityImage = JSON.stringify(textResponseImage.photos[0].image.web);
    title.style.backgroundImage = 'url(' + cityImage + ')';
}



export function createCard(img, elemName, elemScore) {
    //Crea contenitore esterno della Card
    let cardContainer = document.createElement('div');
    cardContainer.classList.add("card-container");


    //Crea contenitore per il logo dell'elemento
    let imageContainer = document.createElement('div');
    imageContainer.classList.add("image-container");

    imageContainer.append(img);


    //Crea il contenitore per i testi
    let textContainer = document.createElement('div');
    textContainer.classList.add("text-container");


    //Crea titolo
    let titleCard = document.createElement('span');
    titleCard.innerText = elemName;
    titleCard.classList.add("title-card");

    //Crea punteggio
    let scoreCard = document.createElement('span');
    scoreCard.innerText = elemScore;
    scoreCard.classList.add("score");


    textContainer.append(titleCard, scoreCard);

    cardContainer.append(imageContainer, textContainer);

    return cardContainer;
}