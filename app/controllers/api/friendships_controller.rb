class Api::FriendshipsController < ApplicationController
    def index
        @friends = Friendship.all
        if params[:wallId]
            @friends = @friends.where(user_id: params[:wallId])
        end
        render :index
    end

    def create
        if Friendship.find_by(user_id: current_user.id, friend_id: params[:requester_id])
            render json: ["Already friends, can't add friend again."], status: 422
        end
        
        @friend = Friendship.new(user_id: current_user.id, friend_id: params[:requester_id])
        @inverse_friend = Friendship.new(user_id: params[:requester_id], friend_id: current_user.id)
        @request = FriendRequest.find_by(id: params[:id])

        if @friend.save && @inverse_friend.save && @request.destroy
            render :show
        else
            render json: @friend.full_messages, status: 422
        end
    end

    def destroy
        @friend = Friendship.find_by(id: params[:id])

        @inverse_friend = Friendship.find_by(user_id: @friend.friend_id, friend_id: current_user.id)

        if @friend.destroy && @inverse_friend.destroy
            render :show
        else
            render json: @friend.full_messages, status: 422
        end
    end

    private

    def friend_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end
end