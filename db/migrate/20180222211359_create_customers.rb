class CreateCustomers < ActiveRecord::Migration[5.1]
  def change
    create_table :customers do |t|
      t.string :name, null: false
      t.string :tier, null: false
      t.float :annualPayment, null: false
      t.date :startDate, null: false
      t.date :endDate
      t.date :latestBillingDate
      t.float :outstandingBalance, null: false
      t.integer :billingCyclesSincePayment, null: false
      t.string :email, null: false
      t.string :address, null: false
      t.integer :monthlyApiLimit, null: false
      t.float :overageUnitCost, null: false
      t.timestamps
    end
  end
end
