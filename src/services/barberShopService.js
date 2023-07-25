import { callForBarber } from '../utils/httpCall';

export const fetchBarberShops = async () => {
        const res = await callForBarber({
            url: '/barberShops',
            method: 'get'
        });
        return res;
}

export const fetchBarberInfos = async (id) => {
    const res = await callForBarber({
        url: `/barberShops/public/${id}`,
        method: 'get'
    });
    return res;
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