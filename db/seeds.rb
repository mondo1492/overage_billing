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
    annualPayment: 100000,
    startDate: "2000-01-01",
    outstandingBalance: 0,
    billingCyclesSincePayment: 0,
    email: "email",
    address: "123 Way",
    monthlyApiLimit: 5000,
    overageUnitCost: 0.01
  },
  { name: "Company 2",
    tier: "Business",
    annualPayment: 100000,
    startDate: "2000-01-01",
    outstandingBalance: 0,
    billingCyclesSincePayment: 0,
    email: "email",
    address: "123 Way",
    monthlyApiLimit: 6000,
    overageUnitCost: 0.01
  },
  { name: "Company 3",
    tier: "Business",
    annualPayment: 100000,
    startDate: "2000-01-01",
    outstandingBalance: 0,
    billingCyclesSincePayment: 0,
    email: "email",
    address: "123 Way",
    monthlyApiLimit: 7000,
    overageUnitCost: 0.01
  }
]
customerIds = []

customers.each do |customer|
  createdCustomer = Customer.create!(customer)
  customerIds.push(createdCustomer.id)
end

usageEntries1 = [
  {
    startDate: "2000-01-01",
    endDate: "2000-02-01",
    usage: 2000
  },
  {
    startDate: "2000-02-01",
    endDate: "2000-03-01",
    usage: 4000
  },
  {
    startDate: "2000-03-01",
    endDate: "2000-04-01",
    usage: 6000
  },
  ]

customerIds.each do |customerId|
  usageEntries1.each do |usage|
    usage[:customer_id] = customerId
    UsageEntry.create!(usage)
  end

end
