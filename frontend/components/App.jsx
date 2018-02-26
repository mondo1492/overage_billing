import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Front from './front';
import Finance from './Finance/navigation';
import Success from './Success/success_container';
import Sales from './Sales/sales_container';
import Navigation from './Navigation/navigation';

const App = () => (
  <div className='master-container'>
    <Front/>
    <Navigation/>
    <Switch>
      <Route path="/finance" component={ Finance } />
      <Route path="/success" component={ Success } />
      <Route path="/sales" component={ Sales } />
    </Switch>
  </div>
);

export default App;
