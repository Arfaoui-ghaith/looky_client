import { callForCustomer } from '../utils/httpCall';

export const bookAppointment = async (data) => {
    const res = await callForCustomer({
        url: '/appointments/',
        method: 'post',
        data: data
    });
    return res;
}