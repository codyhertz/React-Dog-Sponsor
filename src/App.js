import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductPage from './ProductPage';
import Cart from './Cart';

const App = (props) =>
{

  return(
    <div>
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/products">
          <ProductPage dogsInCart={props.dogsInCart} addToList={props.addToList} />
        </Route>
        <Route path="/cart">
          <Cart dogsInCart={props.dogsInCart} clearList={props.clearList}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
