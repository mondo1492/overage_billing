import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Front from './front';
import FinanceContainer from './Finance/navigation';

const App = () => (
  <div>
    <Front></Front>
    <Route exact path="/" component={ FinanceContainer } />

  </div>
);

export default App;
