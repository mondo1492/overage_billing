class Bill < ApplicationRecord
  belongs_to :usage_entry,
    primary_key: :id,
    foreign_key: :usage_entry_id
end
