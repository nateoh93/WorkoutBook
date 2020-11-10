class Api::PostsController < ApplicationController
    # before_action :require_logged_in

    def index

        
        if params[:wallId] == 'all'
            @posts = Post.includes(:comments, :likes).all
        else
            # @posts = Post.where(profile_user_id: params[:wallId])
            @posts = Post.includes(:comments, :likes).all.where(profile_user_id: params[:wallId])
        end
        render :index
    end

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
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
