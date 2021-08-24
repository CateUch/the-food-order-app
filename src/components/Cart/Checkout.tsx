import style from './Checkout.module.css';

export const Checkout = (props: PropsType) => {

const confirmHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()
}

return <form onSubmit={confirmHandler}>
    <div className={style.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' />
    </div>
    <div className={style.control}>
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id='postalCode' />
    </div>
    <div className={style.control}>
        <label htmlFor="city">City</label>
        <input type="text" id='city' />
    </div>
    <div className={style.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id='street' />
    </div>

    <button type='button' onClick={props.onClose}>Cancel</button>
    <button className={style.submit}>Confirm</button>
</form>

}

//types
type PropsType = {
    onClose: ()=>void
}


