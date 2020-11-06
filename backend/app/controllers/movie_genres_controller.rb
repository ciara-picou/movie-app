class MovieGenresController < ApplicationController
    def index
        movie_genres = MovieGenre.all
        render json: movie_genres, include: [:movies, :genres]
    end

    

    def show
        movie_genres = MovieGenres.find(params[:id])
        render json: movie_genres, include: [:movies, :genres]
    end

    private

    def movie_genre_params
        params.require(:movie_genre).permit(:movie_id, :genre_id)
    end
    
end
