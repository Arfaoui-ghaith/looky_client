import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://looky-server.onrender.com/api/v1',
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('lookyToken')}`
    }
});

const call = async (config) => {
    try {
        let res = await instance(config);
        return res;
    }catch (err){
        return err;
    }
}

export default call;