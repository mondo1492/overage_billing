import React from 'react';
import Empty from '../../empty';
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

  renderTable() {
    const customers = this.props.customers.filter(customer => customer.bill_status === "WriteOff");
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

  render() {
    const hasItems = this.props.customers.length > 0;
    return(
      <div>
        { hasItems ?
          this.renderTable() :
          <Empty subject="writeoffs to view"/>
        }
      </div>
    );
  }
}

export default WriteOffs;
