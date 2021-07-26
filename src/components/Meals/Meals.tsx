
import React, { useState } from 'react';
import style from './Meals.module.css';
import MealsSummary from './MealsSummary';
import MealItemForm from './/MealItemForm';
import MealItem from './MealItem';


function Meals() {

    // const itemPrice = `$${props.price.toFixed(2)}`;

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
                <ul >
                    {listOfMeals.map(item => {
                        return (
                            <div className={style.mealSection}>
                                <MealItemForm />
                                <MealItem item={item} />
                            </div>
                        )}
                    )}
                </ul>
            </div>
        </>
    )

}

export default Meals;