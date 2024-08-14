export function reload(arr, place, component) {
    let box = document.querySelector(`.${place}`);
    for (const item of arr) {
        let elem = component(item)
        box.append(elem);
    };
}

export function createToken(length = 12) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

export function validateInps(element, regex) {
    let isValid = true;

    element.forEach((inp) => {
        let id = inp.getAttribute("name");
        if (regex[id].test(inp.value)) {
            inp.style.border = "1px solid green";
        } else {
            isValid = false;
            inp.style.border = "1px solid red";
        }
    });

    return isValid;
}