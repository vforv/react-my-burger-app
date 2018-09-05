import * as React from 'react';
import * as css from './Modal.css';
import Aux from '../../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props: any) => (
    <Aux>
        <Backdrop 
        show={props.purchasable}
        clicked={props.cancelModel}
        />
        <div
            className={css.Modal}
            style={props.purchasable ? { opacity: 1, transform: 'translateY(0)' } : { opacity: 0, transform: 'translateY(-100vh)' }}
        >
            {props.children}
        </div>
    </Aux>
);

export default Modal;