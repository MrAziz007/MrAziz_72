import axios from "axios";

let url = 'http://localhost:8080';

export async function getAxios(endpoint) {
    try {
        let res = await axios.get(`${url}/${endpoint}`);
        return res;
    } catch (error) {
        console.error(error);
        throw error
    }
}

export async function getCurrency(endpoint) {
    let currencyApi = 'https://api.apilayer.com/currency_data'
    try {
        let res = await axios.get(`${currencyApi}/${endpoint}`, {
            headers: {
                APIkey: 'QSk6bLymDi6aLgEBX5zcQix2dIhUCy4l'
            },
        });
        return res;
    } catch (error) {
        console.error(error);
        throw error
    }
}

export async function postAxios(endpoint, body) {
    try {
        let res = await axios.post(`${url}/${endpoint}`, body);
        return res;
    } catch (error) {
        console.error(error);
        throw error
    }
}