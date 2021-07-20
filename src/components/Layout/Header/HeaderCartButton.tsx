import React from 'react';
import CartIcon from '../../Cart/CartIcon';
import style from './HeaderCartButton.module.css';


function HeaderCartButton() {
    return (
        <button className={style.cartButton}>
            <span className={style.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={style.badge}> 25 </span>
        </button>

    )
}

export default HeaderCartButton;
