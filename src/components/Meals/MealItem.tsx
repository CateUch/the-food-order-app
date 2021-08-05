import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import style from './MealItem.module.css'

type ItemType = {
    id: string,
        name: string,
        price: string,
        description: string
}

type PropsType = {
    itemAmount: number,
    item: ItemType
}

const MealItem = (props: PropsType) => {

    const cartCtx = useContext(CartContext);

    const addToCart = (itemAmount: number) => {
        cartCtx.addItem ({
            id: props.item.id,
            name: props.item.name,
            amount: itemAmount,
            price: props.item.price
        })
    }

    return (
        <div className={style.meals}>
            <div className={style.mealsName}>{props.item.name}</div>
            <div className={style.mealsDescriptione}>{props.item.description}</div>
            <div className={style.mealsPrice}>{props.item.price}</div>

        </div>
    )
}

export default MealItem;