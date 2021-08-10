import React, { useReducer } from 'react';
import CartContext from './cart-context';


const defaultCart: DefaultStateType = {
    items: [],
    totalAmount: 0
}
//@ts-ignore
const cartReducer = (state = defaultCart, action: ActionsType) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item);
        const newTotalAmout = (+state.totalAmount) + (+action.item.price) * (+action.item.amount);
        return {
            items: updatedItems,
            totalAmount: newTotalAmout
        }
    }
    // if (action.type === 'REMOVE_ITEM') {

    // }
    return defaultCart
}

const CartContextProvider = (props: { children: React.ReactNode }) => {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

    function addItemToCartHandler(item: ItemCtxType) {
        dispatchCart({ type: 'ADD_ITEM', item: item })
    }

    function removeItemFromCart(id: string) {
        dispatchCart({ type: 'REMOVE_ITEM', id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCart
    }


    return (
        <CartContext.Provider
        //@ts-ignore
            value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartContextProvider;

//types
type ItemCtxType = {
    id: string,
    name: string,
    price: number,
    description: string,
    amount: number
}

type DefaultStateType = {
    items: Array<ItemCtxType>,
    totalAmount: number
}

type AddItemActionType =  {type: 'ADD_ITEM', item: ItemCtxType};
type RemoveItemActionType = {type: 'REMOVE_ITEM', id: string};

type ActionsType = AddItemActionType | RemoveItemActionType