export const RECEIVE_BILL = 'RECEIVE_BILL';
export const RECEIVE_BILL_ERRORS = 'RECEIVE_BILL_ERRORS';
import * as APIBillUtil from '../util/bill_api_util';


export const receiveBill = bill => ({
  type: RECEIVE_BILL,
  bill
});

export const receiveBillErrors = errors => ({
  type: RECEIVE_BILL_ERRORS,
  errors
});

export const updateBill = bill => dispatch => {
  return APIBillUtil.updateBill(bill).then(
    response => dispatch(receiveBill(response)),
    errors => dispatch(receiveBillErrors(errors.responseJSON))
  );
};
//
export const showBill = id => dispatch => {
  return APIBillUtil.showBill(id).then(
    response => dispatch(receiveBill(response)),
    errors => dispatch(receiveBillErrors(errors.responseJSON))
  );
};
//
// export const showAllBills = billStatus => dispatch => {
//   return APIBillUtil.showAllBills(billStatus).then(
//     response => dispatch(receiveBills(response)),
//     errors => dispatch(receiveBillErrors(errors.responseJSON))
//   );
// };
