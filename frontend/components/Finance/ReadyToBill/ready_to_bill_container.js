import { connect } from 'react-redux';
import ReadyToBill from './ready_to_bill';
import values from 'lodash/values';
import { showAllCustomers } from '../../../actions/customer_actions';
import { updateBill, sendBill } from '../../../actions/bill_actions';

const mapStateToProps = ({ session, customers }) => ({
  customers: values(customers.entities),
  errors: customers.errors
});

const mapDispatchToProps = dispatch => ({
  showAllCustomers: billStatus => dispatch(showAllCustomers(billStatus)),
  updateBill: (bill) => dispatch(updateBill(bill)),
  sendBill: bill => dispatch(sendBill(bill))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadyToBill);
