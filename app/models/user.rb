class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true , uniqueness: true
<<<<<<< HEAD
<<<<<<< HEAD
    validates :password, presence: true , length: { in: 6..20 }
=======
    validates :password, presence: true 
>>>>>>> ef397d8bbaf49dc51d019f0005f056f95a612f7e
=======
    validates :password, presence: true , length: { in: 4..20 }
>>>>>>> 37fc766e503270d4773eea673a7d31e066bb52ae

    has_many :events


end
