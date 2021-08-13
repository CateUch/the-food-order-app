import React, { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import CartContext from '../../store/cart-context';
import Input from '../UI/Input/Input';
import style from './MealItemForm.module.css';

const MealItemForm = (props: PropsType) => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState('1')

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (amountInputRef && amountInputRef.current) {
            const enteredAmount = amountInputRef.current.value;
            const enteredAmountNumber = +enteredAmount;

            if (enteredAmount.trim().length === 0 ||
                enteredAmountNumber < 1 ||
                enteredAmountNumber > 5) {
                    setAmountIsValid(false)
                return;
            }
            props.onAddItemAmount(enteredAmountNumber);
            setInputValue('0')
        };

    };

const ctx = useContext(CartContext)

    useEffect(()=> {

        },[ctx.toDefault])



    return (
        <form className={style.form} onSubmit={submitHandler}>
            <Input label='Amount'
                ref={amountInputRef}
                input={{
                    id: 'm1' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '0',
                }} />
                {/* {!amountIsValid && <p>Please enter a valid amount (1-5).</p>} */}
            <button >Add to cart </button>

        </form>
    );
};

export default MealItemForm;

//types

type PropsType = {
    id: string,
    onAddItemAmount: (e: number) => void,
}