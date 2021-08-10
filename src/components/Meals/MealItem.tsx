import React, { useContext, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import style from './MealItem.module.css'
import MealItemForm from './MealItemForm';

type ItemType = {
    id: string,
        name: string,
        price: number,
        description: string
}

type PropsType = {
    // onAddAmount: (e: number) => void,
    // itemAmount: number,
    item: ItemType
}


const MealItem = (props: PropsType) => {

    // const [itemAmount, setItemAmount] = useState(0)

    // function onAddItemAmount(amount: number) {
    //     setItemAmount(amount)
    // }

    const context = useContext(CartContext);
    const onAddItemToCartHandler = (amount: number,
        ) => {
        context.addItem({
          id: props.item.id,
          name: props.item.name,
          amount:amount,
          price: props.item.price,
        });
      };

    return (
        <>
        <div className={style.meals}>
            <div className={style.mealsName}>{props.item.name}</div>
            <div className={style.mealsDescriptione}>{props.item.description}</div>
            <div className={style.mealsPrice}>{props.item.price}</div>
            <MealItemForm  onAddItemAmount={onAddItemToCartHandler}/>
        </div>

        </>
    )
}

export default MealItem;