import axios from 'axios';

const getOrders = () => {
    const apiPath = `api/order`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath)
            .then(promos => resolve(promos))
            .catch(error => reject(error));
    });
};

export default { getOrders };
