import * as React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

export class Checkout extends React.Component<any> {
    public state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }
    public componentDidMount() {
        const ingredients = JSON.parse('{"' + decodeURI(this.props.location.search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/\?/g, "").replace(/=/g,'":"') + '"}');

        this.setState({ ingredients });
    }

    public checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    public checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    public render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
            </div>
        )
    }
}

export default Checkout;