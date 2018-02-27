import { connect } from 'react-redux';
import Billed from './billed';
import values from 'lodash/values';
import { showAllCustomers } from '../../../actions/customer_actions';
import { sendBill } from '../../../actions/bill_actions';

const mapStateToProps = ({ session, customers }) => ({
  customers: values(customers.entities),
  errors: customers.errors
});

const mapDispatchToProps = dispatch => ({
  showAllCustomers: billStatus => dispatch(showAllCustomers(billStatus)),
  sendBill: bill => dispatch(sendBill(billStatus))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Billed);
