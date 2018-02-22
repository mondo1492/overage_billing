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
    monthlyApiLimit: 100,
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
    monthlyApiLimit: 100,
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
    monthlyApiLimit: 100,
    overageUnitCost: 0.01
  }
]

customers.each do |customer|
  Customer.create!(customer)
end
