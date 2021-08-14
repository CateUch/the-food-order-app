import React, { useContext, useReducer } from 'react';
import CartContext from './cart-context';

const defaultCart: DefaultStateType = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state = defaultCart, action: ActionsType) => {
    if (action.type === 'ADD_ITEM') {

        const newTotalAmout = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: newTotalAmout
        }
    };

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const newTotalAmout = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: newTotalAmout
        }
    }
    return state;
}


const CartContextProvider = (props: { children: React.ReactNode }) => {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

    const addItemToCartHandler = (item: ItemCtxType) => {
        dispatchCart({ type: 'ADD_ITEM', item: item })
    }

    const removeItemFromCart = (id: string) => {
        dispatchCart({ type: 'REMOVE_ITEM', id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCart,
        defaultValue: '0',
    }

    return (
        <CartContext.Provider
            value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

//types
export type ItemCtxType = {
    id: string,
    name: string,
    price: number,
    amount: number,
    defaultValue: string,
}

type DefaultStateType = {
    items: Array<ItemCtxType>,
    totalAmount: number
}

type AddItemActionType = { type: 'ADD_ITEM', item: ItemCtxType };
type RemoveItemActionType = { type: 'REMOVE_ITEM', id: string };

type ActionsType = AddItemActionType | RemoveItemActionType