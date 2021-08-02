import React from 'react';
import style from './MealItemForm.module.css'

const MealItemForm = () => {
    return (
        <div className={style.form}>
        {/* <div className={style.form}> */}
        <label htmlFor="amount">Amount </label>
        <input type="number" name='amount'/>
        <div >
        <button >Add to cart </button>
        </div>
        {/* </div> */}
        </div>
    )
}

export default MealItemForm;