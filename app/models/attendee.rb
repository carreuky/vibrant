class Attendee < ApplicationRecord
    validates :name ,:email ,:phonenumber ,presence: true

    has_many :events
end
