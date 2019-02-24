import axios from 'axios';

const GetAggregatedOrderData = () => {
    const apiPath = `api/order`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath)
            .then(promos => resolve(promos))
            .catch(error => reject(error));
    });
};

const GetOrderTypeRatio = () => {
    const apiPath = `api/order/byType`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath)
            .then(orderTypes => resolve(orderTypes))
            .catch(error => reject(error));
    });
};

export default { GetAggregatedOrderData, GetOrderTypeRatio };
