import React from 'react';

class NewOverages extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.showAllCustomers();
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const customers = this.props.customers ? this.props.customers : [];
    return(
      <div className="new-overages-container">
        <ul id='customer-ul'>
        {customers.map((customer, i) => (
          <li key={`customer-${i}`}>
            <h5> {customer ? customer.name : ""}</h5>
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

export default NewOverages;
