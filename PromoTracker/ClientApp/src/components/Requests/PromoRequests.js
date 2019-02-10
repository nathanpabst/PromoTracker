import axios from 'axios';

const getPromos = () => {
    const apiPath = `api/promo`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath)
            .then(promos => resolve(promos))
            .catch(error => reject(error));
    });
};

const getTitleCountWithPromo = () => {
    const apiPath = `api/promo/titles`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath)
            .then(titles => resolve(titles))
            .catch(error => reject(error));
    });
};

const getPromoById = (input) => {
    const apiPath = `api/promo/${input}`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath, input)
            .then(promo => resolve(promo))
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

const deletePromo = (input) => {
    const apiPath = `api/promo/${input}`;
    return new Promise((resolve, reject) => {
        axios
            .delete(apiPath, input)
            .then(promo => resolve(promo))
            .catch(error => reject(error));
    });
};

const updatePromo = (id, input) => {
    const apiPath = `api/promo/${id}`;
    return new Promise((resolve, reject) => {
        axios
            .put(apiPath, input)
            .then(promo => resolve(promo))
            .catch(error => reject(error));
    });
};


export default { getPromos, getTitleCountWithPromo, newPromo, deletePromo, getPromoById, updatePromo };