class Customer < ApplicationRecord
  has_many :usage_entries

  def lastEntry
    @lastEntry ||= self.usage_entries.last(1).first.usage
  end

  def monthlyLimit
    self.monthlyApiLimit
  end

  def self.is_overage
    debugger
    # self.where('mon')
  end

  def overTF
    lastEntry > self.monthly_api_limit ? true : false
  end

  def overAmt
    lastEntry - self.monthly_api_limit
  end

  def overCost
    overAmt * self.overage_unit_cost
  end
end
