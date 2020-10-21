class Comment < ApplicationRecord
    validates :body, :post_id, :comment_author_id, presence: true

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post
    
    belongs_to :author,
        foreign_key: :comment_author_id,
        class_name: :User

    has_many :likes, as: :likeable,
        dependent: :destroy

end
