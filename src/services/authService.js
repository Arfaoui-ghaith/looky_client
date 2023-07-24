import call from '../utils/httpCall';

export const signInAsCustomer = async (data) => {
    const res = await call({
        url: '/customers/signin',
        method: 'post',
        data
    });
    return res;
}