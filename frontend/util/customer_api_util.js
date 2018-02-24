export const showAllCustomers = billStatus => (
  $.ajax({
    method: 'GET',
    url: 'api/customers',
    data: { status: billStatus }
  })
);

export const showCustomer = id => (
  $.ajax({
    method: 'GET',
    url: `api/customers/${id}`
  })
);

export const updateCustomer = id => (
  $.ajax({
    method: 'PATCH',
    url: `api/customers/${id}`
  })
);
