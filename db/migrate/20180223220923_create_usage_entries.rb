class CreateUsageEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :usage_entries do |t|
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :usage, null: false
      t.integer :customer_id, null: false, index: true
    end
  end
end
