export const showAllCustomers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/customers',
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
