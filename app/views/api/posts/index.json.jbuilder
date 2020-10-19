json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :body, :profile_user_id, :post_author_id, :created_at
            json.postPhoto url_for(post.post_photo) if post.post_photo.attached?
            json.commentIds post.comment_ids
        end
    end
end

json.comments do
    @posts.each do |post|
        post.comments.each do |comment|
            json.set! comment.id do 
                json.extract! comment, :id, :body, :post_id, :comment_author_id
            end 
        end
    end
end