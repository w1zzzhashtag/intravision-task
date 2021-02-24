import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { NavBar, Search } from '../components';
import { BidsPG } from '../pages';


const App: React.FC = () => {
  return (
    <div className="app">
      <Redirect to="/bids" />
      <Search />
      <NavBar />

      <main className="main">
        <Switch>
          <Route
            path="/bids" component={BidsPG} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
