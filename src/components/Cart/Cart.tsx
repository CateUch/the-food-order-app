import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import { ItemCtxType } from '../../store/CartContextProvider';
import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartItem from './CartItem';
import { Checkout } from './Checkout';

type PropsType = {
  onClose: () => void
}

const Cart = (props: PropsType) => {
  const context = useContext(CartContext);
  const [isSubmited, setIsSubmited] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [isCheckout, setIsCheckout] = useState<boolean>(false)

  const totalAmount = `$${context.totalAmount.toFixed(2)}`;
  const hasItems = context.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    context.removeItem(id)
  }

  const cartItemAddHandler = (item: ItemCtxType) => {
    context.addItem({ ...item, amount: 1 })
  }

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = async (userData: UserDataType) => {
    setIsSubmited(true);
    await fetch('https://the-food-order-app-a37b2-default-rtdb.firebaseio.com/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: context.items
      })
    })
    setIsSubmited(false);
    setDidSubmit(true);
    context.clearCart();


  }

  const cartItems = (
    <ul className={style.cartItems}>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}

        />
      )
      )}
    </ul>
  );



  const modalActions = (

    <div className={style.actions}>
      <button className={style.buttonAlt} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={style.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  )

  const submittingModalContent = <p>Sending the order...</p>
  const successfulSubmit = (
    <>
      <p>Submited succssefully</p>
      <div className={style.actions}>
        <button className={style.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  )

  const unsuccessfulSubmit = (
    <>
      <p>Submited unsuccessefully</p>
      <div className={style.actions}>
        <button className={style.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  )

  const cartModalContent = <>{cartItems}
    <div className={style.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {isCheckout && <Checkout onClose={props.onClose} onConfirm={submitOrderHandler} />}
    {!isCheckout && modalActions}
  </>

  return (
    <Modal onClose={props.onClose}>
{!isSubmited && !didSubmit && cartModalContent}
{isSubmited && submittingModalContent}
{!isSubmited && didSubmit && successfulSubmit}
    </Modal>
  );
};

export default Cart;

//types
export type UserDataType = {
  name: string,
  street: string,
  city: string,
  postalCode: string,
}