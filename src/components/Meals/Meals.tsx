
import React from 'react';
import style from './Meals.module.css';
import MealsSummary from './MealsSummary';
import MealItem from './MealItem';
import { v1 } from 'uuid'


function Meals() {

    const listOfMeals = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and Veggies',
            price: 22.99
        },
        {
            id: 'm2',
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            price: 18.99
        },
        {
            id: 'm3',
            name: 'Schnitzel',
            description: 'A german speciality',
            price: 16.99
        }
    ];

    return (
        <>
            <MealsSummary />
            <div className={style.mealsWindow}>
                <ul >
                    {listOfMeals.map(item => {
                        return (
                            <div className={style.mealSection} key={item.id}>
                                <MealItem item={item} />
                            </div>
                        )
                    }
                    )}
                </ul>
            </div>
        </>
    )

}

export default Meals;

//types

export type ItemType = {
    id: string,
    name: string,
    price: number,
    description: string
}

