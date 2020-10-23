class Api::FriendshipsController < ApplicationController
    def index
        # debugger
        @friends = Friendship.all
        if params[:wallId]
            @friends = @friends.where(user_id: params[:wallId])
        end
        # debugger
        render :index
    end

    def create
        if Friendship.find_by(user_id: current_user.id, friend_id: params[:requester_id])
            render json: ["Already friends, can't add friend again."], status: 422
        end
        
        debugger
        @friend = Friendship.new(user_id: current_user.id, friend_id: params[:requester_id])
        @inverse_friend = Friendship.new(user_id: params[:requester_id], friend_id: current_user.id)
        
        # @request = FriendRequest.find_by(requester_id: params[:requester_id], requestee_id: current_user.id)
        @request = FriendRequest.find_by(id: params[:id])

        # @friend = Friendship.new(friend_params)
        # user2_id = @friend.friend_id
        # friend2_id = @friend.user_id
        # @inverse_friend = Friendship.new(user_id: user2_id, friend_id: friend2_id)
        # @request = FriendRequest.find_by(requester_id: user2_id, requestee_id: friend2_id)

        if @friend.save && @inverse_friend.save && @request.destroy
            render :show
        else
            render json: @friend.full_messages, status: 422
        end
    end

    def destroy
            # debugger

        # @friend = Friendship.find_by(id: params[:id])
        @friend = Friendship.find_by(user_id: current_user.id, friend_id: params[:id])
        @inverse_friend = Friendship.find_by(user_id: params[:id], friend_id: current_user.id)

        # @friend = Friendship.find_by(id: params[:id])
        # user2_id = @friend.friend_id
        # friend2_id = @friend.user_id
        # @inverse_friend = Friendship.find_by(user_id: user2_id, friend_id: friend2_id)

        if @friend.destroy && @inverse_friend.destroy
            render json: {}
        else
            render json: @friend.full_messages, status: 422
        end
    end

    private

    def friend_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end
end