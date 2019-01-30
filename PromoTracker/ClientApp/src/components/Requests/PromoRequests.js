﻿import axios from 'axios';

const getPromos = () => {
    const apiPath = `api/promo`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath)
            .then(promos => resolve(promos))
            .catch(error => reject(error));
    });
};

export default { getPromos };