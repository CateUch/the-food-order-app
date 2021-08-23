
import React, { useEffect, useState } from 'react';
import style from './Meals.module.css';
import MealsSummary from './MealsSummary';
import MealItem from './MealItem';

function Meals() {

    const [listOfMeals, setListOfMeals] = useState<ListOfMealsType>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [httpError, setHttpError] = useState<null | boolean>(null);

    useEffect(() => {
        const mealsAPI = async () => {
            const response = await fetch('https://the-food-order-app-a37b2-default-rtdb.firebaseio.com/meals.json');
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const responseData = await response.json();
            const mealsArray = [];



            for (const key in responseData) {
                mealsArray.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                })
            };


            setListOfMeals(mealsArray);
            setIsLoading(false);
        }
        mealsAPI().catch(error => {
            setIsLoading(false);
            setHttpError(error.message)
        }
        )
    }, [])

    if (httpError) {
        return (
            <section className={style.mealError}>
                <p>{httpError}</p>
            </section>
        )
    }

    // if (isLoading) {
    //     return (
    //         <section className={style.mealError}>
    //             <p>Loading...</p>
    //         </section>
    //     )
    // }

    return (
        <>
            <MealsSummary />
            {isLoading && <p>Loading...</p>}
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

export type MealItemType = {
    id: string,
    name: string,
    description: string,
    price: number,
}

export type ListOfMealsType = Array<MealItemType>

