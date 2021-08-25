import { useRef, useState } from 'react';
import style from './Checkout.module.css';

const isEmpty = (value: string) => value.trim() === '';
const isFiveChars = (value: string) => value.trim().length === 5;

export const Checkout = (props: PropsType) => {

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
      });


  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const streetInputRef = useRef<HTMLInputElement | null>(null);
  const postalCodeInputRef = useRef<HTMLInputElement | null>(null);
  const cityInputRef = useRef<HTMLInputElement | null>(null);

const confirmHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (nameInputRef && nameInputRef.current) {
    const enteredName = nameInputRef.current.value;

    if (streetInputRef && streetInputRef.current) {
    const enteredStreet = streetInputRef.current.value;

    if (postalCodeInputRef && postalCodeInputRef.current) {
    const enteredPostalCode = postalCodeInputRef.current.value;

    if (cityInputRef && cityInputRef.current) {
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    // Submit cart data
  };
    }}}}
  const nameControlClasses = `${style.control} ${
    formInputsValidity.name ? '' : style.invalid
  }`;
  const streetControlClasses = `${style.control} ${
    formInputsValidity.street ? '' : style.invalid
  }`;
  const postalCodeControlClasses = `${style.control} ${
    formInputsValidity.postalCode ? '' : style.invalid
  }`;
  const cityControlClasses = `${style.control} ${
    formInputsValidity.city ? '' : style.invalid
  }`;



return <form onSubmit={confirmHandler}>
    <div className={nameControlClasses}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
    </div>
    <div className={postalCodeControlClasses}>
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id='postalCode' ref={postalCodeInputRef}/>
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>)}
    </div>
    <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
    </div>
    <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id='street' ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
    </div>

    <button type='button' onClick={props.onClose}>Cancel</button>
    <button className={style.submit}>Confirm</button>
</form>


}

//types
type PropsType = {
    onClose: ()=>void
}


