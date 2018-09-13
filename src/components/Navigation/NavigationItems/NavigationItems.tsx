import * as React from 'react';
import * as css from './NavigationItems.css';
import { NavLink } from 'react-router-dom';

const NavigationItems = (props: any) => (
    <ul className={css.NavigationItems}>
        <li className={css.NavigationItem}><NavLink exact={true} activeClassName={css.active} to="/">Home</NavLink></li>
        <li className={css.NavigationItem}><NavLink exact={true} activeClassName={css.active} to="/orders">Orders</NavLink></li>
    </ul>
);

export default NavigationItems;