import merge from 'lodash/merge';
import values from 'lodash/values';
import {
  RECEIVE_BILL,
  RECEIVE_BILL_ERRORS
} from '../actions/bill_actions';

const defaultState = Object.freeze({
  bills: {},
  errors: []
});

const billReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_BILL:
      nextState = Object.assign({}, state);
      nextState.bills[action.bill.id] = action.bill;
      return nextState;
    case RECEIVE_BILL_ERRORS:
      let errors = action.errors;
      nextState = Object.assign({}, state, { errors });
      return nextState;
    default:
      return state;
  }
};

export default billReducer;
