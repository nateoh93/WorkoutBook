class Friendship < ApplicationRecord
    validates :user_id, :friend_id, presence: true
    validates :user_id, uniqueness: { scope: :friend_id}
    validate :reject_self_add

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
        
    belongs_to :friend,
        foreign_key: :friend_id,
        class_name: :User

    def reject_self_add
        if user_id == friend_id
            errors[:user_id] << "You can't add yourself"
        end
    end

end