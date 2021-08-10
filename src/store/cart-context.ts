//@ts-nocheck
import React from 'react';



const CartContext = React.createContext<CartContextType>({
    items: [],
    totalAmount: 0,
    addItem: (item: CtxItemType) => {},
    removeItem: (id: string) => { }
})

export default CartContext;

type CtxItemType = {
    id: string,
    name: string,
    amount:number,
    price: number,
}

type CartContextType = {
    items: Array<CtxItemType>,
    totalAmount: number,
    addItem: (item: CtxItemType) => {},
    removeItem: (id: string) => {}
}