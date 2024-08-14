import { createHeader } from "../../components/header.js";
import { createCards } from "../../components/card.js";
import { getAxios } from "../../libs/http.js";
import { reload } from "../../libs/utils.js";

let userId = localStorage.getItem('userId');

createHeader(document.querySelector('header'));

getAxios(`cards?userId=${userId}`)
    .then(res => reload(res.data, 'dspGrid', createCards))
    .catch(error => console.error(error));

document.querySelector('.dobavit').onclick = () => {
    window.location.replace('/pages/plussCard/')
}