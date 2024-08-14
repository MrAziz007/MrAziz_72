import { createTable } from "../../components/table.js";
import { reload } from "../../libs/utils.js";
import { getAxios } from "../../libs/http.js";
import { createHeader } from "../../components/header.js";

let userId = localStorage.getItem('userId');

createHeader(document.querySelector('header'));

getAxios(`transaction?userid=${userId}`)
    .then(res => reload(res.data, 'tbody', createTable))
    .catch(error => console.error(error));

document.querySelector('.dobavit').onclick = () => {
    window.location.replace('/pages/plussTransaction/');
}