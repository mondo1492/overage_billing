import React from 'react';
import moment from 'moment';

class NewOverages extends React.Component {
  componentWillMount() {
    this.props.showAllCustomers("New");
  }

  boolOver(bool) {
    return bool ? "Yes" : "No"
  }

  monthsSinceCustomer(startDate) {
    const today = moment(new Date(), "YYYY-MM-DD");
    return Math.round(today.diff(moment(startDate), 'months', true) * 100) / 100;
  }

  boolException(startDate) {
    return this.monthsSinceCustomer(startDate) < 3.0 ? "Yes" : "No";
  }

  tableHeader() {
    return (
      <li id='overage-header' key='overage-header'>
        <h5>Customer Name</h5>
        <h5>Over API Limit?</h5>
        <h5>Monthly Limit</h5>
        <h5>Previous Month Usage</h5>
        <h5>Overage Amount</h5>
        <h5>Overage Unit Cost</h5>
        <h5>Total Cost</h5>
        <h5>New Customer Exception?</h5>
        <h5>Months As Customer</h5>
        <h5>Action</h5>
      </li>
    );
  }

  buttonAction(startDate, id) {
    if (this.boolException(startDate) === "Yes") {
      return (
        <button onClick={() => this.handleAction("WriteOff", id)}>Move To WriteOff</button>
      );
    } else {
      return (
        <button onClick={() => this.handleAction("Pending_Success", id)}>Generate Bill</button>
      );
    }
  }

  handleAction(status, id) {
    this.props.updateBill({bill: {status: status, id: id}})
      .then(()=> this.props.showAllCustomers("New"));
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
            <h5> {customer ? this.boolOver(customer.over_bool) : ""}</h5>
            <h5> {customer ? customer.monthly_api_limit : ""}</h5>
            <h5> {customer ? customer.previous_month_usge : ""}</h5>
            <h5> {customer ? customer.over_amt : ""}</h5>
            <h5> {customer ? customer.overage_unit_cost : ""}</h5>
            <h5> {customer ? Math.round(customer.over_cost * 100) / 100 : ""}</h5>
            <h5> {customer ? this.boolException(customer.start_date) : ""}</h5>
            <h5> {customer ? this.monthsSinceCustomer(customer.start_date) : ""}</h5>
            <span>{customer ? this.buttonAction(customer.start_date, customer.bill_id) : ""}</span>
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

export default NewOverages;
