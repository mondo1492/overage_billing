import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finance: "nav-unselected",
      success: "nav-unselected",
      sales: "nav-unselected"
    }
    this.highlight = this.highlight.bind(this);
    console.log("NAV PROPS", this.props);
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

  render() {
    return(
      <div>
        <div className="finance-nav-container">
          <Link to='/finance/new'>
            <div onClick={()=>this.highlight('finance')} className={this.state.finance}>
              Finance
            </div>
          </Link>
          <Link to='/success'>
            <div onClick={()=>this.highlight('success')} className={this.state.success}>
              Success
            </div>
          </Link>
          <Link to='/sales'>
            <div onClick={()=>this.highlight('sales')} className={this.state.sales}>
              Sales
            </div>
          </Link>
        </div>
      </div>


    );
  }
}

export default withRouter(Navigation);
