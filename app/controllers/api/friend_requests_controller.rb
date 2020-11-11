class Api::FriendRequestsController < ApplicationController
    before_action :require_logged_in

    def create
        @request = FriendRequest.new(request_params)
        @request.requester_id = current_user.id

        if @request.save
            render :show
        else
            render json: @request.errors.full_messages, status: 422
        end
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
        params.require(:friend_request).permit(:requester_id, :requestee_id)
    end
end
