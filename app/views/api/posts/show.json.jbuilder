json.post do
    json.extract! @post, :id, :body, :profile_user_id, :post_author_id, :created_at
    json.postPhoto url_for(@post.post_photo) if @post.post_photo.attached?
end

json.comments do
    @post.comments.each do |comment|
        json.set! comment.id do 
            json.extract! comment, :id, :body, :post_id, :comment_author_id
        end 
    end
end