class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews, include: [:movies]
        # byebug
      end
    
      def show 
       review = Review.find(params[:id])
       render json: review, include: [:movies]
      end
    
      def create
        review = Review.create!(review_params)
        render json: review, include: [:movie]
      end
        
        def destroy
          review = Review.find(params[:id])
          review.destroy
      end
        
        
    
    private
    
        def review_params
            params.require(:reviews).permit(:movie_id, :username, :content)
        end
    
    end
