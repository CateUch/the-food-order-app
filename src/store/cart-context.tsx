
import React from 'react';
import { ItemCtxType } from './CartContextProvider';

const CartContext = React.createContext<CartContextType>({
    items: [],
    totalAmount: 0,
    removeItem: (id: string) => { },
    addItem: (item: ItemCtxType) => { },
    clearCart: () => {}
})

export default CartContext;


//types
export type CartContextType = {
    items: Array<ItemCtxType>,
    totalAmount: number,
    removeItem: (id: string) => void,
    addItem: (item: ItemCtxType) => void,
    clearCart: () => void,
}