import axios from '../../axios-order';
import * as actionTypes from './actionTypes';

export const getOrders = (orders: any) => {
    return {
        type: actionTypes.GET_ORDERS,
        orders
    }
};

export const initOrders = () => {
    return (dispatch: any) => {
        axios.get('/orders.json')
            .then((orders) => {
                const formatedOrders = Object.keys(orders.data).map((order: any) => {
                    return {
                        ...orders.data[order],
                        id: order
                    }
                });
                dispatch(getOrders(formatedOrders));
            })
            .catch((error) => {
                console.log(error)
            })
    }
};
