import { createSelect } from "../../components/currency.js";
import { getCurrency, postAxios } from "../../libs/http.js";
import { reload } from "../../libs/utils.js";

let userId = localStorage.getItem('userId');

let form = document.forms[0]; 1
let select = document.querySelector('select');

form.onsubmit = (e) => {
    e.preventDefault();
    let obj = {};
    let fn = new FormData(form);
    fn.forEach((value, key) => {
        obj[key] = value;
    });
    postAxios(`cards`, { ...obj, userId })
        .then(res => {
            console.log(res)
            window.location.replace('/pages/cards/')
        })
        .catch(error => console.error(error))
};

getCurrency('list')
    .then(res => {
        let currencies = Object.keys(res.data.currencies)
        reload(currencies, 'select', createSelect)
    })
    .catch(error => console.error(error))