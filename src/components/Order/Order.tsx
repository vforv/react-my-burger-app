import * as React from 'react';
import * as css from './Order.css';

const Order = (props: any) => {
    const { price, ingredients } = props.order;

    const ingArray = Object.keys(ingredients)
        .map((ingName) => {
            return { name: ingName, value: ingredients[ingName] }
        })

    return (
        <div className={css.Order}>
            <p>Ingredients: {ingArray.map((ing: any) => {
                return <span className={css.Ing} key={ing.name}>{ing.name}: {ing.value}</span>
            })}</p>
            <p>Price: <strong>EUR {Number.parseFloat(price).toFixed(2)}</strong></p>
        </div>
    );
}

export default Order;