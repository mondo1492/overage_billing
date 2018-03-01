import { connect } from 'react-redux';
import Success from './success';
import values from 'lodash/values';
import { showCustomer, showAllCustomers } from '../../actions/customer_actions';
import { updateBill } from '../../actions/bill_actions';
import { withRouter } from 'react-router';


const mapStateToProps = ({ session, customers }) => ({
  customers: values(customers.entities),
  errors: customers.errors
});

const mapDispatchToProps = dispatch => ({
  showCustomer: (id) => dispatch(showCustomer(id)),
  showAllCustomers: billStatus => dispatch(showAllCustomers(billStatus)),
  updateBill: (bill) => dispatch(updateBill(bill)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Success));
