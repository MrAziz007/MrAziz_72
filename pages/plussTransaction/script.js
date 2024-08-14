import { postAxios, getAxios } from "../../libs/http.js";
import { reload } from "../../libs/utils.js";
import { createSelect } from "../../components/currency.js";

let userId = localStorage.getItem('userId');

let form = document.forms[0];
let arr = [];
let arr2 = [];

function getCard(obj) {
    getAxios(`cards?userId=${userId}`)
        .then(res => {
            res.data.forEach(elem => {
                arr.push({ cardName: elem.cardName, cardid: elem.id })
                arr2.push(elem.cardName)
            })
            console.log(arr)
            reload(arr2, 'select', createSelect)
        })
        .catch(error => console.error(error))
}
getCard()

form.onsubmit = (e) => {
    e.preventDefault();
    let obj = {};
    let fn = new FormData(form);
    fn.forEach((value, key) => {
        obj[key] = value;
    });
    let data = new Date().getHours() + ':' + new Date().getMinutes()
    getAxios(`cards?cardName=${obj.koshelok}`)
        .then(res => {
            console.log(res, userId)
            for (const element of res.data) {
                if (res.data.length && element.userId == userId) {
                    console.log(res)
                    postAxios(`transaction`, { ...obj, userId, when: data, cardid: element.id })
                        .then(res => {
                            console.log(res)
                            window.location.replace('/pages/transaction/')
                        })
                        .catch(error => console.error(error))
                }
            }
        })
        .catch(error => console.error(error))
};
