export const RECEIVE_CUSTOMER = 'RECEIVE_CUSTOMER';
export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS';
export const RECEIVE_CUSTOMER_ERRORS = 'RECEIVE_CUSTOMER_ERRORS';
import * as APICustomerUtil from '../util/customer_api_util';


export const receiveCustomer = customer => ({
  type: RECEIVE_CUSTOMER,
  customer
});

export const receiveCustomers = customers => ({
  type: RECEIVE_CUSTOMERS,
  customers
});

export const receiveCustomerErrors = errors => ({
  type: RECEIVE_CUSTOMER_ERRORS,
  errors
});

export const updateCustomer = customer => dispatch => {
  return APICustomerUtil.updateCustomer(customer).then(
    response => dispatch(receiveCustomer(response)),
    errors => dispatch(receiveCustomerErrors(errors.responseJSON))
  );
};

export const showCustomer = customer => dispatch => {
  return APICustomerUtil.showCustomer(room).then(
    response => dispatch(receiveCustomer(response)),
    errors => dispatch(receiveCustomerErrors(errors.responseJSON))
  );
};

export const showAllCustomers = billStatus => dispatch => {
  return APICustomerUtil.showAllCustomers(billStatus).then(
    response => dispatch(receiveCustomers(response)),
    errors => dispatch(receiveCustomerErrors(errors.responseJSON))
  );
};
