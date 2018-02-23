class CreateCustomers < ActiveRecord::Migration[5.1]
  def change
    create_table :customers do |t|
      t.string :name, null: false
      t.string :tier, null: false
      t.float :annual_payment, null: false
      t.date :start_date, null: false
      t.date :end_date
      t.date :latest_billing_date
      t.float :outstanding_balance, null: false
      t.integer :billing_cycles_since_payment, null: false
      t.string :email, null: false
      t.string :address, null: false
      t.integer :monthly_api_limit, null: false
      t.float :overage_unit_cost, null: false
    end
  end
end
