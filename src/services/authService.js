import {callForCustomer, callForBarber} from '../utils/httpCall';

export const signInAsCustomer = async (data) => {
    const res = await callForCustomer({
        url: '/customers/signin',
        method: 'post',
        data
    });
    return res;
}

export const signInAsCustomerBySocialNetwork = async (data) => {
    const res = await callForCustomer({
        url: '/customers/signin',
        method: 'patch',
        data
    });
    return res;
}

export const signUpAsCustomer = async (data) => {
    const res = await callForCustomer({
        url: '/customers/signup',
        method: 'post',
        data
    });
    return res;
}

export const signInAsBarber = async (data) => {
    const res = await callForBarber({
        url: '/barberShops/signin',
        method: 'post',
        data
    });
    return res;
}

export const signUpAsBarber = async (data) => {
    const res = await callForBarber({
        url: '/barberShops/signup',
        method: 'post',
        data
    });
    return res;
}