//@ts-nocheck
import React, { useState } from 'react';
import style from './Meals.module.css';
import MealsSummary from './MealsSummary';



function Meals() {

    const [listOfMeals, setListOfMeals] = useState([
        {
            name: 'Sushi',
            description: 'Finest fish and Veggies',
            price: '$22.99'
        },

        {
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            price: '$18.99'
        },

        {
            name: 'Schnitzel',
            description: 'A german speciality',
            price: '$16.99'
        }
    ]);
    console.log(listOfMeals)

    return (
<>
<MealsSummary />
    <div className={style.mealsWindow}>
            {listOfMeals.map(item => {
                return (
                    <div className={style.meals}>
                        <span className={style.mealsName}>{item.name}</span>
                        <span className={style.mealsDescriptione}>{item.description}</span>
                        <span className={style.mealsPrice}>{item.price}</span>
                    </div>
                )
            }
            )}
            </div>
</>

    )
}

export default Meals;