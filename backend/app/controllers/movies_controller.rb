class MoviesController < ApplicationController
    #before_action

    def index
         movies = Movie.all
      
        render json: movies, include: :genres
     
        
    end

    
    def show
        movie = Movie.find(params[:id])
        render json: movie, include: :genres
    end
    
    private

    
    
    
end
