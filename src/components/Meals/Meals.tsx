//@ts-nocheck
import React, { useState } from 'react';
import style from './Meals.module.css';
import MealsSummary from './MealsSummary';
import MealItemForm from './/MealItemForm';


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
            <li className={style.mealsWindow}>
                {listOfMeals.map(item => {
                    return (
                        <div className={style.mealSection}>
                            <div className={style.mealForm}><MealItemForm /></div>
                            <div className={style.meals}>
                                <div className={style.mealsName}>{item.name}</div>
                                <div className={style.mealsDescriptione}>{item.description}</div>
                                <div className={style.mealsPrice}>{item.price}</div>

                            </div>

                        </div>
                    )
                }

                )}




            </li>
        </>
    )

}

export default Meals;