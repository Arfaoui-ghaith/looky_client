import { callForCustomer } from '../utils/httpCall';

export const bookAppointment = async (data) => {
    const res = await callForCustomer({
        url: '/appointments/',
        method: 'post',
        data
    });
    return res;
}