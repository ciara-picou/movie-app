class User < ApplicationRecord
    has_secure_password
    has_many :watch_items, dependent: :destroy
    has_many :movies, through: :watch_items
  
end
 