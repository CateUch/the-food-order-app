import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import CartContextProvider from './store/CartContextProvider';




function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true)
  }

  function hideCartHandler() {
    setCartIsShown(false)
  }

  return (
    <CartContextProvider >
      <div className="App">
        {cartIsShown && < Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Meals />
      </div>
    </CartContextProvider>
  );
}


export default App;
