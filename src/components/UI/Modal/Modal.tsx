import * as React from 'react';
import * as css from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

class Modal extends React.Component<any>{
    public shouldComponentUpdate(nextProps: any, nextState: any) {
        return nextProps.purchasable !== this.props.purchasable;
    }

    public componentWillUpdate() {
        console.log('[Model] will update');
    }

    public render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.purchasable}
                    clicked={this.props.cancelModel}
                />
                <div
                    className={css.Modal}
                    style={this.props.purchasable ? { opacity: 1, transform: 'translateY(0)' } : { opacity: 0, transform: 'translateY(-100vh)' }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;