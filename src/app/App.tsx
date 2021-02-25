import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { NavBar, Search } from '../components';
import { AssetsPG, BidsPG, ClientsPG, EmployeesPG, KnowledgePG, SettingsPG } from '../pages';


const App: React.FC = () => {
  return (
    <div className="app">
      <Redirect to="/bids" />
      <Search />
      <NavBar />

      <main className="main">
        <Switch>
          <Route
            path="/knowledge" component={KnowledgePG} />
          <Route
            path="/bids" component={BidsPG} />
          <Route
            path="/employees" component={EmployeesPG} />
          <Route
            path="/clients" component={ClientsPG} />
          <Route
            path="/assets" component={AssetsPG} />
          <Route
            path="/settings" component={SettingsPG} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
