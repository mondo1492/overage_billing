import React from 'react';
import { commaFormat, round } from '../../../util/helper';

class WriteOffs extends React.Component {
  componentWillMount() {
    this.props.showAllCustomers("WriteOff");
  }

  tableHeader() {
    return (
      <tr>
        <th>Customer Name</th>
        <th>Billing Period</th>
        <th>Amount Written Off</th>
        <th>Written Off By</th>
        <th>Explanation</th>
      </tr>
    );
  }

  render() {
    const customers = this.props.customers ? this.props.customers : [];
    return(
      <div className="container">
        <div className="writeoff-container">
          <table>
            <tbody>
              {this.tableHeader()}
              {customers.map((customer, i) => (
                <tr key={`customer-${i}`}>
                  <td> {customer ? customer.name : ""}</td>
                  <td> {customer ? customer.billing_period : ""}</td>
                  <td> ${customer ? commaFormat(round(customer.over_cost)) : ""}</td>
                  <td> {customer ? customer.writeoff_approver : ""}</td>
                  <td> {customer ? customer.explanation : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}

export default WriteOffs;
