import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaHome} from "react-icons/fa"
import ProductList from './components/ProductList';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Error from './pages/Error';
import { Switch, Route} from "react-router-dom"

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Error} />
        
      </Switch>
      
      
    </React.Fragment>
  );
}

export default App;
