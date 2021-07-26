import React from 'react';
import style from './MealItem.module.css'

type PropsType = {
    item: {
        name: string,
        description: string,
        price: string
    }
}

const MealItem = (props: PropsType) => {
    return (
        <div className={style.meals}>
            <div className={style.mealsName}>{props.item.name}</div>
            <div className={style.mealsDescriptione}>{props.item.description}</div>
            <div className={style.mealsPrice}>{props.item.price}</div>

        </div>
    )
}

export default MealItem;