import React from 'react';
import { commaFormat, round } from '../../../util/helper';

class ReadyToBill extends React.Component {
  componentWillMount() {
    this.props.showAllCustomers("Final");
  }

  tableHeader() {
    return (
      <li id='overage-header' key='overage-header'>
        <h5>Customer Name</h5>
        <h5>Billing Period</h5>
        <h5>Bill Amount</h5>
        <h5>Action</h5>
      </li>
    );
  }

  handleAction(status, id) {
    this.props.updateBill({bill: {status: status, id: id}})
      .then(()=> this.props.showAllCustomers("Final"));
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
            <h5> ${customer ? commaFormat(round(customer.over_cost)) : ""}</h5>
            <button onClick={() => this.handleAction("Delivered", customer.bill_id)}>Deliver Bill</button>
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

export default ReadyToBill;
