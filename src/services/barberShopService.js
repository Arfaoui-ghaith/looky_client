import { call } from '../utils/httpCall';

const fetchBarberShops = async () => {
    try{
        const res = await call({
            url: '/barberShops',
            method: 'get'
        });
        return res.data;
    }catch (e) {
        console.error(e);
    }
}


module.exports = {
    fetchBarberShops
}