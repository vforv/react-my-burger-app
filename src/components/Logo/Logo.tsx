import * as React from 'react';
import * as css from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = (props: any) => (
    <div className={css.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
)

export default Logo;