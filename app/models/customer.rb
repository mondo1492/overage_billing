class Customer < ApplicationRecord
  has_many :usage_entries

  def overTF
    self.usage_entries.last(1).first.usage > self.monthlyApiLimit ? true : false
  end
end
