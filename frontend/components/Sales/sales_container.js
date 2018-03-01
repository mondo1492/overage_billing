import { connect } from 'react-redux';
import Sales from './sales';
import values from 'lodash/values';
import { showCustomer, showAllCustomers } from '../../actions/customer_actions';
import { updateBill } from '../../actions/bill_actions';

const mapStateToProps = ({ session, customers }) => ({
  customers: values(customers.entities).filter(customer => customer.bill_status === 'Pending_Sales'),
  errors: customers.errors
});

const mapDispatchToProps = dispatch => ({
  showCustomer: (id) => dispatch(showCustomer(id)),
  showAllCustomers: billStatus => dispatch(showAllCustomers(billStatus)),
  updateBill: (bill) => dispatch(updateBill(bill)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sales);
