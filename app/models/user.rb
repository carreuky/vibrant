class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true , uniqueness: true
<<<<<<< HEAD
    validates :password, presence: true , length: { in: 6..20 }
=======
    validates :password, presence: true 
>>>>>>> ef397d8bbaf49dc51d019f0005f056f95a612f7e

    has_many :events


end
