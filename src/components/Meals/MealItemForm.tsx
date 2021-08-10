import React, { FormEvent, Ref, useContext, useRef, useState } from 'react';
import CartContext from '../../store/cart-context';
import Input from '../UI/Input/Input';
import style from './MealItemForm.module.css';

type PropsType = {

    onAddItemAmount: (e: number) => void,

}

const MealItemForm = (props: PropsType) => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef<HTMLInputElement | null>(null);

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (amountInputRef && amountInputRef.current) {
            const enteredAmount = amountInputRef?.current?.value;
            const enteredAmountNumber = +enteredAmount;

            if (enteredAmount.trim().length === 0 ||
                enteredAmountNumber < 1 ||
                enteredAmountNumber > 5) {
                    setAmountIsValid(false)
                return;
            }
            props.onAddItemAmount(enteredAmountNumber);

        }
    }
    return (
        <form className={style.form} onSubmit={submitHandler}>
            <Input label='Amount'
                ref={amountInputRef}
                input={{

                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '0',
                }} />
            <button >Add to cart </button>
                {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm;