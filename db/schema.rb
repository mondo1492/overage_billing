# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180226161432) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bills", force: :cascade do |t|
    t.integer "usage_entry_id", null: false
    t.integer "customer_id", null: false
    t.string "status"
    t.float "amount"
    t.boolean "paid_in_full"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "explanation"
    t.string "writeoff_approver"
    t.index ["customer_id"], name: "index_bills_on_customer_id"
    t.index ["usage_entry_id"], name: "index_bills_on_usage_entry_id"
  end

  create_table "customers", force: :cascade do |t|
    t.string "name", null: false
    t.string "tier", null: false
    t.float "annual_payment", null: false
    t.date "start_date", null: false
    t.date "end_date"
    t.date "latest_billing_date"
    t.float "outstanding_balance", null: false
    t.integer "billing_cycles_since_payment", null: false
    t.string "email", null: false
    t.string "address", null: false
    t.integer "monthly_api_limit", null: false
    t.float "overage_unit_cost", null: false
  end

  create_table "usage_entries", force: :cascade do |t|
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.integer "usage", null: false
    t.integer "customer_id", null: false
    t.index ["customer_id"], name: "index_usage_entries_on_customer_id"
  end

end
