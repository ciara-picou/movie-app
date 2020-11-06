class User < ApplicationRecord
    has_many :watch_items
    has_many :movies, through: :watch_items
end
