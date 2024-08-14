import { createCards } from "./components/card.js";
import { createTable } from "./components/table.js";
import { reload } from "./libs/utils.js";
import { getAxios } from "./libs/http.js";
import { createHeader } from "./components/header.js";

createHeader(document.querySelector('header'));

let userId = localStorage.getItem('userId');

getAxios(`cards?userId=${userId}`)
    .then(res => reload(res.data.slice(0, 3), 'dspGrid', createCards))
    .catch(error => console.error(error));

getAxios(`transaction?userid=${userId}`)
    .then(res => reload(res.data.slice(0, 5), 'tbody', createTable))
    .catch(error => console.error(error));

document.querySelector('.cardMore').onclick = () => {
    window.location.href = '/pages/cards/'
}

document.querySelector('.tableMore').onclick = () => {
    window.location.href = '/pages/transaction/'
}