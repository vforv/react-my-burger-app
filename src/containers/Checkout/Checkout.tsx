import * as React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

export class Checkout extends React.Component<any> {
    public state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        price: 0
    }
    public componentDidMount() {
        // const ingredients = JSON.parse('{"' + decodeURI(this.props.location.search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/\?/g, "").replace(/=/g, '":"') + '"}');
        // const { price, ...ing } = ingredients;
        // this.setState({ ingredients: ing, price });
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
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />

                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData}
                />
            </div>
        )
    }
}

const stateToProps = (state: any) => {
    return {
        ings: state.ingredients
    }
};

export default connect(stateToProps)(Checkout);