import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCart = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    return defaultCart
}

const CartContextProvider = (props: { children: React.ReactNode }) => {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

    function addItemToCartHandler (item: []) {

    }

    function removeItemFromCart (id: string) {

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