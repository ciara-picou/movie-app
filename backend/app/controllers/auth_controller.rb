class AuthController < ApplicationController
    def create
        user = User.find_by(username: params[:username])

        if user && user.authenticate(params[:password])
            render json: {username: user.username}
        else
            render json: {error: "invalid username or password"}
        end
    end
end

#.authenticate method to check password using bcrypt gem
