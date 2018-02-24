import React from 'react';
import NewOverages from './New/new_overages_container';
// import PendingReview from './PendingReview/pending_review_container';
import WriteOffs from './WriteOffs/writeoffs_container';
import ReadyToBill from './ReadyToBill/ready_to_bill_container';
import Billed from './Billed/billed_container';
import { Route, Link } from 'react-router-dom';

class FinanceNav extends React.Component {
  navItems() {
    return [
      {text: 'New', link: '/finance/new'},
      // {text: 'Pending Review', link: '/finance/pending_review'},
      {text: 'WriteOffs', link: '/finance/writeoffs'},
      {text: 'Ready To Bill', link: '/finance/ready_to_bill'},
      {text: 'Billed', link: '/finance/billed'}
      ];
  }

  render() {
    return(
      <div>
        <div className="finance-nav-container">
          <ul>
          {this.navItems().map((navItem, i) => (
            <li key={`navItem-${i}`}>
              <Link to={navItem.link}>{navItem.text}</Link>
            </li>
          ))}
        </ul>
        </div>
        <Route path='/finance/new' component={NewOverages}/>
        <Route path='/finance/writeoffs' component={WriteOffs}/>
        <Route path='/finance/ready_to_bill' component={ReadyToBill}/>
        <Route path='/finance/billed' component={Billed}/>
      </div>


    );
  }
}

export default FinanceNav;
