class UsersController < ApplicationController
    # def index
    #     user = User.all
    #     render json: user
    # end

    # def show
    #     user = User.find(params[:id])
    #     render json: user
    # end

    def create
        user = User.new(user_params)

        if user.valid?
            user.save
            render json: user, status: :created
            # render json: {user}, status: :created
            # render json: {user: UserSerializer.new(user)}, status: :created
        else
            render json: {error: "Failed to create a user"}, status: :not_acceptable
        end
    end
        
        #User.create(params[:username])
        
        
   



    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end
    private

    def user_params
        params.permit(:username, :password)
    end
    
end
