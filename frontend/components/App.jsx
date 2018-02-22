import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Front from './front';
import NewOveragesContainer from './Finance/New/new_overages_container';

const App = () => (
  <div>
    <Front></Front>
    <Route exact path="/" component={ NewOveragesContainer } />

  </div>
);

export default App;
