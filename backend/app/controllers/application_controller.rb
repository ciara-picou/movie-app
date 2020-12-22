class ApplicationController < ActionController::API
    before_action :logged_in?
    def encode_token(payload)
        JWT.encode(payload, "se082420", "HS256") 
    end

    def logged_in?
        headers= request.headers["Authorization"]
        token= headers.split(" ")[1]
        begin
            
        user_id = JWT.decode(token, "se082420")[0]["user_id"]
        user= User.find(user_id)
        # rescue JWT::DecodeError
        rescue 

           user=nil
        end
        
        render json: {error: "Please Log In"} unless user
    end
end
