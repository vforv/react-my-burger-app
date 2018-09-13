import * as React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';

export default class Orders extends React.Component {
    public state = {
        orders: []
    }

    public async componentDidMount() {
        axios.get('/orders.json')
            .then((orders) => {
                const formatedOrders = Object.keys(orders.data).map((order: any) => {
                    return {
                        ...orders.data[order],
                        id: order
                    }
                });

                this.setState({ orders: formatedOrders })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    public render() {
        return (
            <div>
                {this.state.orders.map((order: any) => {
                    return <Order key={order.id} order={order} />;
                })}
            </div>
        );
    }
}