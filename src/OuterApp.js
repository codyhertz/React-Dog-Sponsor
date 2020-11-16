import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import App from './App';
import Navi from './Navi';
import React, { useState, useEffect } from 'react';

const OuterApp = () =>
{

  const [dogsInCart, setCart] = useState([]);

  const inCart = (obj, list) =>
  {
    for(let x of list) {
      if(obj.name == x.name)
      {
          return true;
      }
    }
    return false;
  }
  const addToList = (item) =>
  {
    if(!inCart(item, dogsInCart))
    {
      setCart([...dogsInCart, item]);
    }
  }

  const clearList = () =>
  {
    setCart([]);
  }

  return(
    <Router>
      <Header />
      <Navi />
      <App dogsInCart={dogsInCart} addToList={addToList} clearList={clearList} />
      <Footer />
    </Router>
  )
}

export default OuterApp;
