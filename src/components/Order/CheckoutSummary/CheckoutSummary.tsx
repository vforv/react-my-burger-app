import * as React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import css from './CheckoutSummary.css';

const CheckoutSummary = (props: any) => {
    return (
        <div className={css.CheckoutSummer}>
            <h1>We hope it tasts well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>

            <Button
            btnType="Danger"
            clicked={props.checkoutCancelled}
            >CANCEL</Button>

            <Button 
            btnType="Success"
            clicked={props.checkoutContinued}
            >Continue</Button>
        </div>
    )
}

export default CheckoutSummary;
