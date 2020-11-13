class UsersController < ApplicationController
    skip_before_action :logged_in?, only: [:create]
    def index
        headers= request.headers["Authorization"]
        token= headers.split(" ")[1]
        begin
            
        user_id = JWT.decode(token, "se082420")[0]["user_id"]
        user= User.find(user_id)
        # rescue JWT::DecodeError
        rescue 

           user=nil
        end
        
        render json: user, include: :movies  

    end

    def show
        user = User.find(params[:id])
        render json: user, include: :movies
    end

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
