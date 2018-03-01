import React from 'react';
import moment from 'moment';
import Empty from '../../empty';
import { commaFormat, round } from '../../../util/helper';

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
      <tr>
        <th>Customer Name</th>
        <th>Over API Limit?</th>
        <th>Monthly Limit</th>
        <th>Previous Month Usage</th>
        <th>Overage Amount</th>
        <th>Overage Unit Cost</th>
        <th>Total Cost</th>
        <th>NC Exception?</th>
        <th>Months As Customer</th>
        <th>Action</th>
      </tr>
    );
  }

  buttonAction(startDate, id) {
    if (this.boolException(startDate) === "Yes") {
      return (
        <button
          className='reject-button table-button'
          onClick={() => this.handleAction("WriteOff", id)}>
          Writeoff
        </button>
      );
    } else {
      return (
        <button
          className='approve-button table-button'
          onClick={() => this.handleAction("Pending_Success", id)}>
          Generate Bill
        </button>
      );
    }
  }

  handleAction(status, id) {
    this.props.updateBill({
      bill: {
        status: status,
        id: id,
        explanation: "New Customer Excepetion",
        writeoff_approver: "Finance"
      }})
      .then(()=> this.props.showAllCustomers("New"));
  }

  renderTable() {
    const customers = this.props.customers;
    return(
      <div className="container">
        <div className="new-overages-container">
          <table>
            <tbody>
            {this.tableHeader()}
            {customers.map((customer, i) => (
              <tr key={`customer-${i}`}>
                <td> {customer ? customer.name : ""}</td>
                <td> {customer ? this.boolOver(customer.over_bool) : ""}</td>
                <td> {customer ? commaFormat(customer.monthly_api_limit) : ""}</td>
                <td> {customer ? commaFormat(customer.previous_month_usge) : ""}</td>
                <td> {customer ? commaFormat(customer.over_amt) : ""}</td>
                <td> {customer ? customer.overage_unit_cost : ""}</td>
                <td> ${customer ? commaFormat(round(customer.over_cost)) : ""}</td>
                <td> {customer ? this.boolException(customer.start_date) : ""}</td>
                <td> {customer ? this.monthsSinceCustomer(customer.start_date) : ""}</td>
                <td> {customer ? this.buttonAction(customer.start_date, customer.bill_id) : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    )
  }

  render() {
    const hasItems = this.props.customers.length > 0;
    return(
      <div>
        { hasItems ?
          this.renderTable() :
          <Empty subject="new overages to review"/>
        }
      </div>
    );
  }
}

export default NewOverages;
