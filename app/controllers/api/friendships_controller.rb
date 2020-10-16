class Api::FriendshipsController < ApplicationController
    def create
        @friend = Friend.new(user_id: current_user.id, friend_id: params[:id])
        @inverse_friend = Friend.new(user_id: params[:id], friend_id: current_user.id)

        if Friend.find_by(user_id: current_user.id, friend_id: params[:id])
            render json: ["Already friends, can't add friend again."], status: 422
        elsif @friend.save && @inverse_friend.save
            render :show
        else
            render json: @friend.full_messages, status: 422
        end
    end

    def destroy
        @friend = Friend.find_by(user_id: current_user.id, friend_id: params[:id])
        @inverse_friend = Friend.find_by(user_id: params[:id], friend_id: current_user.id)

        if @friend.destroy && @inverse_friend.destroy
            render json: {}
        else
            render json: @friend.full_messages, status: 422
        end
    end

    private

    def friend_params
        params.require(:friendships).permit(:user_id, :friend_id)
    end
end