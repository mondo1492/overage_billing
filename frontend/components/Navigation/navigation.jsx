import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  navItems() {
    return [
      {text: 'Finance', link: '/finance'},
      {text: 'Success', link: '/success'},
      {text: 'Sales', link: '/sales'}
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
      </div>


    );
  }
}

export default Navigation;
