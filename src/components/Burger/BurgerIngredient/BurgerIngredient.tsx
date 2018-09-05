import * as React from 'react';
import * as css from './BurgerIngredient.css';
interface IIngredient {
    type: string
}

class BurgerIngredient extends React.Component<IIngredient> {
    public render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={css.BreadBottom} />
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={css.BreadTop}>
                        <div className={css.Seeds1} />
                        <div className={css.Seeds2} />
                    </div>
                )
                break;
            case ('meat'):
                ingredient = <div className={css.Meat} />
                break
            case ('cheese'):
                ingredient = <div className={css.Cheese} />
                break
            case ('bacon'):
                ingredient = <div className={css.Bacon} />
                break
            case ('salad'):
                ingredient = <div className={css.Salad} />
                break
            default:
                ingredient = null
        }

        return ingredient;
    }
}

export default BurgerIngredient;
