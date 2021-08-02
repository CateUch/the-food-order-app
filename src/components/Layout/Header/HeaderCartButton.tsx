
import React, {useContext} from 'react';
import CartIcon from '../../Cart/CartIcon';
import style from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

type PropsType = {
    onShowCart: () => void,
}

function HeaderCartButton(props: PropsType) {
const context = useContext(CartContext);


const numberOfCartItems = context.items.reduce((curNum, item) => {
    //@ts-ignore
    return curNum + item.amount
}, 0)

    return (
        <button className={style.cartButton} onClick={props.onShowCart}>
            <span className={style.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={style.badge}> {numberOfCartItems} </span>
        </button>

    )
}

export default HeaderCartButton;
