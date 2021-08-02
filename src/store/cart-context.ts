import React from 'react';


const CartContext = React.createContext({
    items: [],
    totalAmount: 12,
    addItem: (item: []) => {},
    removeItem: (id: string) => {}
})

export default CartContext;

