import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Front from './front';
import FinanceContainer from './Finance/navigation';
import Navigation from './Navigation/navigation';

const App = () => (
  <div>
    <Front/>
    <Navigation/>
    <Route exact path="/finance" component={ FinanceContainer } />

  </div>
);

export default App;
