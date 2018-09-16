import * as React from 'react';
import Burger from 'src/components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummery/OrderSummery';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';
import { connect } from 'react-redux';
import * as store from '../../store';

class BurderBuilder extends React.Component<any> {
    public state = {
        isPurchasable: false,
        loading: false
    }

    public componentDidMount() {
        this.props.onSetIngs();
    }

    public handleShowModal = () => {
        this.setState({ isPurchasable: true });
    }

    public handleCancelModal = () => {
        this.setState({ isPurchasable: false });
    }

    public handlerPurchaseContinue = () => {
        this.props.history.push('/checkout');
    }

    public render() {
        const disabledInfo = { ...this.props.ings };
        let purchaseDisabled = true;

        for (const key of Object.keys(disabledInfo)) {
            disabledInfo[key] = disabledInfo[key] <= 0;
            if (!disabledInfo[key]) {
                purchaseDisabled = false;
            }
        }
        let orderSummary = <OrderSummary
            ingredients={this.props.ings}
            purchaseCancel={this.handleCancelModal}
            purchaseContinue={this.handlerPurchaseContinue}
            price={this.props.price}
        />;

        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal
                    show={this.state.isPurchasable}
                    cancelModel={this.handleCancelModal}
                >
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.props.ings} />
                <BuildControls
                    ingredientAdded={this.props.addIng}
                    ingredientRemove={this.props.removeIng}
                    disabledObj={disabledInfo}
                    purchase={purchaseDisabled}
                    price={this.props.price}
                    showModal={this.handleShowModal}
                />
            </Aux>
        );
    }
}

const stateToMap = (state: any) => {
    console.log(state)
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addIng: (ingName: any) => dispatch(store.addIngredient(ingName)),
        removeIng: (ingName: any) => dispatch(store.removeIngredient(ingName)),
        onSetIngs: () => dispatch(store.initIng())
    }
}

export default connect(stateToMap, mapDispatchToProps)(WithErrorHandler(BurderBuilder, axios));
