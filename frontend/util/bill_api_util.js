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
    url: 'https://93a602ab-c5b9-416d-9a0c-35c7f643c9a5.trayapp.io',
    crossDomain: true,
    dataType: 'json',
    data: bill,
    success: ()=> { alert("Success"); },
    error: ()=> { alert('Failed!'); },
  })
)
