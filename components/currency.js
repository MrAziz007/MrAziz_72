export function createSelect(obj) {
    let option = document.createElement('option');

    option.textContent = obj;
    option.setAttribute('value', obj);

    return option
}