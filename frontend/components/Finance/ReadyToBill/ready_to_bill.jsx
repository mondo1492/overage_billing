import React from 'react';
import Empty from '../../empty';
import { commaFormat, round } from '../../../util/helper';

class ReadyToBill extends React.Component {
  componentWillMount() {
    this.props.showAllCustomers("Final");
  }

  tableHeader() {
    return (
      <tr>
        <th>Customer Name</th>
        <th>Billing Period</th>
        <th>Bill Amount</th>
        <th>Action</th>
      </tr>
    );
  }

  handleAction(status, id) {
    this.props.updateBill({bill: {status: status, id: id}})
      .then(()=> this.props.showAllCustomers("Final"));
  }

  renderTable() {
    const customers = this.props.customers;
    return(
      <div className="container">
        <div className="ready-to-bill-container">
          <table>
            <tbody>
              {this.tableHeader()}
              {customers.map((customer, i) => (
                <tr key={`customer-${i}`}>
                  <td> {customer ? customer.name : ""}</td>
                  <td> {customer ? customer.billing_period : ""}</td>
                  <td> ${customer ? commaFormat(round(customer.over_cost)) : ""}</td>
                  <td>
                    <button
                      className='approve-button table-button'
                      onClick={() => this.handleAction("SENT", customer.bill_id)}>
                      Deliver Bill
                    </button>
                  </td>
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
          <Empty subject="customer bills ready to review"/>
        }
      </div>
    );
  }
}

export default ReadyToBill;
