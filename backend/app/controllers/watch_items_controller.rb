class WatchItemsController < ApplicationController
  def index
    watch_items = WatchItem.where(user_id: params[:user_id])
    render json: watch_items, include: [:movies, :users]
    byebug
  end

  def show 
   watch_item = WatchItem.find(params[:id])
   render json: watch_item, include: [:movies, :users]
  end

  def create
    watch_item = WatchItem.create!(watch_params)
    render json: watch_item, include: [:movie, :user]
  end
    
    def destroy
      watch_item = WatchItem.find(params[:id])
      watch_item.destroy
  end
    
    

private

    def watch_params
        params.require(:watch_items).permit(:movie_id, :user_id, :movie)
    end

end
