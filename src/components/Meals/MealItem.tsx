import React, { useContext, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import style from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import { MealItemType } from './Meals';

const MealItem = (props: PropsType) => {

    const context = useContext(CartContext);

    const addItemToCartHandler = (amount: number) => {
        context.addItem({
            id: props.item.id,
            name: props.item.name,
            amount: amount,
            price: props.item.price,
        });
    };

    return (
        <>
            <li className={style.meals}>
                <div className={style.mealsName}>{props.item.name}</div>
                <div className={style.mealsDescriptione}>{props.item.description}</div>
                <div className={style.mealsPrice}>{props.item.price}</div>
                <MealItemForm id={props.item.id} onAddItemAmount={addItemToCartHandler} />
            </li>
            </>
    );
};

export default MealItem;


//types
// type ItemType = {
//     id: string,
//     name: string,
//     price: number,
//     description: string
// }

type PropsType = {
    item: MealItemType
}
