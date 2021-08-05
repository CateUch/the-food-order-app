import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCart = {
    items: [],
    totalAmount: 0
}
//@ts-ignore
const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item);
        const newTotalAmout = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: newTotalAmout
        }
    }
    if (action.type === 'REMOVE_ITEM') {

    }
    return defaultCart
}

const CartContextProvider = (props: { children: React.ReactNode }) => {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

    function addItemToCartHandler(item: []) {
        dispatchCart({ type: 'ADD_ITEM', item: item })
    }

    function removeItemFromCart(id: string) {
        dispatchCart({ type: 'ADD_ITEM', id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCart
    }


    return (
        <CartContext.Provider
            value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartContextProvider;