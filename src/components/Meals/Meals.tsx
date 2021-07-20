//@ts-nocheck
import React, {useState} from 'react';
import style from './Meals.module.css';


function Meals () {

    const [ listOfMeals, setListOfMeals] = useState([
        {name: 'Sushi',
        description: 'Finest fish and Veggies',
        price: '$22.99'},

        {name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: '$18.99'},

        {name: 'Schnitzel',
        description: 'A german speciality',
        price: '$16.99'}
    ]

    );

    return (
        <>
        <div className={style.meals}>
            {listOfMeals.map(item => {
                <div>

                    <span>{item.name}</span>
                    <span>{item.description}</span>
                    <span>{item.price}</span>
                    </div>
            }
            )}
        </div>
        </>
    )
}

export default Meals;