import { combineReducers } from 'redux';
import CustomerReducer from './customer_reducer';

const rootReducer = combineReducers({
  customers: CustomerReducer
});

export default rootReducer;
