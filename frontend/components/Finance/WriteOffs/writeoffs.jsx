import React from 'react';

class WriteOffs extends React.Component {
  componentWillMount() {
    this.props.showAllCustomers("WriteOff");
  }

  tableHeader() {
    return (
      <li id='overage-header' key='overage-header'>
        <h5>Customer Name</h5>
        <h5>Billing Period</h5>
        <h5>Amount Written Off</h5>
        <h5>Written Off By</h5>
        <h5>Explanation</h5>
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
            <h5> {customer ? customer.billing_period : ""}</h5>
            <h5> {customer ? customer.over_cost : ""}</h5>
            <h5> {customer ? customer.writeoff_approver : ""}</h5>
            <h5> {customer ? customer.explanation : ""}</h5>
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

export default WriteOffs;
