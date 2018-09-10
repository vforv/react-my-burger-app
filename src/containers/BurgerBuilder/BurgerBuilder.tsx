import * as React from 'react';
import Burger from 'src/components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummery/OrderSummery';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';

const INGREDIENTS_PRICE = {
    salad: 0.3,
    bacon: 0.2,
    cheese: 0.1,
    meat: 0.5
}

class BurderBuilder extends React.Component<any> {
    public state = {
        ingredients: {},
        price: 4,
        isPurchasable: false,
        loading: false
    }

    public componentDidMount() {
        axios.get('/ingredients.json')
            .then((response: any) => {
                this.setState({ ingredients: response.data })
            })
            .catch((error: any) => {
                console.log(error)
            });
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
        // this.setState({ loading: true });
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price,
        //     customer: {
        //         name: 'Max Sch',
        //         address: {
        //             street: 'Teststreet 1',
        //             zipCode: '123',
        //             country: 'Germany'
        //         },
        //         email: 'test@gmailc.om'
        //     },
        //     deliveryMethod: 'fastedst'
        // };

        // axios
        //     .post('/orders.json', order)
        //     .then(response => {
        //         this.setState({ loading: false });
        //         this.setState({ isPurchasable: false });
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false });
        //         this.setState({ isPurchasable: false });
        //         console.log(error)
        //     });
        const queryParams = [];
        for (const i in this.state.ingredients) {
            if(this.state.ingredients[i]) {
                queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
            }
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryString}`
        });
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
        let orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancel={this.handleCancelModal}
            purchaseContinue={this.handlerPurchaseContinue}
            price={this.state.price}
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

export default WithErrorHandler(BurderBuilder, axios);
