export const updateBill = bill => {
  return (
  $.ajax({
    method: 'PATCH',
    url: `api/bills/${bill.bill.id}`,
    data: bill
  })
)};

export const showBill = id => (
  $.ajax({
    method: 'PATCH',
    url: `api/bills/${id}`
  })
);

export const sendBill = bill => (
  $.ajax({
    method: 'POST',
    url: 'https://requestb.in/17tlzez1',
    crossDomain: true,
    data: bill
  })
)
