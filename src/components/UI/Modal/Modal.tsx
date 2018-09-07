import * as React from 'react';
import * as css from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

class Modal extends React.Component<any>{
    public shouldComponentUpdate(nextProps: any, nextState: any) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    public componentWillUpdate() {
        console.log('[Model] will update');
    }

    public render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.cancelModel}
                />
                <div
                    className={css.Modal}
                    style={this.props.show ? { opacity: 1, transform: 'translateY(0)' } : { opacity: 0, transform: 'translateY(-100vh)' }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;