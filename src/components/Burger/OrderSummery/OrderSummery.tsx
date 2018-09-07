import * as React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

interface IOrderSummary {
    ingredients: any;
    price: number;
    purchaseCancel: any;
    purchaseContinue: any
}

class OrderSummary extends React.Component<IOrderSummary> {

    public componentWillUpdate() {
        console.log('[OrderSummary] Will Update')
    }

    public render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (<li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}: {this.props.ingredients[igKey]}</span></li>);
            })

        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        )
    }
};

export default OrderSummary;
