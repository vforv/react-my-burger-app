import * as actionTypes from '../actions';

const initState = {
    orders: []
};

export const orderReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_ORDERS: {
            const orders = action.orders;
            return {
                ...state,
                orders: [
                    ...state.orders,
                    ...orders
                ]
            }
        }
        default: {
            return state;
        }
    }
};
