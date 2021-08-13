import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';
import CartContextProvider from './store/CartContextProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const fetching = useContext(CartContext)

  function showCartHandler() {
    setCartIsShown(true);
    fetching.toDefault = !fetching.toDefault
  }

  function hideCartHandler() {
    setCartIsShown(false)
    fetching.toDefault = !fetching.toDefault
  }


  return (
    <CartContextProvider>
      <div className="App">
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Meals />
      </div>
    </CartContextProvider>
  );
}


export default App;
