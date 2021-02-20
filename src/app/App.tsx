import React from 'react';
import { Redirect } from 'react-router-dom';
import { NavBar, Search } from '../components';


const App: React.FC = () => {
  return (
    <div className="app">
      <Redirect to="/bids" />
      <Search />
      <NavBar />
    </div>
  );
}

export default App;
