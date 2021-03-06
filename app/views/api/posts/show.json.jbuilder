json.post do
    json.partial! 'post', post: @post
    json.commentIds @post.comment_ids
    json.likeIds @post.like_ids
end

json.comments do
    @post.comments.each do |comment|
        json.set! comment.id do 
            json.partial! 'api/comments/comment', comment: comment
        end 
    end
end

json.likes do
    @post.comments.each do |comment|
        comment.likes.each do |like|
            json.set! like.id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end

    @post.likes.each do |like|
        json.set! like.id do
            json.partial! 'api/likes/like', like: like
        end
    end
end