import * as React from 'react';
import Aux from '../../hoc/Aux';
import Burger from 'src/components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Layout/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummery/OrderSummery';

const INGREDIENTS_PRICE = {
    salad: 0.3,
    bacon: 0.2,
    cheese: 0.1,
    meat: 0.5
}

class BurderBuilder extends React.Component {
    public state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: 4,
        isPurchasable: false
    }

    public addIngredientHandler = (type: string) => {
        const updatedIngredients = {
            ...this.state.ingredients,
            [type]: this.state.ingredients[type] + 1
        }

        const updatedPrice = INGREDIENTS_PRICE[type] + this.state.price;

        this.setState({
            price: updatedPrice,
            ingredients: updatedIngredients
        })
    }

    public removeIngredientHandler = (type: string) => {
        if (this.state.ingredients[type] === 0) {
            return;
        }

        const updatedIngredients = {
            ...this.state.ingredients,
            [type]: this.state.ingredients[type] - 1
        }

        const updatedPrice = this.state.price - INGREDIENTS_PRICE[type];

        this.setState({
            price: updatedPrice,
            ingredients: updatedIngredients
        })
    }

    public handleShowModal = () => {
        this.setState({ isPurchasable: true });
    }

    public handleCancelModal = () => {
        this.setState({ isPurchasable: false });
    }

    public handlerPurchaseContinue = () => {
        return;
    }

    public render() {
        const disabledInfo = { ...this.state.ingredients };
        let purchaseDisabled = true;

        for (const key of Object.keys(disabledInfo)) {
            disabledInfo[key] = disabledInfo[key] <= 0;
            if (!disabledInfo[key]) {
                purchaseDisabled = false;
            }
        }

        return (
            <Aux>
                <Modal
                    purchasable={this.state.isPurchasable}
                    cancelModel={this.handleCancelModal}
                >
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancel={this.handleCancelModal}
                        purchaseContinue={this.handlerPurchaseContinue}
                        price={this.state.price}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabledObj={disabledInfo}
                    purchase={purchaseDisabled}
                    price={this.state.price}
                    showModal={this.handleShowModal}
                />
            </Aux>
        );
    }
}

export default BurderBuilder;
