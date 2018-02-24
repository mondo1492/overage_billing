class Customer < ApplicationRecord
  has_many :usage_entries
  has_many :bills

  def previous_month_entry
    self.usage_entries.last(1).first
  end

  def self.with_status(status)

  end

  def previous_month_usge
    @previous_month_usge ||= previous_month_entry.usage
  end

  def over_bool
    previous_month_usge > self.monthly_api_limit ? true : false
  end

  def over_amt
    previous_month_usge - self.monthly_api_limit
  end

  def over_cost
    over_amt * self.overage_unit_cost
  end

  def bill_status
    previous_month_entry.bill.status
  end

  def bill_id
    previous_month_entry.bill.id
  end
end
