
import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Cart/CartIcon';
import style from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

function HeaderCartButton(props: PropsType) {

    const [btnHighLighted, setBtnHighLighted] = useState(false)
    const context = useContext(CartContext);

    const numberOfCartItems = context.items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0);

    const { items } = context;

    const btnStyles = `${style.cartButton} ${btnHighLighted ? style.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighLighted(true);
        const timer = setTimeout(() => {
            setBtnHighLighted(false);
        }, 300);

        return (() => {
            clearTimeout(timer)
        })

    }, [items])

    return (
                <button className={btnStyles} onClick= {props.onShowCart}>
            <span className={style.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={style.badge}> {numberOfCartItems} </span>
        </button>

    );
};

export default HeaderCartButton;

//types
type PropsType = {
    onShowCart: () => void,
}