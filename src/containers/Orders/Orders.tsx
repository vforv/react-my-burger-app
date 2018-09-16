import * as React from 'react';
import Order from '../../components/Order/Order';
// import axios from '../../axios-order';
import { connect } from 'react-redux';
import * as store from '../../store';

class Orders extends React.Component<any> {
    // public state = {
    //     orders: []
    // }

    public async componentDidMount() {
        this.props.onInitOrders();
    }

    public render() {
        return (
            <div>
                {this.props.orders.map((order: any) => {
                    return <Order key={order.id} order={order} />;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        orders: state.orders.orders
    }
}

const mapDispathcToProps = (dispatch: any) => {
    return {
        onInitOrders: () => dispatch(store.initOrders())
    }
}

export default connect(mapStateToProps, mapDispathcToProps)(Orders);