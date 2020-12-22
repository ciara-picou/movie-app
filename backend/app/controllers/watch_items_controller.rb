class WatchItemsController < ApplicationController
  def index
    watch_items = WatchItem.all
    render json: watch_items, include: [:movies, :users]
  end

  def show 
   watch_item = WatchItem.find
   render json: watch_item, include: [:movies, :users]
  end

  def create
    watch_item = WatchItem.create!(watch_params)
    render json: watch_item, include: [:movie, :user]
    #User.create(params[:username])
  end
    
    def destroy
      watch_item = WatchItem.find(params[:id])
      watch_item.destroy
      render json: watch_item, include: [:movies, :users]
  end
    
    

private

    def watch_params
        params.require(:watch_items).permit(:movie_id, :user_id)
    end

end
