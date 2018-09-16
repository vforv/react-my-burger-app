import * as actionType from './actionTypes';
import axios from '../../axios-order';

export const addIngredient = (name: string) => {
    return {
        type: actionType.ADD_INGREDIANT,
        ingName: name
    }
};

export const removeIngredient = (name: string) => {
    return {
        type: actionType.REMOVE_INGREDIANT,
        ingName: name
    }
};

export const setIng = (ings: any) => {
    return {
        type: actionType.SET_INGREDIANTS,
        ingrediants: ings
    }
}

export const initIng = () => {
    return (dispatch: any) => {
        axios.get('/ingredients.json')
            .then((response: any) => {
                dispatch(setIng(response.data))
            })
            .catch((error: any) => {
                console.log(error)
            });
    }
}