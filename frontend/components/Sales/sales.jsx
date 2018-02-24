import React from 'react';
import moment from 'moment';

class Sales extends React.Component {
  componentWillMount() {
    this.props.showAllCustomers("Pending_Sales");
  }

  tableHeader() {
    return (
      <li id='overage-header' key='overage-header'>
        <h5>Customer Name</h5>
        <h5>Monthly Limit</h5>
        <h5>Previous Month Usage</h5>
        <h5>Overage Amount</h5>
        <h5>Overage Unit Cost</h5>
        <h5>Bill Total</h5>
        <h5>Action</h5>
      </li>
    );
  }

  buttonAction(startDate, id) {
    return (
      <div>
        <button onClick={() => this.handleAction("WriteOff", id)}>Reject Bill</button>
        <button onClick={() => this.handleAction("Final", id)}>Approve Bill</button>
      </div>
    )
  }

  handleAction(status, id) {
    this.props.updateBill({bill: {status: status, id: id}})
      .then(()=> this.props.showAllCustomers("Pending_Sales"));
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
            <h5> {customer ? customer.monthly_api_limit : ""}</h5>
            <h5> {customer ? customer.previous_month_usge : ""}</h5>
            <h5> {customer ? customer.over_amt : ""}</h5>
            <h5> {customer ? customer.overage_unit_cost : ""}</h5>
            <h5> {customer ? customer.over_cost : ""}</h5>
            <span>{customer ? this.buttonAction(customer.start_date, customer.bill_id) : ""}</span>
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

export default Sales;
