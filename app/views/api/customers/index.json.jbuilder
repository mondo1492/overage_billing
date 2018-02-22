@customers.each do |customer|
  json.set! customer.id do
    json.partial! 'api/customers/customer', customer: customer
  end
end
