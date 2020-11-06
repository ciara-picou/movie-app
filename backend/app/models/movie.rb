class Movie < ApplicationRecord
    has_many :watch_items
    has_many :users, through: :watch_items
    has_many :movie_genres
    has_many :genres, through: :movie_genres
end
