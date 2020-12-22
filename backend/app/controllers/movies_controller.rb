class MoviesController < ApplicationController
    #before_action

    def index
         movies = Movie.all
        # movies= Movie.all.to_json(include: {genres})
        render json: movies, include: :genres
        # Artist.all.to_json(include: {albums: {include: :songs}})
        
    end

    
    def show
        movie = Movie.find(params[:id])
        render json: movie, include: :genres
    end
    
    private

    
    
    
end
