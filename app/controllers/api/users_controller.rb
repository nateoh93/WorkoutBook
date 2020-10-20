class Api::UsersController < ApplicationController
    # before_action :require_logged_in, except: [:create]
    
    def index
        @users = User.all
        render :index
    end
    
    def show
        @user = User.find_by(id: params[:id])
        render :show
    end
    
    def create
        @user = User.new(user_params)
        
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors, status: 422
        end
    end
    
    def update
        # @user = User.find_by(id: params[:id])
        @user = current_user
        
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(
            :email, 
            :password, 
            :fname, 
            :lname, 
            :birthday, 
            :bio, 
            :city,
            :work,
            :school,
            :cover_photo,
            :profile_photo
        )
    end
end
