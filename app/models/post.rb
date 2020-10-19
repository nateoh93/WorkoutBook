class Post < ApplicationRecord
    belongs_to :profile_user,
        foreign_key: :profile_user_id,
        class_name: :User

    belongs_to :author,
        foreign_key: :post_author_id,
        class_name: :User

    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment,
        dependent: :destroy

    has_one_attached :post_photo
end
