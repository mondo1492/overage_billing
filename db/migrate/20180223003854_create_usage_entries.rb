class CreateUsageEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :usage_entries do |t|
      t.date "startDate", null: false
      t.date "endDate", null: false
      t.integer "usage", null: false
      t.integer "customer_id", null: false
      t.timestamps
    end
  end
end
