import axios from 'axios';
//import register from '../../registerServiceWorker';

const getPromos = () => {
    const apiPath = `api/promo`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath)
            .then(promos => resolve(promos))
            .catch(error => reject(error));
    });
};

const newPromo = (input) => {
    const apiPath = `api/promo`;
    return new Promise((resolve, reject) => {
        axios
            .post(apiPath, input)
            .then(promo => resolve(promo))
            .catch(error => reject(error));
    });
};

export default { getPromos, newPromo };