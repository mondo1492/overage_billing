import { connect } from 'react-redux';
import NewOverages from './new_overages';
import values from 'lodash/values';
import { showCustomer, showAllCustomers } from '../../../actions/customer_actions';

const mapStateToProps = ({ session, customers }) => ({
  customers: values(customers.entities),
  errors: customers.errors
});

const mapDispatchToProps = dispatch => ({
  showCustomer: (id) => dispatch(showCustomer(id)),
  showAllCustomers: (id) => dispatch(showAllCustomers(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewOverages);
