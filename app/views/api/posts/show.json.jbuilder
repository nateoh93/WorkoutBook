json.post do
    json.extract! @post, :id, :body, :profile_user_id, :post_author_id, :created_at
    json.postPhoto url_for(@post.post_photo) if @post.post_photo.attached?
    json.commentIds @post.comment_ids
    json.likeIds @post.like_ids
end

json.comments do
    @post.comments.each do |comment|
        json.set! comment.id do 
            json.extract! comment, :id, :body, :post_id, :comment_author_id
            json.likeIds comment.like_ids
        end 
    end
end

json.likes do
    @post.comments.each do |comment|
        comment.likes.each do |like|
            json.set! like.id do
                json.extract! like, :id, :author_id, :likeable_id, :likeable_type
            end
        end
    end

    @post.likes.each do |like|
        json.set! like.id do
            json.extract! like, :id, :author_id, :likeable_id, :likeable_type
        end
    end
end