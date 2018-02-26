import React from 'react';
import { commaFormat, round } from '../../../util/helper';

class Billed extends React.Component {
  componentWillMount() {
    this.props.showAllCustomers("Delivered");
  }

  tableHeader() {
    return (
      <tr>
        <th>Customer Name</th>
        <th>Billing Period</th>
        <th>Bill Amount</th>
        <th>Payment</th>
      </tr>
    );
  }

  render() {
    const customers = this.props.customers ? this.props.customers : [];
    return(
      <div className="container">
        <div className="billed-container">
          <table>
            <tbody>
              {this.tableHeader()}
              {customers.map((customer, i) => (
                <tr key={`customer-${i}`}>
                  <td> {customer ? customer.name : ""}</td>
                  <td> {customer ? customer.billing_period : ""}</td>
                  <td> ${customer ? commaFormat(round(customer.over_cost)) : ""}</td>
                  <td>Pending...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Billed;
