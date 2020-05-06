import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from './components/ProductList';
import Cart from './pages/CartComponents/Cart';
import Details from './pages/Details';
import Error from './pages/Error';
import { Switch, Route} from "react-router-dom"
import Modal from "./components/Modal"
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
      <Modal />
      
    </React.Fragment>
  );
}

export default App;
