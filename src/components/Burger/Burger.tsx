
import * as React from 'react';
import css from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props: any) => {
    let transformedIngredients: any = Object.keys(props.ingredients)
        .map(igKey => {
            const mu = [];
            for (let i = 0; i < props.ingredients[igKey]; i++) {
                mu.push(<BurgerIngredient key={igKey + i} type={igKey} />);
            };
            return mu;
        })
        .reduce((arr: any[], item: any) => {
            return arr.concat(item)
        },
        []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;
