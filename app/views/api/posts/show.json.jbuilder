json.extract! @post, :id, :body, :profile_user_id, :post_author_id, :updated_at
json.postPhoto url_for(@post.post_photo) if @post.post_photo.attached?