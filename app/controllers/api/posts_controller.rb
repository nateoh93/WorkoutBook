class Api::PostsController < ApplicationController
    # before_action :require_logged_in

    def index
        # debugger

        
        if params[:wallId] == 'all'
            @posts = Post.all
        else
            # @posts = @posts.where(profile_user_id: params[:wallId])
            @posts = Post.all.where(profile_user_id: params[:wallId])
            # if @posts.length == 0
            #     return nil
            # end
        end
        render :index
    end

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def create
        # debugger
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        # debugger
        @post = Post.find_by(id: params[:id])
        if @post.destroy
            render :show
        else
            render json: ["Can't delete this post"], status: 422
        end
    end
    private

    def post_params
        params.require(:post).permit(:body, :profile_user_id, :post_author_id, :post_photo)
    end
end
