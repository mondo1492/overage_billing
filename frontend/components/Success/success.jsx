import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import { commaFormat, round } from '../../util/helper';

class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      explanation: "",
      workingId: null
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    this.props.showAllCustomers("Pending_Success");
  }

  tableHeader() {
    return (
      <tr>
        <th>Customer Name</th>
        <th>Monthly Limit</th>
        <th>Previous Month Usage</th>
        <th>Overage Amount</th>
        <th>Overage Unit Cost</th>
        <th>Bill Total</th>
        <th>Action</th>
      </tr>
    );
  }

  buttonAction(id) {
    return (
      <div>
        <button onClick={() => this.openModal(id)}>Reject Bill</button>
        <button onClick={() => this.handleAction("Pending_Sales", id)}>Approve Bill</button>
      </div>
    )
  }

  openModal(id) {
    this.setState({ modalOpen: true, workingId: id });
  }

  handleAction(status, id) {
    const useId = id ? id : this.state.workingId;
    this.props.updateBill({
      bill: {
        status: status,
        id: useId,
        explanation: this.state.explanation,
        writeoff_approver: "CSM"
      }
    })
    .then(()=> this.props.showAllCustomers("Pending_Success"))
    .then(()=> this.setState({modalOpen: false}));
  }

  closeModal() {
    this.setState({modalOpen: false, workingId: null, explanation: ""});
  }

  toggleButton(id) {
    const disabled = this.state.explanation.length === 0 ? true : false;
    return (
      <button disabled={disabled} onClick={() => this.handleAction("WriteOff")}>Reject Bill</button>
    )
  }

  update() {
    return e => {
      this.setState({
        explanation: e.currentTarget.value
     });
   };
 }

  render() {
    const customers = this.props.customers ? this.props.customers : [];
    const buttonAction = this.buttonAction.bind(this);
    return(
      <div className="container">
        <div className="success-container">
          <table>
            <tbody>
              {this.tableHeader()}
              {customers.map((customer, i) => (
                <tr key={`customer-${i}`}>
                    <td> {customer ? customer.name : ""}</td>
                    <td> {customer ? commaFormat(customer.monthly_api_limit) : ""}</td>
                    <td> {customer ? commaFormat(customer.previous_month_usge) : ""}</td>
                    <td> {customer ? commaFormat(customer.over_amt) : ""}</td>
                    <td> {customer ? customer.overage_unit_cost : ""}</td>
                    <td> ${customer ? commaFormat(round(customer.over_cost)) : ""}</td>
                    <td>{customer ? buttonAction(customer.bill_id) : ""}</td>
                  <Modal
                    isOpen={this.state.modalOpen}
                    onRequestClose={this.closeModal}
                    className="modal"
                    overlayClassName="modal-overlay"
                    toggleButton={this.toggleButton}
                    contentLabel="modal">
                    <div>
                      <button className="X" onClick={this.closeModal}>&times;</button>
                      <div>
                        <h2>WriteOff Explanation</h2>
                          <textarea
                            autoFocus
                            value={this.state.explanation}
                            onChange={this.update()}
                            placeholder="Please Write Explanation"
                          />
                      </div>
                    </div>
                  {this.toggleButton(this.state.workingId)}
                  </Modal>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Success;
