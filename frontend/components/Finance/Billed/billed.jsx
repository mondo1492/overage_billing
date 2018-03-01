import React from 'react';
import Empty from '../../empty';
import { commaFormat, round } from '../../../util/helper';

class Billed extends React.Component {
  componentWillMount() {
    this.props.showAllCustomers("SENT");
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

  renderTable() {
    const customers = this.props.customers.filter(customer => customer.bill_status === "SENT");
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

  render() {
    const hasItems = this.props.customers.length > 0;
    return(
      <div>
        { hasItems ?
          this.renderTable() :
          <Empty subject="customers billed"/>
        }
      </div>
    );
  }
}

export default Billed;
