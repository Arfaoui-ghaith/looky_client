import { callForBarber } from '../utils/httpCall';

export const fetchBarberShops = async () => {
    try{
        const res = await callForBarber({
            url: '/barberShops',
            method: 'get'
        });
        return res.data;
    }catch (e) {
        console.error(e);
    }
}

export const updateBarberLogo = async (formData) => {
    const res = await callForBarber({
        url: '/barberShops/infos',
        method: 'patch',
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `${localStorage.getItem('lookyBarberToken')}`
        }
    });
    return res;
}