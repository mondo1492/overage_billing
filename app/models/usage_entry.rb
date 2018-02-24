class UsageEntry < ApplicationRecord
  belongs_to :customer
  has_one :bill

end
