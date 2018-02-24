import { combineReducers } from 'redux';
import CustomerReducer from './customer_reducer';
import BillReducer from './bill_reducer';

const rootReducer = combineReducers({
  customers: CustomerReducer,
  bills: BillReducer
});

export default rootReducer;
