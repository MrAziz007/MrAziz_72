export function createCards(obj) {
    let cardElem = document.createElement('div');
    let cardName = document.createElement('p');
    let valuta = document.createElement('p');

    cardName.textContent = obj.cardName
    valuta.textContent = obj.valuta

    cardName.classList.add('cardName');
    valuta.classList.add('valuta');
    cardElem.classList.add('cardElem');

    cardElem.append(cardName, valuta)

    return cardElem
}