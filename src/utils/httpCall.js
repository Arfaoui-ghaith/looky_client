import axios from 'axios';

console.log(`${localStorage.getItem('lookyCustomerToken')}`,"   ###");
const customerInstance = axios.create({
    baseURL: 'https://looky-server.onrender.com/api/v1',
    headers: {
        "Authorization": `${localStorage.getItem('lookyCustomerToken')}`
    }
});

const barberInstance = axios.create({
    baseURL: 'https://looky-server.onrender.com/api/v1',
    headers: {
        "Authorization": `${localStorage.getItem('lookyBarberToken')}`
    }
});

export const callForCustomer = async (config) => {
    try {
        let res = await customerInstance(config);
        return res;
    }catch (err){
        return err;
    }
}

export const callForBarber = async (config) => {
    try {
        let res = await barberInstance(config);
        return res;
    }catch (err){
        return err;
    }
}