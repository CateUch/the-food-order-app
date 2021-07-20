import React from 'react';
import './App.css';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Meals />
        </header>
    </div>
  );
}

export default App;
