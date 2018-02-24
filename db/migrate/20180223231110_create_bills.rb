class CreateBills < ActiveRecord::Migration[5.1]
  def change
    create_table :bills do |t|
      t.integer :usage_entry_id, null: false, index: true
      t.integer :customer_id, null: false, index: true
      t.string :status
      t.float :amount
      t.boolean :paid_in_full
      t.timestamps
    end
  end
end
