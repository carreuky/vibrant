class Attendee < ApplicationRecord
    validates :name ,:email ,:phonenumber ,presence: true
end
