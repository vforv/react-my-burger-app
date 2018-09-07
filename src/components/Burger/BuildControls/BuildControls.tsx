import * as React from 'react';
import * as css from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

export const BuildControls = (props: any) => {
    const addIng = (type: string) => props.ingredientAdded(type);
    return (

        <div className={css.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    type={ctrl.type}
                    added={() => addIng(ctrl.type)}
                    remove={() => props.ingredientRemove(ctrl.type)}
                    disabledControl={props.disabledObj[ctrl.type]}
                />
            ))}
            <button onClick={props.showModal} disabled={props.purchase} className={css.OrderButton}>ORDER NOW</button>
        </div>
    );
}

export default BuildControls;