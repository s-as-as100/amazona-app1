 import React from 'react';
//import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {Link} from 'react-router-dom';

function App() {
  
  return (
      <BrowserRouter>
    
    <div className="grid-container">
        <header className="row">
         <div>
             <a className="brand" href="/">Amazona</a>
         </div>
         <div>
             <Link to="/HomeScreen">HomeScreen</Link>
             <a href="/cart">Cart</a>
             <a href="/signin">Sign In</a>
         </div>
        </header>
        <main>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/HomeScreen" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
         </div>
         </BrowserRouter>
  );
}



export default App;
