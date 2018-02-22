import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Front from './front'

const App = () => (
  <div>
    <Route exact path="/" component={ Front } />
    
  </div>
);

export default App;
