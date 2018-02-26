# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Customer.destroy_all
UsageEntry.destroy_all
Bill.destroy_all

customers = [
  { name: "Customer1",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2017-01-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer1.com",
    address: "1 appian way, Redmond , Washington",
    monthly_api_limit: 100000,
    overage_unit_cost: 0.1
  },
  { name: "Customer2",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2017-02-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer2.com",
    address: "2 appian way, Redmond , Washington",
    monthly_api_limit: 200000,
    overage_unit_cost: 0.09
  },
  { name: "Customer3",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2017-03-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer3.com",
    address: "3 appian way, Redmond , Washington",
    monthly_api_limit: 300000,
    overage_unit_cost: 0.08
  },
  { name: "Customer4",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2017-04-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer4.com",
    address: "4 appian way, Redmond , Washington",
    monthly_api_limit: 400000,
    overage_unit_cost: 0.07
  },
  { name: "Customer5",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2017-05-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer5.com",
    address: "5 appian way, Redmond , Washington",
    monthly_api_limit: 500000,
    overage_unit_cost: 0.06
  },
  { name: "Customer6",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2017-06-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer6.com",
    address: "6 appian way, Redmond , Washington",
    monthly_api_limit: 600000,
    overage_unit_cost: 0.05
  },
  { name: "Customer7",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2017-07-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer7.com",
    address: "7 appian way, Redmond , Washington",
    monthly_api_limit: 700000,
    overage_unit_cost: 0.04
  },
  { name: "Customer8",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2017-08-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer8.com",
    address: "8 appian way, Redmond , Washington",
    monthly_api_limit: 800000,
    overage_unit_cost: 0.03
  },
  { name: "Customer9",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2017-09-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer9.com",
    address: "9 appian way, Redmond , Washington",
    monthly_api_limit: 900000,
    overage_unit_cost: 0.02
  },
  { name: "Customer10",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2017-10-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer10.com",
    address: "10 appian way, Redmond , Washington",
    monthly_api_limit: 1000000,
    overage_unit_cost: 0.01
  },
  { name: "Customer11",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2018-02-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer11.com",
    address: "11 appian way, Redmond , Washington",
    monthly_api_limit: 1000000,
    overage_unit_cost: 0.01
  },
  { name: "Customer12",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2018-02-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer12.com",
    address: "12 appian way, Redmond , Washington",
    monthly_api_limit: 1000000,
    overage_unit_cost: 0.01
  },
  { name: "Customer13",
    tier: "Business",
    annual_payment: 100000,
    start_date: "2018-02-01",
    outstanding_balance: 0,
    billing_cycles_since_payment: 0,
    email: "ap@customer13.com",
    address: "13 appian way, Redmond , Washington",
    monthly_api_limit: 1000000,
    overage_unit_cost: 0.01
  },
]
customerIds = []

customers.each do |customer|
  createdCustomer = Customer.create!(customer)
  customerIds.push(createdCustomer.id)
end

usageEntries1 = [
  {
    start_date: "2017-11-01",
    end_date: "2018-12-01",
    usage: 2000000
  },
  {
    start_date: "2017-12-01",
    end_date: "2018-01-01",
    usage: 4000000
  },
  {
    start_date: "2018-01-01",
    end_date: "2018-02-01",
    usage: 1100000
  },
  ]

customerIds.each do |customerId|
  usageEntries1.each do |usage|
    usage[:customer_id] = customerId
    new_usage = UsageEntry.create!(usage)
    bill = {status: 'New', amount: 0, customer_id: customerId, usage_entry_id: new_usage.id, paid_in_full: false}
    Bill.create!(bill)
  end

end
