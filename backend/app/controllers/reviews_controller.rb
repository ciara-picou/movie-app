class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
      end
    
      def show 
       review = Review.find(params[:id]) 
       render json: review
      end
    
      def create
        review = Review.create(review_params)
        render json: review
        #User.create(params[:username])
      end
        
        def destroy
          review = Review.find(params[:id])
          review.destroy
          render json: review
      end

      private

      def review_params
        params.require(:review).permit(:user_id, :movie_id, :content, :username)
      end
end
