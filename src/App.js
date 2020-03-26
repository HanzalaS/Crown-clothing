import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/Shop-page/shop.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';




function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
