import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';

class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      explanation: ""
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
        <button onClick={()=> this.openModal()}>Reject Bill</button>
        <button onClick={() => this.handleAction("Pending_Sales", id)}>Approve Bill</button>
      </div>
    )
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  handleAction(status, id) {
    this.props.updateBill({
      bill: {
        status: status,
        id: id,
        explanation: this.state.explanation,
        writeoff_approver: "CSM"
      }
    }).then(()=> this.props.showAllCustomers("Pending_Success"));
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  toggleButton(id) {
    const disabled = this.state.explanation.length === 0 ? true : false;
    return (
      <button disabled={disabled} onClick={() => this.handleAction("WriteOff", id)}>Reject Bill</button>
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
    return(
      <div>
        <div className="new-overages-container">
          <ul className='customer-ul'>
          {this.tableHeader()}
          {customers.map((customer, i) => (
            <div key={`customer-${i}`}>
              <li>
                <h5> {customer ? customer.name : ""}</h5>
                <h5> {customer ? customer.monthly_api_limit : ""}</h5>
                <h5> {customer ? customer.previous_month_usge : ""}</h5>
                <h5> {customer ? customer.over_amt : ""}</h5>
                <h5> {customer ? customer.overage_unit_cost : ""}</h5>
                <h5> {customer ? customer.over_cost : ""}</h5>
                <span>{customer ? this.buttonAction(customer.start_date, customer.bill_id) : ""}</span>
              </li>
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
                        value={this.state.explanation}
                        onChange={this.update()}
                        placeholder="Please Write Explanation"
                      />
                  </div>
                </div>
              {this.toggleButton(customer? customer.bill_id: "")}
              </Modal>
            </div>
          ))}
        </ul>
        </div>
      </div>

    );
  }
}

export default Success;
