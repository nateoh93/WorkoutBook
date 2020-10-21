class Api::CommentsController < ApplicationController
    # before_action :require_logged_in

    def index
        @requests = FriendRequest.where(requestee_id: current_user.id)
        render :index
    end

    def create
        @request = FriendRequest.new(friend_params)

        if @request.save
            render :show
        else
            render json: @request.errors.full_messages, status: 422
        end
    end

    def update
        @request = FriendRequest.find_by(id: params[:id])

        
    end

    def destroy
        @request = FriendRequest.find_by(id: params[:id])

        if @request.destroy
            render :show
        else
            render json: @request.errors.full_messages, status: 422
        end
    end

    private
    def request_params
        params.require(:friend_requests).permit(:requester_id, :requestee_id)
    end
end