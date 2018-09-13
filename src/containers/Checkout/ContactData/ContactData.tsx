import * as React from 'react';
import Button from '../../../components/UI/Button/Button';
import * as css from './ContactData.css';
import axios from '../../../axios-order';
import { connect } from 'react-redux';

export class ContactData extends React.Component<any> {
    public state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    public orderHandler = (event: any) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            customer: {
                name: 'Max Sch',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '123',
                    country: 'Germany'
                },
                email: 'test@gmailc.om'
            },
            deliveryMethod: 'fastedst'
        };
        console.log(order)
        axios
            .post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
                console.log(error)
            });
    }

    public render() {
        return (
            <div className={css.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={css.Input} type="text" name="name" placeholder="Your name" />
                    <input className={css.Input} type="text" name="email" placeholder="Your email" />
                    <input className={css.Input} type="text" name="street" placeholder="Your street" />
                    <input className={css.Input} type="text" name="postal" placeholder="Your postal" />
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
            </div>
        );
    }
}

const stateToProps = (state: any) => {
    return {
        ings: state.ingredients,
        price: state.price
    }
};

export default connect(stateToProps)(ContactData);