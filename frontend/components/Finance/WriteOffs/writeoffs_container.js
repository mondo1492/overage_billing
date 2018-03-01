import { connect } from 'react-redux';
import WriteOffs from './writeoffs';
import values from 'lodash/values';
import { showAllCustomers } from '../../../actions/customer_actions';

const mapStateToProps = ({ session, customers }) => ({
  customers: values(customers.entities).filter(customer => customer.bill_status === 'WriteOff'),
  errors: customers.errors
});

const mapDispatchToProps = dispatch => ({
  showAllCustomers: billStatus => dispatch(showAllCustomers(billStatus))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteOffs);
