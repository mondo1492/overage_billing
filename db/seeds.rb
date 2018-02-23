# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Customer.destroy_all

customers = [
  { name: "Company 1",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2000-01-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "email",
    address: "123 Way",
    monthly_api_limit: 5000,
    overage_unit_cost: 0.01
  },
  { name: "Company 2",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2000-01-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "email",
    address: "123 Way",
    monthly_api_limit: 6000,
    overage_unit_cost: 0.01
  },
  { name: "Company 3",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2000-01-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "email",
    address: "123 Way",
    monthly_api_limit: 7000,
    overage_unit_cost: 0.01
  }
]
customerIds = []

customers.each do |customer|
  createdCustomer = Customer.create!(customer)
  customerIds.push(createdCustomer.id)
end

usageEntries1 = [
  {
    start_date: "2000-01-01",
    end_date: "2000-02-01",
    usage: 2000
  },
  {
    start_date: "2000-02-01",
    end_date: "2000-03-01",
    usage: 4000
  },
  {
    start_date: "2000-03-01",
    end_date: "2000-04-01",
    usage: 6000
  },
  ]

customerIds.each do |customerId|
  usageEntries1.each do |usage|
    usage[:customer_id] = customerId
    UsageEntry.create!(usage)
  end

end
