class AddBillColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :bills, :explanation, :string
    add_column :bills, :writeoff_approver, :string
  end
end
