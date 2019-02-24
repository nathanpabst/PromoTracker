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

const GetUnitsShipped = () => {
    const apiPath = `api/order/byUnits`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath)
            .then(unitsShipped => resolve(unitsShipped))
            .catch(error => reject(error));
    });
};

const GetPrintFees = () => {
    const apiPath = `api/order/byFees`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath)
            .then(feesCollected => resolve(feesCollected))
            .catch(error => reject(error));
    });
};

export default { GetAggregatedOrderData, GetOrderTypeRatio, GetUnitsShipped, GetPrintFees };
