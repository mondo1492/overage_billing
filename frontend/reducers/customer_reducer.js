import merge from 'lodash/merge';
import values from 'lodash/values';
import {
  RECEIVE_CUSTOMER,
  RECEIVE_CUSTOMERS,
  RECEIVE_CUSTOMER_ERRORS
} from '../actions/customer_actions';


const defaultState = Object.freeze({
  entities: {},
  errors: []
});

const customerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_CUSTOMER:
      nextState = Object.assign({}, state);
      nextState.entities[action.customer.id] = action.customer;
      return nextState;
    case RECEIVE_CUSTOMERS:
      nextState = Object.assign({}, state, { entities: action.customers });
      return nextState;
    case RECEIVE_CUSTOMER_ERRORS:
      let errors = action.errors;
      nextState = Object.assign({}, state, { errors });
      return nextState;
    default:
      return state;
  }
};

export default customerReducer;
