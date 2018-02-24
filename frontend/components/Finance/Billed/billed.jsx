import React from 'react';

class Billed extends React.Component {
  componentWillMount() {
    this.props.showAllCustomers("Delivered");
  }

  tableHeader() {
    return (
      <li id='overage-header' key='overage-header'>
        <h5>Customer Name</h5>
        <h5>Billing Period</h5>
        <h5>Bill Amount</h5>
        <h5>Payment</h5>
      </li>
    );
  }

  render() {
    const customers = this.props.customers ? this.props.customers : [];
    return(
      <div className="new-overages-container">
        <ul className='customer-ul'>
        {this.tableHeader()}
        {customers.map((customer, i) => (
          <li key={`customer-${i}`}>
            <h5> {customer ? customer.name : ""}</h5>
            <h5>ADD LOGIC</h5>
            <h5> {customer ? customer.over_cost : ""}</h5>
            <h5>Pending...</h5>
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

export default Billed;
