class Api::UsersController < ApplicationController
    # before_action :require_logged_in, except: [:create]
    
    def index
        @users = User.all
        render :show
        # include a render
    end
    
    def show
        @user = User.find_by(id: params[:id])
        # include a render
    end
    
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end
    
    def update
        @user = User.find_by(id: params[:id])
        
        if @user.update(user_params)
            # redirect somewhere
        else
            render json: @user.errors.full_messages, status: 422
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
            :school
        )
    end
end