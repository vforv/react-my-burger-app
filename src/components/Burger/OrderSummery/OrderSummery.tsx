import * as React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../Layout/UI/Button/Button';

const OrderSummary = (props: any) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}: {props.ingredients[igKey]}</span></li>);
        })
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
};

export default OrderSummary;
