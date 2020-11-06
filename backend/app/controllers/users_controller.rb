class UsersController < ApplicationController
    def index
        user = User.all
        render json: user
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user= User.create(user_params)
        render json: user
        #User.create(params[:username])
        
        
    end



    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end
    private

    def user_params
        params.require(:user).permit(:username, :password_digest)
    end
    
end
