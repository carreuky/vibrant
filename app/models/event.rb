class Event < ApplicationRecord
   belongs_to :user

   validates :eventname,:fee,:location,:date,:slots,:details, presence: true
   # validates :slots, comparison: { greater_than: 0 }
   # validates :fee , comparison: {:greater_than_or_equal_to: 0}

end
