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
