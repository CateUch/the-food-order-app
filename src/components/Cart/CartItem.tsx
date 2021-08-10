import React from 'react';
import style from './CartItem.module.css'

 const CartItem = (props: PropsType) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
      <li className={style.cartItem}>
        <div>
          <h2>{props.name}</h2>
          <div className={style.summary}>
            <span className={style.price}>{price}</span>
            <span className={style.amount}>x {props.amount}</span>
          </div>
        </div>
        <div className={style.actions}>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </li>
    );
  };

export default CartItem;

//types

type PropsType = {
    name: string,
    amount: number,
    price: number
    onRemove: (id: any) => void,
    onAdd: (item: any) => void
}