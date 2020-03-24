import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)



function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
