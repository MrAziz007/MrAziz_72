import { postAxios } from "../../libs/http.js";
import { createToken } from "../../libs/utils.js";
import { validateInps } from "../../libs/utils.js";

let form = document.forms[0];

let regex = {
    name: /^[a-zA-ZÀ-ÿ' -]+$/,
    sername: /^[a-zA-ZÀ-ÿ' -]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
};

form.onsubmit = (e) => {
    e.preventDefault();
    let obj = {};
    let fn = new FormData(form);
    fn.forEach((value, key) => {
        obj[key] = value;
    });
    let token = createToken();
    let inps = document.querySelectorAll('.input');
    if (validateInps(inps, regex)) {
        postAxios(`users`, { ...obj, token })
            .then(res => {
                localStorage.setItem('userId', res.data.id)
                localStorage.setItem('token', res.data.token)
                window.location.replace('/')
            })
            .catch(error => console.error(error))
    }
};

let loginBlock = document.querySelector('.loginBlock');
loginBlock.onclick = () => {
    window.location.replace('/pages/login/');
}