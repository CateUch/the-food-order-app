import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartItem from './CartItem';

type PropsType = {
  onClose: () => void
}

const Cart = (props: PropsType) => {
  const context = useContext(CartContext);


  const totalAmount = context.totalAmount;
  const hasItems = context.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {

  }

  const cartItemAddHandler = (item: any) => {

  }

  const cartItems = (
    <ul className={style.cartItems}>
      {context.items.map((item) => {
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={ cartItemRemoveHandler.bind(null, item.id)}
          onAdd={ cartItemAddHandler.bind(null, item)}

        />
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button className={style.buttonAlt} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;