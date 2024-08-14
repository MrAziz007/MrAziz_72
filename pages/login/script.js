import { getAxios } from "../../libs/http.js";
import { validateInps } from "../../libs/utils.js";

let form = document.forms[0];

let regex = {
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
    let inps = document.querySelectorAll('.input');
    if (validateInps(inps, regex)) {
        getAxios(`users?email=${obj.email}`)
            .then(res => {
                if (res.data.length && res.data[0].password == obj.password) {
                    localStorage.setItem('userId', res.data[0].id)
                    localStorage.setItem('token', res.data[0].token)
                    window.location.replace('/')
                } else {
                    document.querySelector('.spam').style.display = 'block'
                    document.querySelector('.password').style.border = "1px solid red";
                }
            })
            .catch(error => console.error(error))
    }
};

let logonBlock = document.querySelector('.logonBlock');
logonBlock.onclick = () => {
    window.location.replace('/pages/logon/');
}