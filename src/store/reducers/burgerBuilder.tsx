import * as actionTypes from '../actions/actionTypes';

const initState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    price: 4,
}

const INGREDIENTS_PRICE = {
    salad: 0.3,
    bacon: 0.2,
    cheese: 0.1,
    meat: 0.5
}

export const burgerReducer = (state: any = initState, action: any) => {
    console.log(action.ingName)
    switch (action.type) {
        case actionTypes.ADD_INGREDIANT: {
            const ingredients = {
                ...state.ingredients,
                [action.ingName]: state.ingredients[action.ingName] + 1
            };

            return {
                ...state,
                ingredients,
                price: state.price + INGREDIENTS_PRICE[action.ingName]
            }
        }
        case actionTypes.REMOVE_INGREDIANT: {
            const ingredients = {
                ...state.ingredients,
                [action.ingName]: state.ingredients[action.ingName] - 1
            };

            return {
                ...state,
                ingredients,
                price: state.price - INGREDIENTS_PRICE[action.ingName]
            }
        }
        case actionTypes.SET_INGREDIANTS: {
            return {
                ...state,
                ingredients: action.ingrediants
            }
        }
        default: {
            return state;
        }
    }

}
