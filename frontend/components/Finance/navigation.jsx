import React from 'react';
import NewOverages from './New/new_overages_container';
import WriteOffs from './WriteOffs/writeoffs_container';
import ReadyToBill from './ReadyToBill/ready_to_bill_container';
import Billed from './Billed/billed_container';
import { Route, Link, withRouter } from 'react-router-dom';

class FinanceNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new: "nav-unselected",
      writeoffs: "nav-unselected",
      ready_to_bill: "nav-unselected",
      billed: "nav-unselected"
    }
  }

  navItems() {
    return [
      {text: 'New', link: '/finance/new', stateName: 'new'},
      {text: 'WriteOffs', link: '/finance/writeoffs', stateName: 'writeoffs'},
      {text: 'Ready To Bill', link: '/finance/ready_to_bill', stateName: 'ready_to_bill'},
      {text: 'Billed', link: '/finance/billed', stateName: 'billed'}
      ];
  }

  highlight(selected) {
    const newState = {}
    Object.keys(this.state).forEach( key => {
      if (key === selected) {
        newState[key] = "nav-selected";
      } else {
        newState[key] = "nav-unselected";
      }
    });
    this.setState(newState);
  }

  componentDidMount() {
    const newState = {}
    Object.keys(this.state).forEach( key => {
      if (this.props.location.pathname.includes(key)) {
        newState[key] = "nav-selected";
      }
    });
    this.setState(newState);
  }

  render() {
    return(
      <div className='left-border'>
        <div className="navigation">
          {this.navItems().map((navItem, i) => (
            <Link to={navItem.link} key={`navItem-${i}`} className={this.state[navItem.stateName]}>
              <div onClick={()=>this.highlight(navItem.stateName)}>
                {navItem.text}
              </div>
            </Link>
          ))}
        </div>
        <Route path='/finance/new' component={NewOverages}/>
        <Route path='/finance/writeoffs' component={WriteOffs}/>
        <Route path='/finance/ready_to_bill' component={ReadyToBill}/>
        <Route path='/finance/billed' component={Billed}/>
      </div>
    );
  }
}

export default withRouter(FinanceNav);
