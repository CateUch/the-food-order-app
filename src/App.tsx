import React, {useState} from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';




function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler () {
    setCartIsShown(true)
  }

  function hideCartHandler () {
    setCartIsShown(false)
  }

  return (
    <div className="App">
      { cartIsShown && < Cart /> }
      <Header onShowCart={showCartHandler}/>
      <Meals />
    </div>
  );
}


export default App;
