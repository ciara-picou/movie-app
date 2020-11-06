class MovieGenre < ApplicationRecord
    belongs_to :movie
    belongs_to :genre 

    render json: movie_genres, include: [:movies, :genres]

end
