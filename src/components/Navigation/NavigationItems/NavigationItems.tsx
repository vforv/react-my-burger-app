import * as React from 'react';
import * as css from './NavigationItems.css';

const NavigationItems = (props: any) => (
    <ul className={css.NavigationItems}>
        <li className={css.NavigationItem}><a href="/">Home</a></li>
        <li className={css.NavigationItem}><a href="/">Checkout</a></li>
    </ul>
);

export default NavigationItems;