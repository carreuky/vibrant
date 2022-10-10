class Event < ApplicationRecord
   belongs_to :user

   validates :eventname,:fee,:location,:date,:slots,:details, presence: true

end
